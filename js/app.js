// ========================================
// SPANISH RACING SERIES - APP T36
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    initCountdown();
    renderPilotos();
    renderSupercopa();
    renderClasificacion();
    renderJornadasTrack();
    initNavigation();
});

function renderStats() {
    const statsRoot = document.getElementById('hero-stats');
    if (!statsRoot) return;

    const stats = [
        `${pilotosT36.length} pilotos confirmados`,
        `${supercopaT36.length} plazas Supercopa`,
        `${jornadasT36.length} jornadas programadas`
    ];

    statsRoot.innerHTML = stats.map((item) => `<span class="stat-pill">${item}</span>`).join('');
}

function initCountdown() {
    const timeRoot = document.getElementById('countdown-time');
    const noteRoot = document.getElementById('countdown-note');
    const zonesRoot = document.getElementById('countdown-zones');
    if (!timeRoot || !noteRoot || !zonesRoot) return;

    const eventZone = 'Europe/Madrid';
    const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    const jornadasSchedule = buildJornadasSchedule(eventZone);

    function tick() {
        const now = new Date();
        const target = getNextJornadaTarget(jornadasSchedule, now);
        if (!target) {
            timeRoot.textContent = '00:00:00';
            noteRoot.textContent = 'No hay mas jornadas programadas en el calendario.';
            zonesRoot.innerHTML = [
                renderZoneTag('Espana peninsular', eventZone, now),
                renderZoneTag('Canarias', 'Atlantic/Canary', now),
                renderZoneTag('Argentina', 'America/Argentina/Buenos_Aires', now),
                renderZoneTag(`Tu zona (${localZone})`, localZone, now)
            ].join('');
            return;
        }

        const diffMs = target.date.getTime() - now.getTime();
        const safeDiff = Math.max(diffMs, 0);

        timeRoot.textContent = formatDuration(safeDiff);

        const dateLabel = formatDateInZone(target.date, eventZone);
        noteRoot.textContent =
            safeDiff > 0
                ? `Proxima jornada: ${target.nombre} (${dateLabel}) a las 21:00 (hora peninsular)`
                : `En curso: ${target.nombre}`;

        zonesRoot.innerHTML = [
            renderZoneTag('Espana peninsular', eventZone, target.date),
            renderZoneTag('Canarias', 'Atlantic/Canary', target.date),
            renderZoneTag('Argentina', 'America/Argentina/Buenos_Aires', target.date),
            renderZoneTag(`Tu zona (${localZone})`, localZone, target.date)
        ].join('');
    }

    tick();
    setInterval(tick, 1000);
}

function getZonedParts(date, zone) {
    const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: zone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h23'
    });

    const parts = formatter.formatToParts(date);
    const map = {};
    parts.forEach((part) => {
        if (part.type !== 'literal') {
            map[part.type] = Number(part.value);
        }
    });

    return {
        year: map.year,
        month: map.month,
        day: map.day,
        hour: map.hour,
        minute: map.minute,
        second: map.second
    };
}

function shiftYmd(year, month, day, addDays) {
    const shifted = new Date(Date.UTC(year, month - 1, day + addDays, 0, 0, 0));
    return {
        year: shifted.getUTCFullYear(),
        month: shifted.getUTCMonth() + 1,
        day: shifted.getUTCDate()
    };
}

function buildJornadasSchedule(zone) {
    const now = new Date();
    const currentYear = getZonedParts(now, zone).year;
    const currentYearSchedule = parseJornadasForYear(zone, currentYear);

    const hasFutureInCurrentYear = currentYearSchedule.some((entry) => entry.date.getTime() > now.getTime());
    if (hasFutureInCurrentYear) return currentYearSchedule;

    return parseJornadasForYear(zone, currentYear + 1);
}

function parseJornadasForYear(zone, year) {
    return jornadasT36
        .map((jornada) => {
            const ymd = parseSpanishJornadaDate(jornada.fecha || '');
            if (!ymd) return null;

            return {
                nombre: jornada.nombre,
                date: zonedDateTimeToUtc(zone, year, ymd.month, ymd.day, 21, 0, 0)
            };
        })
        .filter(Boolean)
        .sort((a, b) => a.date.getTime() - b.date.getTime());
}

function parseSpanishJornadaDate(text) {
    const monthMap = {
        enero: 1,
        febrero: 2,
        marzo: 3,
        abril: 4,
        mayo: 5,
        junio: 6,
        julio: 7,
        agosto: 8,
        septiembre: 9,
        setiembre: 9,
        octubre: 10,
        noviembre: 11,
        diciembre: 12
    };

    const normalized = normalizeText(text);
    const match = normalized.match(/^[a-z]+\s+(\d{1,2})\s+de\s+([a-z]+)$/i);
    if (!match) return null;

    const day = Number(match[1]);
    const month = monthMap[match[2].toLowerCase()];
    if (!month || !Number.isInteger(day) || day < 1 || day > 31) return null;

    return { day, month };
}

function normalizeText(value) {
    return String(value)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function getNextJornadaTarget(schedule, now) {
    return schedule.find((entry) => entry.date.getTime() > now.getTime()) || null;
}

function zonedDateTimeToUtc(zone, year, month, day, hour, minute, second) {
    const utcBase = Date.UTC(year, month - 1, day, hour, minute, second);
    const firstGuess = new Date(utcBase - getZoneOffsetMs(zone, new Date(utcBase)));
    const refinedOffset = getZoneOffsetMs(zone, firstGuess);
    return new Date(utcBase - refinedOffset);
}

function getZoneOffsetMs(zone, date) {
    const zoned = getZonedParts(date, zone);
    const asIfUtc = Date.UTC(zoned.year, zoned.month - 1, zoned.day, zoned.hour, zoned.minute, zoned.second);
    return asIfUtc - date.getTime();
}

function formatDateInZone(date, zone) {
    return new Intl.DateTimeFormat('es-ES', {
        timeZone: zone,
        weekday: 'long',
        day: '2-digit',
        month: '2-digit'
    }).format(date);
}

function formatZoneTime(date, zone) {
    return new Intl.DateTimeFormat('es-ES', {
        timeZone: zone,
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
    }).format(date);
}

function renderZoneTag(label, zone, date) {
    return `<span class="countdown-zone"><strong>${escapeHtml(label)}</strong> ${escapeHtml(formatZoneTime(date, zone))}</span>`;
}

function formatDuration(diffMs) {
    const totalSeconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function renderPilotos() {
    const pilotosRoot = document.getElementById('pilotos-list');
    const countRoot = document.getElementById('pilotos-count');
    if (!pilotosRoot) return;

    if (countRoot) {
        countRoot.textContent = `${pilotosT36.length} pilotos`;
    }

    const pilotosHtml = pilotosT36
        .map((piloto) => {
            return `
                <article class="piloto-row">
                    <span class="piloto-rank">#${piloto.pos}</span>
                    <div class="piloto-meta">
                        <strong>${escapeHtml(piloto.nombre)}</strong>
                        <small>${escapeHtml(piloto.equipo)}</small>
                    </div>
                </article>
            `;
        })
        .join('');

    pilotosRoot.innerHTML = pilotosHtml;
}

function renderSupercopa() {
    const supercopaRoot = document.getElementById('supercopa-grid');
    if (!supercopaRoot) return;

    const cardsHtml = supercopaT36
        .map((entry) => {
            return `
                <article>
                    <div class="supercopa-icon" style="background: linear-gradient(145deg, ${entry.color}, #3a0d14)">
                        <i class="fas ${entry.icon}"></i>
                    </div>
                    <span class="supercopa-label">${escapeHtml(entry.label)}</span>
                    <h3 class="supercopa-name">${escapeHtml(entry.nombre)}</h3>
                    <p class="supercopa-team">${escapeHtml(entry.equipo)}</p>
                </article>
            `;
        })
        .join('');

    supercopaRoot.innerHTML = cardsHtml;
}

function renderClasificacion() {
    const clasificacionRoot = document.getElementById('clasificacion-list');
    if (!clasificacionRoot) return;

    const rowsHtml = pilotosT36
        .slice()
        .sort((a, b) => a.pos - b.pos)
        .map((piloto, index) => {
            const puntos = Number.isFinite(piloto.puntos) ? piloto.puntos : 0;
            const topClass = index < 3 ? ` top-${index + 1}` : '';

            return `
                <article class="clasificacion-row${topClass}">
                    <span class="row-pos">#${piloto.pos}</span>
                    <div class="row-driver">
                        <strong>${escapeHtml(piloto.nombre)}</strong>
                        <small>${escapeHtml(piloto.equipo)}</small>
                    </div>
                    <span class="row-points">${puntos}</span>
                </article>
            `;
        })
        .join('');

    clasificacionRoot.innerHTML = rowsHtml;
}

function renderJornadasTrack() {
    const trackRoot = document.getElementById('jornadas-track');
    if (!trackRoot) return;

    trackRoot.innerHTML = jornadasT36
        .map((jornada) => {
            const enfrentamientos = (jornada.enfrentamientos || [])
                .map((duelo) => `<li>${escapeHtml(duelo)}</li>`)
                .join('');

            return `
                <div class="track-item">
                    <strong>${escapeHtml(jornada.nombre)}</strong>
                    <span class="track-meta">${escapeHtml(jornada.fecha || '')} | ${escapeHtml(jornada.estado || '')}</span>
                    <small>${(jornada.enfrentamientos || []).length} enfrentamientos</small>
                    <ol class="track-duels">${enfrentamientos}</ol>
                </div>
            `;
        })
        .join('');
}

function initNavigation() {
    const links = Array.from(document.querySelectorAll('.main-nav a'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const hash = link.getAttribute('href');
            const target = hash ? document.querySelector(hash) : null;
            if (!target) return;

            const top = target.offsetTop - 90;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', () => {
        let currentId = sections[0]?.id || '';
        sections.forEach((section) => {
            const triggerPoint = section.offsetTop - 140;
            if (window.scrollY >= triggerPoint) {
                currentId = section.id;
            }
        });

        links.forEach((link) => {
            const targetId = (link.getAttribute('href') || '').replace('#', '');
            if (targetId === currentId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

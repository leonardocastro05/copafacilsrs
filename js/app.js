// ========================================
// SPANISH RACING SERIES - APP T36
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    renderPilotos();
    renderSupercopa();
    renderJornadasTrack();
    initNavigation();
});

function renderStats() {
    const statsRoot = document.getElementById('hero-stats');
    if (!statsRoot) return;

    const stats = [
        `${pilotosT36.length} pilotos confirmados`,
        `${supercopaT36.length} plazas Supercopa`,
        `${jornadasT36.length} jornadas en preparacion`
    ];

    statsRoot.innerHTML = stats.map((item) => `<span class="stat-pill">${item}</span>`).join('');
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
                    <div class="supercopa-icon" style="background: linear-gradient(145deg, ${entry.color}, #183860)">
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

function renderJornadasTrack() {
    const trackRoot = document.getElementById('jornadas-track');
    if (!trackRoot) return;

    trackRoot.innerHTML = jornadasT36
        .map((jornada) => {
            return `
                <div class="track-item">
                    <strong>${escapeHtml(jornada.nombre)}</strong>
                    <span>${escapeHtml(jornada.estado)}</span>
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

// ========================================
// SPANISH RACING SERIES - APP
// Temporada 35
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar la aplicaciÃ³n
    // initClasificacion();
    initJornadas();
    initPilotos();
    initNavigation();
    initScrollEffects();
    initCinematicIntro();
});

// ========================================
// CLASIFICACIÃ“N
// ========================================

function initClasificacion() {
    const container = document.getElementById('clasificacion-list');
    if (!container) return;

    if (pilotos.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <i class="fas fa-hourglass-half" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 15px;"></i>
                <h3 style="color: var(--text-secondary); margin-bottom: 10px;">Sin pilotos registrados</h3>
                <p style="color: var(--text-muted);">La Temporada 35 aÃºn no ha comenzado.</p>
            </div>
        `;
        return;
    }

    // Excluir expulsados de la clasificaciÃ³n y ordenar por puntos (descendente)
    const pilotosClasificacion = pilotos.filter(p => !p.expulsado);

    const pilotosOrdenados = [...pilotosClasificacion].sort((a, b) => {
        if (a.dsq && !b.dsq) return 1;
        if (!a.dsq && b.dsq) return -1;
        if (b.puntos !== a.puntos) return b.puntos - a.puntos;
        return a.pos - b.pos;
    });

    let html = '';
    pilotosOrdenados.forEach((piloto, index) => {
        const posicion = index + 1;
        let topClass = '';
        if (posicion === 1) topClass = 'top-1';
        else if (posicion === 2) topClass = 'top-2';
        else if (posicion === 3) topClass = 'top-3';

        html += `
            <div class="clasificacion-item ${topClass}" style="animation-delay: ${index * 0.03}s">
                <span class="pos-number">${posicion}</span>
                <div class="piloto-info">
                    <div class="piloto-avatar" style="background: ${piloto.color}">
                        ${getInitials(piloto.nombre)}
                    </div>
                    <div class="piloto-details">
                        <span class="piloto-nombre">${piloto.nombre}</span>
                        <span class="piloto-equipo">${piloto.equipo}</span>
                    </div>
                </div>
                <div class="puntos-badge ${piloto.dsq ? 'dsq' : ''}">${piloto.dsq ? 'DSQ' : piloto.puntos}</div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ========================================
// JORNADAS Y ELIMINATORIAS
// ========================================

let jornadaActual = 1;
let modoEliminatoria = false;
let eliminatoriaActual = null;

function initJornadas() {
    // Mostrar solo eliminatorias por defecto.
    modoEliminatoria = true;
    eliminatoriaActual = 'octavos';
    cambiarEliminatoria(eliminatoriaActual);

    /*
    // Event listeners para los botones de jornada (fase de grupos)
    const botonesJornada = document.querySelectorAll('.jornada-btn:not(.eliminatoria-btn)');
    botonesJornada.forEach(btn => {
        btn.addEventListener('click', function() {
            const jornada = parseInt(this.dataset.jornada);
            modoEliminatoria = false;
            eliminatoriaActual = null;
            cambiarJornada(jornada);
        });
    });
    */

    // Event listeners para los botones de eliminatorias
    const botonesEliminatoria = document.querySelectorAll('.eliminatoria-btn');
    botonesEliminatoria.forEach(btn => {
        btn.addEventListener('click', function() {
            const eliminatoria = this.dataset.eliminatoria;
            modoEliminatoria = true;
            eliminatoriaActual = eliminatoria;
            cambiarEliminatoria(eliminatoria);

            if (eliminatoria === 'semis' || eliminatoria === 'final') {
                showCinematicIntro(eliminatoria);
            }
        });
    });
}

let cinematicIntroTimer = null;
let cinematicStepTimers = [];

function initCinematicIntro() {
    const overlay = document.getElementById('cinema-intro');
    const closeBtn = document.getElementById('cinema-close');

    if (!overlay) return;

    if (closeBtn) {
        closeBtn.addEventListener('click', closeCinematicIntro);
    }

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeCinematicIntro();
        }
    });

}

function getMatchWinner(partido) {
    if (!partido) return null;

    const pilotoAScore = String(partido.resultadoA || '').trim().toUpperCase();
    const pilotoBScore = String(partido.resultadoB || '').trim().toUpperCase();

    const parsePosition = (score) => {
        const match = score.match(/^P\s*(\d+)$/i);
        return match ? parseInt(match[1], 10) : null;
    };

    if (!pilotoAScore && !pilotoBScore) return null;

    if (pilotoAScore === 'DSQ' && pilotoBScore !== 'DSQ') return partido.pilotoB || null;
    if (pilotoBScore === 'DSQ' && pilotoAScore !== 'DSQ') return partido.pilotoA || null;

    if (pilotoAScore === 'RET' && pilotoBScore !== 'RET') return partido.pilotoB || null;
    if (pilotoBScore === 'RET' && pilotoAScore !== 'RET') return partido.pilotoA || null;

    const pilotoAPosition = parsePosition(pilotoAScore);
    const pilotoBPosition = parsePosition(pilotoBScore);

    if (pilotoAPosition === null || pilotoBPosition === null) return null;
    if (pilotoAPosition === pilotoBPosition) return null;

    return pilotoAPosition < pilotoBPosition ? partido.pilotoA : partido.pilotoB;
}

function getCinematicDuels(eliminatoria) {
    if (eliminatoria === 'final') {
        const finalPartido = eliminatorias?.final?.partidos?.[0];
        if (finalPartido && finalPartido.pilotoA && finalPartido.pilotoB) {
            return [finalPartido];
        }

        const semifinales = eliminatorias?.semis?.partidos || [];
        const winners = semifinales.map(getMatchWinner).filter(Boolean);

        return [{
            pilotoA: winners[0] || 'Ganador SF1',
            pilotoB: winners[1] || 'Ganador SF2',
            resultadoA: '',
            resultadoB: '',
            placeholder: winners.length < 2
        }];
    }

    const duels = eliminatorias?.semis?.partidos || [];
    return duels.filter(d => d.pilotoA && d.pilotoB).slice(0, 2);
}

function renderCinematicDuels(eliminatoria) {
    const duelsContainer = document.getElementById('cinema-duels');
    if (!duelsContainer) return;

    const duels = getCinematicDuels(eliminatoria);
    if (duels.length === 0) {
        duelsContainer.innerHTML = `
            <div class="cinema-duel revealed">
                <div class="cinema-pilot">
                    <div class="cinema-avatar" style="background: var(--primary)">??</div>
                    <div class="cinema-pilot-info">
                        <span class="cinema-pilot-name">PILOTO</span>
                        <span class="cinema-pilot-team">Final pendiente</span>
                    </div>
                </div>
                <div class="cinema-vs">VS</div>
                <div class="cinema-pilot right">
                    <div class="cinema-avatar" style="background: var(--accent-blue)">??</div>
                    <div class="cinema-pilot-info">
                        <span class="cinema-pilot-name">PILOTO</span>
                        <span class="cinema-pilot-team">Final pendiente</span>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    let html = '';
    duels.forEach((duel, index) => {
        const leftColor = getColorByName(duel.pilotoA);
        const rightColor = getColorByName(duel.pilotoB);
        const finalPlaceholder = duel.placeholder;
        html += `
            <div class="cinema-duel ${eliminatoria === 'final' ? 'final-duel' : ''}" data-intro-duel="${index}">
                <div class="cinema-pilot">
                    <div class="cinema-avatar" style="background: ${finalPlaceholder ? 'var(--primary)' : leftColor}">${getInitials(duel.pilotoA)}</div>
                    <div class="cinema-pilot-info">
                        <span class="cinema-pilot-name">${duel.pilotoA}</span>
                        <span class="cinema-pilot-team">${finalPlaceholder ? 'Ganador de semifinal pendiente' : getEquipoByName(duel.pilotoA)}</span>
                    </div>
                </div>
                <div class="cinema-vs">VS</div>
                <div class="cinema-pilot right">
                    <div class="cinema-avatar" style="background: ${finalPlaceholder ? 'var(--accent)' : rightColor}">${getInitials(duel.pilotoB)}</div>
                    <div class="cinema-pilot-info">
                        <span class="cinema-pilot-name">${duel.pilotoB}</span>
                        <span class="cinema-pilot-team">${finalPlaceholder ? 'Ganador de semifinal pendiente' : getEquipoByName(duel.pilotoB)}</span>
                    </div>
                </div>
            </div>
        `;
    });
    duelsContainer.innerHTML = html;
}

function runCinematicSequence(eliminatoria) {
    cinematicStepTimers.forEach(timer => clearTimeout(timer));
    cinematicStepTimers = [];

    const titlePhase = document.getElementById('cinema-title-phase');
    const duelPhase = document.getElementById('cinema-duel-phase');
    const duels = document.querySelectorAll('.cinema-duel');

    if (titlePhase) titlePhase.classList.remove('revealed');
    if (duelPhase) duelPhase.classList.remove('revealed');

    const titleTimer = setTimeout(() => {
        if (titlePhase) titlePhase.classList.add('revealed');
    }, 120);
    cinematicStepTimers.push(titleTimer);

    const duelPhaseTimer = setTimeout(() => {
        if (duelPhase) duelPhase.classList.add('revealed');
    }, eliminatoria === 'final' ? 1750 : 1900);
    cinematicStepTimers.push(duelPhaseTimer);

    duels.forEach((duel, index) => {
        duel.classList.remove('revealed');
        const revealTimer = setTimeout(() => {
            duel.classList.add('revealed');
        }, (eliminatoria === 'final' ? 2050 : 2200) + (index * 450));
        cinematicStepTimers.push(revealTimer);
    });
}

function showCinematicIntro(eliminatoria = 'semis') {
    const overlay = document.getElementById('cinema-intro');
    const titleLabel = document.getElementById('cinema-phase-title');
    const dateLabel = document.getElementById('cinema-phase-date');
    const tagline = document.getElementById('cinema-phase-tagline');
    const helper = document.getElementById('cinema-phase-helper');
    const crownIcon = document.querySelector('#cinema-title-phase .cinema-crown i');
    if (!overlay) return;

    const eliminatoriaData = eliminatorias?.[eliminatoria];
    renderCinematicDuels(eliminatoria);

    if (titleLabel && eliminatoriaData?.nombre) {
        titleLabel.textContent = eliminatoriaData.nombre.toUpperCase();
    }

    if (dateLabel && eliminatoriaData?.fecha) {
        dateLabel.textContent = `${eliminatoriaData.fecha.toUpperCase()} DE 2026`;
    }

    if (tagline) {
        tagline.textContent = eliminatoria === 'final' ? 'SOLO UNO SERA CAMPEON' : 'LOS CUATRO BUSCAN SU SITIO EN LA FINAL';
    }

    if (helper) {
        helper.textContent = eliminatoria === 'final' ? 'Pulsa Final para repetir esta intro.' : 'Pulsa Semis para repetir esta intro.';
    }

    if (crownIcon) {
        crownIcon.className = eliminatoria === 'final' ? 'fas fa-trophy' : 'fas fa-crown';
    }

    overlay.classList.toggle('final-phase', eliminatoria === 'final');
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('celebration-open');
    runCinematicSequence(eliminatoria);

    if (cinematicIntroTimer) {
        clearTimeout(cinematicIntroTimer);
    }
    cinematicIntroTimer = setTimeout(closeCinematicIntro, eliminatoria === 'final' ? 10000 : 9000);
}

function closeCinematicIntro() {
    const overlay = document.getElementById('cinema-intro');
    if (!overlay) return;

    cinematicStepTimers.forEach(timer => clearTimeout(timer));
    cinematicStepTimers = [];

    overlay.classList.remove('show');
    overlay.classList.remove('final-phase');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('celebration-open');
}

function cambiarJornada(jornada) {
    jornadaActual = jornada;
    
    // Actualizar botÃ³n activo (quitar de todos)
    document.querySelectorAll('.jornada-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activar el botÃ³n correcto
    const btnActivo = document.querySelector(`.jornada-btn[data-jornada="${jornada}"]`);
    if (btnActivo) btnActivo.classList.add('active');
    
    // Actualizar tÃ­tulo
    document.querySelector('.jornada-title').textContent = `JORNADA ${jornada}`;
    
    // Actualizar fecha
    const jornadaData = jornadas[jornada];
    document.querySelector('.jornada-date').innerHTML = `<i class="fas fa-calendar"></i> ${jornadaData.fecha}`;
    
    // Renderizar partidos
    renderJornada(jornada);
}

function cambiarEliminatoria(eliminatoria) {
    // Actualizar botÃ³n activo (quitar de todos)
    document.querySelectorAll('.jornada-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activar el botÃ³n correcto
    const btnActivo = document.querySelector(`.eliminatoria-btn[data-eliminatoria="${eliminatoria}"]`);
    if (btnActivo) btnActivo.classList.add('active');
    
    // Obtener datos de la eliminatoria
    const eliminatoriaData = eliminatorias[eliminatoria];
    
    // Actualizar tÃ­tulo
    document.querySelector('.jornada-title').textContent = eliminatoriaData.nombre.toUpperCase();
    
    // Actualizar fecha
    document.querySelector('.jornada-date').innerHTML = `<i class="fas fa-calendar"></i> ${eliminatoriaData.fecha}`;
    
    // Renderizar partidos de eliminatoria
    renderEliminatoria(eliminatoria);
}

function renderEliminatoria(eliminatoria) {
    const container = document.getElementById('partidos-grid');
    if (!container) return;

    const eliminatoriaData = eliminatorias[eliminatoria];
    
    if (!eliminatoriaData || eliminatoriaData.partidos.length === 0) {
        let icono = 'fa-hourglass-half';
        let mensaje = 'Partidos por definir';
        let submensaje = 'Los enfrentamientos se determinarÃ¡n segÃºn los resultados de la fase de grupos.';
        
        if (eliminatoria === 'final') {
            icono = 'fa-trophy';
            mensaje = 'ðŸ† LA GRAN FINAL';
            submensaje = 'Los dos mejores se enfrentarÃ¡n aquÃ­ por el tÃ­tulo de campeÃ³n.';
        } else if (eliminatoria === 'semis') {
            icono = 'fa-fire';
            mensaje = 'Semifinales';
            submensaje = 'Los 4 mejores lucharÃ¡n por un puesto en la final.';
        } else if (eliminatoria === 'cuartos') {
            icono = 'fa-bolt';
            mensaje = 'Cuartos de Final';
            submensaje = 'Los 8 clasificados competirÃ¡n en eliminaciÃ³n directa.';
        } else if (eliminatoria === 'octavos') {
            icono = 'fa-flag-checkered';
            mensaje = 'Octavos de Final';
            submensaje = 'Los 16 mejores se enfrentan en knockout.';
        }
        
        container.innerHTML = `
            <div class="no-partidos eliminatoria-placeholder ${eliminatoria === 'final' ? 'final-placeholder' : ''}" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas ${icono}" style="font-size: 4rem; color: ${eliminatoria === 'final' ? 'var(--accent)' : 'var(--primary)'}; margin-bottom: 20px;"></i>
                <h3 style="color: var(--text-primary); margin-bottom: 10px; font-size: 1.5rem;">${mensaje}</h3>
                <p style="color: var(--text-secondary);">${submensaje}</p>
                <p style="color: var(--text-muted); margin-top: 15px; font-size: 0.9rem;">
                    <i class="fas fa-calendar-alt"></i> Fecha: ${eliminatoriaData.fecha}
                </p>
            </div>
        `;
        return;
    }

    // Si hay partidos, renderizarlos
    let html = '';
    eliminatoriaData.partidos.forEach((partido, index) => {
        const equipoPilotoA = getEquipoByName(partido.pilotoA);
        const equipoPilotoB = getEquipoByName(partido.pilotoB);
        
        html += `
            <div class="partido-card ${partido.dsq ? 'dsq' : ''} ${eliminatoria === 'final' ? 'final-match' : ''}" style="animation-delay: ${index * 0.05}s">
                <div class="partido-content">
                    <div class="partido-piloto left">
                        <span class="partido-piloto-nombre">${partido.pilotoA}</span>
                        <span class="partido-piloto-equipo">${equipoPilotoA}</span>
                    </div>
                    <div class="partido-resultado">
                        <span class="partido-score">${partido.resultadoA}</span>
                        <span class="partido-vs">VS</span>
                        <span class="partido-score ${partido.dsq ? 'dsq' : ''}">${partido.resultadoB}</span>
                    </div>
                    <div class="partido-piloto right">
                        <span class="partido-piloto-nombre" ${partido.dsq ? 'style="color: var(--primary)"' : ''}>${partido.pilotoB}</span>
                        <span class="partido-piloto-equipo">${equipoPilotoB}</span>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderJornada(jornada) {
    const container = document.getElementById('partidos-grid');
    if (!container) return;

    const jornadaData = jornadas[jornada];

    if (jornadaData && jornadaData.cancelada) {
        container.innerHTML = `
            <div class="no-partidos" style="grid-column: 1/-1; text-align: center; padding: 60px 20px; border: 1px solid var(--primary); border-radius: 14px; background: rgba(225, 6, 0, 0.08);">
                <i class="fas fa-ban" style="font-size: 4rem; color: var(--primary); margin-bottom: 20px;"></i>
                <h3 style="color: var(--primary); margin-bottom: 10px;">Jornada cancelada</h3>
                <p style="color: #ff8a8a;">${jornadaData.mensajeCancelacion || 'Esta jornada ha sido cancelada por problemas in-game.'}</p>
            </div>
        `;
        return;
    }
    
    if (!jornadaData || jornadaData.partidos.length === 0) {
        container.innerHTML = `
            <div class="no-partidos" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-calendar-times" style="font-size: 4rem; color: var(--text-muted); margin-bottom: 20px;"></i>
                <h3 style="color: var(--text-secondary); margin-bottom: 10px;">Sin partidos programados</h3>
                <p style="color: var(--text-muted);">Los enfrentamientos de esta jornada aÃºn no han sido definidos.</p>
            </div>
        `;
        return;
    }

    let html = '';
    jornadaData.partidos.forEach((partido, index) => {
        const equipoPilotoA = getEquipoByName(partido.pilotoA);
        const equipoPilotoB = getEquipoByName(partido.pilotoB);
        
        html += `
            <div class="partido-card ${partido.dsq ? 'dsq' : ''}" style="animation-delay: ${index * 0.05}s">
                <div class="partido-content">
                    <div class="partido-piloto left">
                        <span class="partido-piloto-nombre">${partido.pilotoA}</span>
                        <span class="partido-piloto-equipo">${equipoPilotoA}</span>
                    </div>
                    <div class="partido-resultado">
                        <span class="partido-score">${partido.resultadoA}</span>
                        <span class="partido-vs">VS</span>
                        <span class="partido-score ${partido.dsq ? 'dsq' : ''}">${partido.resultadoB}</span>
                    </div>
                    <div class="partido-piloto right">
                        <span class="partido-piloto-nombre" ${partido.dsq ? 'style="color: var(--primary)"' : ''}>${partido.pilotoB}</span>
                        <span class="partido-piloto-equipo">${equipoPilotoB}</span>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ========================================
// PILOTOS
// ========================================

function initPilotos() {
    const container = document.getElementById('pilotos-grid');
    if (!container) return;

    if (pilotos.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-user-slash" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 15px;"></i>
                <h3 style="color: var(--text-secondary); margin-bottom: 10px;">Sin pilotos registrados</h3>
                <p style="color: var(--text-muted);">Los pilotos de la Temporada 35 aÃºn no han sido confirmados.</p>
            </div>
        `;
        return;
    }

    let html = '';
    pilotos.forEach((piloto, index) => {
        html += `
            <div class="piloto-card" style="--card-color: ${piloto.color}; animation-delay: ${index * 0.03}s">
                <div class="piloto-card-header">
                    <span class="piloto-card-pos">#${piloto.pos}</span>
                    <div class="piloto-card-avatar" style="background: ${piloto.color}">
                        ${getInitials(piloto.nombre)}
                    </div>
                    <div class="piloto-card-info">
                        <span class="piloto-card-nombre">${piloto.nombre}</span>
                        <span class="piloto-card-equipo">${piloto.equipo}</span>
                    </div>
                </div>
                <div class="piloto-card-stats">
                    <div class="piloto-stat">
                        <span class="piloto-stat-value">${piloto.dsq ? 'DSQ' : piloto.puntos}</span>
                        <span class="piloto-stat-label">Puntos</span>
                    </div>
                    <div class="piloto-stat">
                        <span class="piloto-stat-value">0</span>
                        <span class="piloto-stat-label">Victorias</span>
                    </div>
                    <div class="piloto-stat">
                        <span class="piloto-stat-value">0</span>
                        <span class="piloto-stat-label">Carreras</span>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ========================================
// NAVEGACIÃ“N
// ========================================

function initNavigation() {
    // NavegaciÃ³n suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Actualizar enlace activo en scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.main-nav a');
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// EFECTOS DE SCROLL
// ========================================

function initScrollEffects() {
    // Header scroll effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos
    document.querySelectorAll('.section-header, .clasificacion-container, .jornada-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// UTILIDADES
// ========================================

function actualizarPuntos(nombrePiloto, nuevosPuntos) {
    const piloto = pilotos.find(p => p.nombre === nombrePiloto)
    if (piloto) {
        piloto.puntos = nuevosPuntos;
        initClasificacion();
    }
}

function agregarResultado(jornada, indexPartido, resultadoA, resultadoB) {
    if (jornadas[jornada] && jornadas[jornada].partidos[indexPartido]) {
        jornadas[jornada].partidos[indexPartido].resultadoA = resultadoA;
        jornadas[jornada].partidos[indexPartido].resultadoB = resultadoB;
        if (jornadaActual === jornada) {
            renderJornada(jornada);
        }
    }
}

// Console log
console.log('ðŸŽï¸ Spanish Racing Series - Temporada 35 cargada correctamente');
console.log(`ðŸ“Š ${pilotos.length} pilotos registrados`);
console.log(`ðŸ“… ${Object.keys(jornadas).length} jornadas de fase de grupos`);
// ========================================
// SPANISH RACING SERIES - APP
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar la aplicación
    initClasificacion();
    initJornadas();
    initPilotos();
    initNavigation();
    initScrollEffects();
});

// ========================================
// CLASIFICACIÓN
// ========================================

function initClasificacion() {
    const container = document.getElementById('clasificacion-list');
    if (!container) return;

    // Ordenar pilotos por puntos (descendente) y luego por posición
    const pilotosOrdenados = [...pilotos].sort((a, b) => {
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
                <div class="puntos-badge">${piloto.puntos}</div>
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
    renderJornada(jornadaActual);
    
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

    // Event listeners para los botones de eliminatorias
    const botonesEliminatoria = document.querySelectorAll('.eliminatoria-btn');
    botonesEliminatoria.forEach(btn => {
        btn.addEventListener('click', function() {
            const eliminatoria = this.dataset.eliminatoria;
            modoEliminatoria = true;
            eliminatoriaActual = eliminatoria;
            cambiarEliminatoria(eliminatoria);
        });
    });
}

function cambiarJornada(jornada) {
    jornadaActual = jornada;
    
    // Actualizar botón activo (quitar de todos)
    document.querySelectorAll('.jornada-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activar el botón correcto
    const btnActivo = document.querySelector(`.jornada-btn[data-jornada="${jornada}"]`);
    if (btnActivo) btnActivo.classList.add('active');
    
    // Actualizar título
    document.querySelector('.jornada-title').textContent = `JORNADA ${jornada}`;
    
    // Actualizar fecha
    const jornadaData = jornadas[jornada];
    document.querySelector('.jornada-date').innerHTML = `<i class="fas fa-calendar"></i> ${jornadaData.fecha}`;
    
    // Renderizar partidos
    renderJornada(jornada);
}

function cambiarEliminatoria(eliminatoria) {
    // Actualizar botón activo (quitar de todos)
    document.querySelectorAll('.jornada-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activar el botón correcto
    const btnActivo = document.querySelector(`.eliminatoria-btn[data-eliminatoria="${eliminatoria}"]`);
    if (btnActivo) btnActivo.classList.add('active');
    
    // Obtener datos de la eliminatoria
    const eliminatoriaData = eliminatorias[eliminatoria];
    
    // Actualizar título
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
        let submensaje = 'Los enfrentamientos se determinarán según los resultados de la fase de grupos.';
        
        if (eliminatoria === 'final') {
            icono = 'fa-trophy';
            mensaje = '🏆 LA GRAN FINAL';
            submensaje = 'Los dos mejores se enfrentarán aquí por el título de campeón.';
        } else if (eliminatoria === 'semis') {
            icono = 'fa-fire';
            mensaje = 'Semifinales';
            submensaje = 'Los 4 mejores lucharán por un puesto en la final.';
        } else if (eliminatoria === 'cuartos') {
            icono = 'fa-bolt';
            mensaje = 'Cuartos de Final';
            submensaje = 'Los 8 clasificados competirán en eliminación directa.';
        } else if (eliminatoria === 'octavos') {
            icono = 'fa-flag-checkered';
            mensaje = 'Octavos de Final';
            submensaje = 'Los 16 mejores se enfrentan en knockout.';
        } else if (eliminatoria === 'playoff') {
            icono = 'fa-star';
            mensaje = 'Play Off';
            submensaje = 'Ronda clasificatoria para determinar los últimos puestos de octavos.';
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

    // Si hay partidos, renderizarlos igual que las jornadas
    let html = '';
    eliminatoriaData.partidos.forEach((partido, index) => {
        const colorLocal = getColorByName(partido.local);
        const colorVisitante = getColorByName(partido.visitante);
        const equipoLocal = getEquipoByName(partido.local);
        const equipoVisitante = partido.visitante === "John Doe" ? "Descalificado" : getEquipoByName(partido.visitante);
        
        html += `
            <div class="partido-card ${partido.dsq ? 'dsq' : ''} ${eliminatoria === 'final' ? 'final-match' : ''}" style="animation-delay: ${index * 0.05}s">
                <div class="partido-content">
                    <div class="partido-piloto left">
                        <span class="partido-piloto-nombre">${partido.local}</span>
                        <span class="partido-piloto-equipo">${equipoLocal}</span>
                    </div>
                    <div class="partido-resultado">
                        <span class="partido-score">${partido.golesLocal}</span>
                        <span class="partido-vs">VS</span>
                        <span class="partido-score ${partido.dsq ? 'dsq' : ''}">${partido.golesVisitante}</span>
                    </div>
                    <div class="partido-piloto right">
                        <span class="partido-piloto-nombre" ${partido.dsq ? 'style="color: var(--primary)"' : ''}>${partido.visitante}</span>
                        <span class="partido-piloto-equipo">${equipoVisitante}</span>
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
    
    if (!jornadaData || jornadaData.partidos.length === 0) {
        container.innerHTML = `
            <div class="no-partidos" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-calendar-times" style="font-size: 4rem; color: var(--text-muted); margin-bottom: 20px;"></i>
                <h3 style="color: var(--text-secondary); margin-bottom: 10px;">Sin partidos programados</h3>
                <p style="color: var(--text-muted);">Los enfrentamientos de esta jornada aún no han sido definidos.</p>
            </div>
        `;
        return;
    }

    let html = '';
    jornadaData.partidos.forEach((partido, index) => {
        const colorLocal = getColorByName(partido.local);
        const colorVisitante = getColorByName(partido.visitante);
        const equipoLocal = getEquipoByName(partido.local);
        const equipoVisitante = partido.visitante === "John Doe" ? "Descalificado" : getEquipoByName(partido.visitante);
        
        html += `
            <div class="partido-card ${partido.dsq ? 'dsq' : ''}" style="animation-delay: ${index * 0.05}s">
                <div class="partido-content">
                    <div class="partido-piloto left">
                        <span class="partido-piloto-nombre">${partido.local}</span>
                        <span class="partido-piloto-equipo">${equipoLocal}</span>
                    </div>
                    <div class="partido-resultado">
                        <span class="partido-score">${partido.golesLocal}</span>
                        <span class="partido-vs">VS</span>
                        <span class="partido-score ${partido.dsq ? 'dsq' : ''}">${partido.golesVisitante}</span>
                    </div>
                    <div class="partido-piloto right">
                        <span class="partido-piloto-nombre" ${partido.dsq ? 'style="color: var(--primary)"' : ''}>${partido.visitante}</span>
                        <span class="partido-piloto-equipo">${equipoVisitante}</span>
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
                        <span class="piloto-stat-value">${piloto.puntos}</span>
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
// NAVEGACIÓN
// ========================================

function initNavigation() {
    // Navegación suave
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

// Función para actualizar puntos (para uso futuro)
function actualizarPuntos(nombrePiloto, nuevosPuntos) {
    const piloto = pilotos.find(p => p.nombre === nombrePiloto);
    if (piloto) {
        piloto.puntos = nuevosPuntos;
        initClasificacion();
    }
}

// Función para agregar resultado de partido (para uso futuro)
function agregarResultado(jornada, indexPartido, golesLocal, golesVisitante) {
    if (jornadas[jornada] && jornadas[jornada].partidos[indexPartido]) {
        jornadas[jornada].partidos[indexPartido].golesLocal = golesLocal;
        jornadas[jornada].partidos[indexPartido].golesVisitante = golesVisitante;
        if (jornadaActual === jornada) {
            renderJornada(jornada);
        }
    }
}

// Console log para confirmar carga
console.log('🏎️ Spanish Racing Series - Temporada 34 cargada correctamente');
console.log(`📊 ${pilotos.length} pilotos registrados`);
console.log(`📅 ${Object.keys(jornadas).length} jornadas de fase de grupos`);
console.log(`🏆 ${Object.keys(eliminatorias).length} fases eliminatorias`);

// ========================================
// SEMIS FULLSCREEN CINEMATIC ANIMATION
// ========================================

let semisAnimationPlayed = false;
let semisAnimTimers = [];
let semisParticlesRAF = null;

function launchSemisAnimation() {
    const overlay = document.getElementById('semis-overlay');
    if (!overlay) return;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset all states
    resetSemisAnimation();

    // Start particle system
    initSemisParticles();

    // Start cinematic sequence
    startSemisSequence();
}

function resetSemisAnimation() {
    // Clear any pending timers
    semisAnimTimers.forEach(t => clearTimeout(t));
    semisAnimTimers = [];

    const overlay = document.getElementById('semis-overlay');

    // Reset intro stage
    const introStage = overlay.querySelector('.semis-stage-intro');
    const matchStage = overlay.querySelector('.semis-stage-matchups');
    introStage.style.display = 'flex';
    matchStage.style.display = 'none';

    // Reset lights
    overlay.querySelectorAll('.semis-light').forEach(l => {
        l.classList.remove('on', 'green');
    });
    overlay.querySelector('.semis-lights').classList.remove('show');

    // Reset badge
    overlay.querySelector('.semis-badge').classList.remove('reveal');
    overlay.querySelector('.semis-subtitle-anim').classList.remove('reveal');

    // Reset matchup title
    const title = overlay.querySelector('.semis-matchup-title');
    if (title) title.classList.remove('reveal');

    // Reset fecha
    const fecha = overlay.querySelector('.semis-fecha-container');
    if (fecha) fecha.classList.remove('reveal');

    // Hide close hint
    document.getElementById('semis-close-hint').style.display = 'none';
    document.getElementById('semis-skip').style.display = 'block';
}

function startSemisSequence() {
    const overlay = document.getElementById('semis-overlay');
    const lights = overlay.querySelectorAll('.semis-light');
    const lightsContainer = overlay.querySelector('.semis-lights');
    const badge = overlay.querySelector('.semis-badge');
    const subtitle = overlay.querySelector('.semis-subtitle-anim');

    // Phase 1: Show lights container
    semisAnimTimers.push(setTimeout(() => {
        lightsContainer.classList.add('show');
    }, 300));

    // Phase 2: Turn on lights one by one (F1 style)
    lights.forEach((light, i) => {
        semisAnimTimers.push(setTimeout(() => {
            light.classList.add('on');
            // Play a subtle vibration effect on supported devices
        }, 800 + i * 600));
    });

    // Phase 3: Lights go green (GO!) + reveal badge
    const allLightsOnTime = 800 + lights.length * 600 + 400;

    semisAnimTimers.push(setTimeout(() => {
        // All lights off briefly
        lights.forEach(l => l.classList.remove('on'));
    }, allLightsOnTime));

    semisAnimTimers.push(setTimeout(() => {
        // All green!
        lights.forEach(l => l.classList.add('green'));
        // Reveal badge with explosion
        badge.classList.add('reveal');
    }, allLightsOnTime + 300));

    // Phase 4: Subtitle
    semisAnimTimers.push(setTimeout(() => {
        subtitle.classList.add('reveal');
    }, allLightsOnTime + 1200));

    // Phase 5: Transition to matchups
    semisAnimTimers.push(setTimeout(() => {
        transitionToMatchups();
    }, allLightsOnTime + 3500));
}

function transitionToMatchups() {
    const overlay = document.getElementById('semis-overlay');
    const introStage = overlay.querySelector('.semis-stage-intro');
    const matchStage = overlay.querySelector('.semis-stage-matchups');

    // Fade out intro
    introStage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    introStage.style.opacity = '0';
    introStage.style.transform = 'scale(1.1)';

    semisAnimTimers.push(setTimeout(() => {
        introStage.style.display = 'none';
        matchStage.style.display = 'flex';

        // Generate match cards
        generateSemisMatchCards();

        // Animate them in sequence
        animateMatchCards();
    }, 700));
}

function generateSemisMatchCards() {
    const container = document.getElementById('semis-matches-anim');
    const showcase = document.getElementById('semis-pilots-showcase');
    if (!container) return;

    const semisData = eliminatorias.semis;
    if (!semisData || semisData.partidos.length === 0) return;

    // Generate pilots showcase
    if (showcase) {
        const allPilots = [];
        semisData.partidos.forEach(p => {
            if (!allPilots.includes(p.local)) allPilots.push(p.local);
            if (!allPilots.includes(p.visitante)) allPilots.push(p.visitante);
        });
        let showcaseHtml = '';
        allPilots.forEach((nombre, i) => {
            const color = getColorByName(nombre);
            const equipo = getEquipoByName(nombre);
            showcaseHtml += `
                <div class="semis-pilot-badge" data-index="${i}">
                    <div class="semis-pilot-avatar" style="background: ${color}">${getInitials(nombre)}</div>
                    <div class="semis-pilot-info">
                        <span class="semis-pilot-name">${nombre}</span>
                        <span class="semis-pilot-team">${equipo}</span>
                    </div>
                </div>
            `;
        });
        showcase.innerHTML = showcaseHtml;
    }

    let html = '';
    semisData.partidos.forEach((partido, index) => {
        const equipoLocal = getEquipoByName(partido.local);
        const equipoVisitante = getEquipoByName(partido.visitante);

        html += `
            <div class="semis-match-card" data-match="${index}">
                <div class="semis-match-label">SEMIFINAL ${index + 1}</div>
                <div class="semis-driver-card left-driver">
                    <div class="semis-driver-name">${partido.local}</div>
                    <div class="semis-driver-team">${equipoLocal}</div>
                </div>
                <div class="semis-vs-badge">VS</div>
                <div class="semis-driver-card right-driver">
                    <div class="semis-driver-name">${partido.visitante}</div>
                    <div class="semis-driver-team">${equipoVisitante}</div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function animateMatchCards() {
    const overlay = document.getElementById('semis-overlay');
    const title = overlay.querySelector('.semis-matchup-title');
    const pilotBadges = overlay.querySelectorAll('.semis-pilot-badge');
    const matches = overlay.querySelectorAll('.semis-match-card');
    const fecha = overlay.querySelector('.semis-fecha-container');

    // Reveal title
    semisAnimTimers.push(setTimeout(() => {
        title.classList.add('reveal');
    }, 200));

    // Reveal pilot badges one by one
    pilotBadges.forEach((badge, i) => {
        semisAnimTimers.push(setTimeout(() => {
            badge.classList.add('reveal');
        }, 500 + i * 300));
    });

    // Reveal each match with stagger (after pilot badges)
    const matchStartDelay = 500 + pilotBadges.length * 300 + 400;
    matches.forEach((match, i) => {
        const delay = matchStartDelay + i * 800;

        // Match label
        semisAnimTimers.push(setTimeout(() => {
            const label = match.querySelector('.semis-match-label');
            if (label) label.classList.add('reveal');
        }, delay));

        // Left driver slides in
        semisAnimTimers.push(setTimeout(() => {
            const left = match.querySelector('.left-driver');
            if (left) left.classList.add('slide-in-left');
        }, delay + 200));

        // Right driver slides in
        semisAnimTimers.push(setTimeout(() => {
            const right = match.querySelector('.right-driver');
            if (right) right.classList.add('slide-in-right');
        }, delay + 400));

        // VS badge pops
        semisAnimTimers.push(setTimeout(() => {
            const vs = match.querySelector('.semis-vs-badge');
            if (vs) vs.classList.add('pop');
        }, delay + 650));
    });

    // Show fecha
    const totalDelay = matchStartDelay + matches.length * 800 + 400;
    semisAnimTimers.push(setTimeout(() => {
        fecha.classList.add('reveal');
    }, totalDelay));

    // Show close hint
    semisAnimTimers.push(setTimeout(() => {
        document.getElementById('semis-skip').style.display = 'none';
        document.getElementById('semis-close-hint').style.display = 'block';
        // Click anywhere to close
        overlay.addEventListener('click', closeSemisOverlay, { once: true });
    }, totalDelay + 800));
}

function closeSemisOverlay() {
    const overlay = document.getElementById('semis-overlay');
    overlay.style.transition = 'opacity 0.5s ease';
    overlay.style.opacity = '0';

    setTimeout(() => {
        overlay.classList.remove('active');
        overlay.style.opacity = '';
        overlay.style.transition = '';
        document.body.style.overflow = '';
        // Stop particles
        if (semisParticlesRAF) cancelAnimationFrame(semisParticlesRAF);
        // Clear timers
        semisAnimTimers.forEach(t => clearTimeout(t));
        semisAnimTimers = [];
    }, 500);
}

// ========================================
// PARTICLE SYSTEM FOR SEMIS
// ========================================

function initSemisParticles() {
    const canvas = document.getElementById('semis-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const sparks = [];
    const PARTICLE_COUNT = 80;
    const SPARK_COUNT = 40;

    // Create floating embers
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: -Math.random() * 1.5 - 0.3,
            opacity: Math.random() * 0.6 + 0.2,
            color: Math.random() > 0.5
                ? `rgba(225, 6, 0, ${Math.random() * 0.6 + 0.2})`
                : `rgba(255, 215, 0, ${Math.random() * 0.4 + 0.1})`,
            pulseSpeed: Math.random() * 0.02 + 0.01,
            pulsePhase: Math.random() * Math.PI * 2
        });
    }

    // Create fast horizontal sparks
    for (let i = 0; i < SPARK_COUNT; i++) {
        sparks.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 60 + 20,
            speed: Math.random() * 4 + 2,
            opacity: Math.random() * 0.3 + 0.1,
            direction: Math.random() > 0.5 ? 1 : -1
        });
    }

    let time = 0;

    function animate() {
        if (!document.getElementById('semis-overlay').classList.contains('active')) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        time++;

        // Draw embers
        particles.forEach(p => {
            const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.3 + 0.7;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            // Glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 3 * pulse, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3 * pulse);
            gradient.addColorStop(0, p.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fill();

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;
        });

        // Draw speed lines / sparks
        sparks.forEach(s => {
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s.x - s.length * s.direction, s.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${s.opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            s.x += s.speed * s.direction;
            if (s.direction > 0 && s.x > canvas.width + s.length) { s.x = -s.length; s.y = Math.random() * canvas.height; }
            if (s.direction < 0 && s.x < -s.length) { s.x = canvas.width + s.length; s.y = Math.random() * canvas.height; }
        });

        semisParticlesRAF = requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ========================================
// HOOK INTO SEMIS BUTTON
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Skip button
    const skipBtn = document.getElementById('semis-skip');
    if (skipBtn) {
        skipBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeSemisOverlay();
            // Show the actual semis content behind
            modoEliminatoria = true;
            eliminatoriaActual = 'semis';
            cambiarEliminatoria('semis');
        });
    }

    // Intercept semis button click
    const semisBtn = document.querySelector('.eliminatoria-btn[data-eliminatoria="semis"]');
    if (semisBtn) {
        // Remove the original event listener by cloning
        const newBtn = semisBtn.cloneNode(true);
        semisBtn.parentNode.replaceChild(newBtn, semisBtn);

        newBtn.addEventListener('click', function() {
            // Always show the animation
            modoEliminatoria = true;
            eliminatoriaActual = 'semis';
            cambiarEliminatoria('semis');

            // Launch the cinematic animation
            launchSemisAnimation();
        });
    }
});

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
// GRAN FINAL — CINEMATIC ANIMATION
// Pacing designed for ~Skyfall tempo
// ========================================

let _ft = [];          // timers
let _fRAF = null;      // canvas RAF handle

function launchFinalAnimation() {
    const ov = document.getElementById('final-overlay');
    if (!ov) return;

    resetFinal();
    ov.classList.add('active');
    document.body.style.overflow = 'hidden';
    initFinalCanvas(ov);
    runAct1();
}

/* --- Reset everything to initial state --- */
function resetFinal() {
    _ft.forEach(t => clearTimeout(t));
    _ft = [];
    if (_fRAF) cancelAnimationFrame(_fRAF);

    const ov = document.getElementById('final-overlay');

    // Show / hide acts
    ['final-act-1','final-act-2','final-act-3'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'flex';
            el.classList.remove('visible');
        }
    });

    // Reset countdown
    const num = document.getElementById('final-countdown-num');
    if (num) { num.textContent = '3'; num.classList.remove('pop'); }

    // Reset heartbeat
    const ring = ov.querySelector('.final-heartbeat-ring');
    if (ring) ring.classList.remove('beat');

    // Reset act 2 elements
    const flash = document.getElementById('final-flash');
    if (flash) flash.classList.remove('fire');
    ov.querySelectorAll('.final-crown, .final-title, .final-tagline')
      .forEach(el => el.classList.remove('show'));

    // Reset act 3 elements
    ov.querySelectorAll('.final-card').forEach(c => c.classList.remove('reveal'));
    const vs = document.getElementById('final-vs');
    if (vs) vs.classList.remove('reveal');
    ov.querySelectorAll('.final-date, .final-bottom-text')
      .forEach(el => el.classList.remove('show'));

    // Controls
    document.getElementById('final-close-hint').style.display = 'none';
    document.getElementById('final-skip').style.display = 'block';
}

/* ---- ACT 1: Heartbeat Countdown (3-2-1) ---- */
function runAct1() {
    const act = document.getElementById('final-act-1');
    const num = document.getElementById('final-countdown-num');
    const ring = act.querySelector('.final-heartbeat-ring');

    // Fade in act 1
    _ft.push(setTimeout(() => act.classList.add('visible'), 125));

    let count = 3;
    function beat() {
        // ring pulse
        ring.classList.remove('beat');
        void ring.offsetWidth;   // reflow trick
        ring.classList.add('beat');

        // number pop
        num.textContent = count;
        num.classList.remove('pop');
        void num.offsetWidth;
        num.classList.add('pop');

        count--;
        if (count > 0) {
            _ft.push(setTimeout(beat, 1375)); // ~Skyfall piano chord spacing (0.8x)
        } else {
            // After last beat, brief pause then transition
            _ft.push(setTimeout(() => {
                act.classList.remove('visible');
                _ft.push(setTimeout(runAct2, 750));
            }, 1125));
        }
    }

    _ft.push(setTimeout(beat, 875));
}

/* ---- ACT 2: Flash + Title Reveal ---- */
function runAct2() {
    const act  = document.getElementById('final-act-2');
    const flash = document.getElementById('final-flash');
    const crown = act.querySelector('.final-crown');
    const title = act.querySelector('.final-title');
    const tagline = act.querySelector('.final-tagline');

    act.classList.add('visible');
    flash.classList.add('fire');     // white flash

    _ft.push(setTimeout(() => crown.classList.add('show'), 500));
    _ft.push(setTimeout(() => title.classList.add('show'), 1125));
    _ft.push(setTimeout(() => tagline.classList.add('show'), 2500));

    // Hold, then go to act 3
    _ft.push(setTimeout(() => {
        act.classList.remove('visible');
        _ft.push(setTimeout(runAct3, 875));
    }, 5250));
}

/* ---- ACT 3: Fighter Cards ---- */
function runAct3() {
    const act   = document.getElementById('final-act-3');
    const left  = document.getElementById('final-card-left');
    const right = document.getElementById('final-card-right');
    const vs    = document.getElementById('final-vs');
    const date  = document.getElementById('final-date');
    const bottom = document.getElementById('final-bottom-text');
    const ov    = document.getElementById('final-overlay');

    // Populate dynamic data
    populateFighters();

    act.classList.add('visible');

    _ft.push(setTimeout(() => left.classList.add('reveal'),  375));
    _ft.push(setTimeout(() => right.classList.add('reveal'), 875));
    _ft.push(setTimeout(() => vs.classList.add('reveal'),    1375));
    _ft.push(setTimeout(() => date.classList.add('show'),    2250));
    _ft.push(setTimeout(() => bottom.classList.add('show'),  2875));

    // Show close hint
    _ft.push(setTimeout(() => {
        document.getElementById('final-skip').style.display = 'none';
        document.getElementById('final-close-hint').style.display = 'block';
        ov.addEventListener('click', closeFinalOverlay, { once: true });
    }, 3750));
}

function populateFighters() {
    const f1 = "Leonardo Castro";
    const f2 = "Sergio Solano";

    // Left card
    const av1 = document.getElementById('fc-avatar-1');
    av1.textContent = getInitials(f1);
    av1.style.background = `linear-gradient(135deg, ${getColorByName(f1)}, #ff8c00)`;
    document.getElementById('fc-name-1').textContent = f1;
    document.getElementById('fc-team-1').textContent = getEquipoByName(f1);

    // Right card
    const av2 = document.getElementById('fc-avatar-2');
    av2.textContent = getInitials(f2);
    av2.style.background = `linear-gradient(135deg, ${getColorByName(f2)}, #00b4ff)`;
    document.getElementById('fc-name-2').textContent = f2;
    document.getElementById('fc-team-2').textContent = getEquipoByName(f2);
}

function closeFinalOverlay() {
    const ov = document.getElementById('final-overlay');
    ov.style.transition = 'opacity 1.1s ease';
    ov.style.opacity = '0';

    setTimeout(() => {
        ov.classList.remove('active');
        ov.style.opacity = '';
        ov.style.transition = '';
        document.body.style.overflow = '';
        if (_fRAF) cancelAnimationFrame(_fRAF);
        _ft.forEach(t => clearTimeout(t));
        _ft = [];
    }, 1100);
}

/* ============================
   Unified Canvas (particles + fireworks)
   ============================ */
function initFinalCanvas(ov) {
    const canvas = document.getElementById('final-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
        canvas.width  = window.innerWidth  * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width  = window.innerWidth  + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    const W = () => window.innerWidth;
    const H = () => window.innerHeight;

    // --- Ember pool ---
    const embers = [];
    for (let i = 0; i < 90; i++) {
        embers.push({
            x: Math.random() * W(),
            y: Math.random() * H(),
            r: Math.random() * 2 + 0.6,
            vx: (Math.random() - 0.5) * 0.4,
            vy: -(Math.random() * 1.2 + 0.3),
            phase: Math.random() * Math.PI * 2,
            gold: Math.random() > 0.35
        });
    }

    // --- Star pool ---
    const stars = [];
    for (let i = 0; i < 80; i++) {
        stars.push({
            x: Math.random() * W(),
            y: Math.random() * H(),
            r: Math.random() * 1.2 + 0.2,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.03 + 0.01
        });
    }

    // --- Fireworks pool ---
    const rockets = [];

    function spawnRocket() {
        const clr = Math.random() > 0.45
            ? [255, 210, 40]
            : [220, 30, 10];
        rockets.push({
            x: Math.random() * W(),
            y: H(),
            ty: Math.random() * H() * 0.45 + 40,
            v: Math.random() * 3 + 5,
            clr,
            sparks: [],
            done: false
        });
    }

    let t = 0;

    function loop() {
        if (!ov.classList.contains('active')) return;
        ctx.clearRect(0, 0, W(), H());
        t++;

        // Stars
        stars.forEach(s => {
            const a = (Math.sin(t * s.speed + s.phase) * 0.5 + 0.5) * 0.5;
            ctx.globalAlpha = a;
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, 6.28);
            ctx.fill();
        });

        // Embers
        embers.forEach(e => {
            const pulse = Math.sin(t * 0.02 + e.phase) * 0.35 + 0.65;
            const r = e.r * pulse;
            const alpha = e.gold ? 0.5 * pulse : 0.35 * pulse;
            const c = e.gold ? '255,200,40' : '255,100,20';

            ctx.globalAlpha = alpha;
            ctx.fillStyle = `rgb(${c})`;
            ctx.beginPath();
            ctx.arc(e.x, e.y, r, 0, 6.28);
            ctx.fill();

            // glow
            ctx.globalAlpha = alpha * 0.3;
            const g = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, r * 5);
            g.addColorStop(0, `rgba(${c},0.4)`);
            g.addColorStop(1, 'transparent');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(e.x, e.y, r * 5, 0, 6.28);
            ctx.fill();

            e.x += e.vx;
            e.y += e.vy;
            if (e.y < -10) { e.y = H() + 10; e.x = Math.random() * W(); }
            if (e.x < -10) e.x = W() + 10;
            if (e.x > W() + 10) e.x = -10;
        });

        ctx.globalAlpha = 1;

        // Fireworks (only after first ~3 seconds)
        if (t > 180 && Math.random() < 0.035) spawnRocket();

        for (let i = rockets.length - 1; i >= 0; i--) {
            const rk = rockets[i];
            if (!rk.done) {
                rk.y -= rk.v;
                // trail
                ctx.fillStyle = `rgba(${rk.clr.join(',')},0.7)`;
                ctx.beginPath();
                ctx.arc(rk.x, rk.y, 2.5, 0, 6.28);
                ctx.fill();

                if (rk.y <= rk.ty) {
                    // explode
                    rk.done = true;
                    const n = 50 + Math.random() * 40 | 0;
                    for (let j = 0; j < n; j++) {
                        const a = (6.28 / n) * j;
                        const spd = Math.random() * 3 + 1.5;
                        rk.sparks.push({
                            x: rk.x, y: rk.y,
                            vx: Math.cos(a) * spd,
                            vy: Math.sin(a) * spd,
                            life: 60 + Math.random() * 40 | 0,
                            max: 100,
                            r: Math.random() * 1.8 + 0.8
                        });
                    }
                }
            } else {
                // draw sparks
                for (let j = rk.sparks.length - 1; j >= 0; j--) {
                    const sp = rk.sparks[j];
                    sp.x += sp.vx;
                    sp.y += sp.vy;
                    sp.vy += 0.06;
                    sp.life--;
                    const a = sp.life / sp.max;
                    ctx.globalAlpha = a;
                    ctx.fillStyle = `rgb(${rk.clr.join(',')})`;
                    ctx.beginPath();
                    ctx.arc(sp.x, sp.y, sp.r, 0, 6.28);
                    ctx.fill();
                    if (sp.life <= 0) rk.sparks.splice(j, 1);
                }
                ctx.globalAlpha = 1;
                if (rk.sparks.length === 0) rockets.splice(i, 1);
            }
        }

        _fRAF = requestAnimationFrame(loop);
    }
    loop();
}

/* ============================
   Hook into FINAL button
   ============================ */
document.addEventListener('DOMContentLoaded', function() {
    // Skip
    const skipBtn = document.getElementById('final-skip');
    if (skipBtn) {
        skipBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeFinalOverlay();
            modoEliminatoria = true;
            eliminatoriaActual = 'final';
            cambiarEliminatoria('final');
        });
    }

    // Intercept final button
    const btn = document.querySelector('.eliminatoria-btn[data-eliminatoria="final"]');
    if (btn) {
        const clone = btn.cloneNode(true);
        btn.parentNode.replaceChild(clone, btn);

        clone.addEventListener('click', function() {
            modoEliminatoria = true;
            eliminatoriaActual = 'final';
            cambiarEliminatoria('final');
            launchFinalAnimation();
        });
    }
});

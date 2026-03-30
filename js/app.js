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
        });
    });
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
        const colorLocal = getColorByName(partido.local);
        const colorVisitante = getColorByName(partido.visitante);
        const equipoLocal = getEquipoByName(partido.local);
        const equipoVisitante = getEquipoByName(partido.visitante);
        
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
        const colorLocal = getColorByName(partido.local);
        const colorVisitante = getColorByName(partido.visitante);
        const equipoLocal = getEquipoByName(partido.local);
        const equipoVisitante = getEquipoByName(partido.visitante);
        
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

function agregarResultado(jornada, indexPartido, golesLocal, golesVisitante) {
    if (jornadas[jornada] && jornadas[jornada].partidos[indexPartido]) {
        jornadas[jornada].partidos[indexPartido].golesLocal = golesLocal;
        jornadas[jornada].partidos[indexPartido].golesVisitante = golesVisitante;
        if (jornadaActual === jornada) {
            renderJornada(jornada);
        }
    }
}

// Console log
console.log('ðŸŽï¸ Spanish Racing Series - Temporada 35 cargada correctamente');
console.log(`ðŸ“Š ${pilotos.length} pilotos registrados`);
console.log(`ðŸ“… ${Object.keys(jornadas).length} jornadas de fase de grupos`);
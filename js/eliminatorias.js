// ========================================
// SPANISH RACING SERIES - ELIMINATORIAS T36
// ========================================

// ----------------------------------------
// DATOS - Edita aquí los emparejamientos
// cuando los tengas confirmados
// ----------------------------------------

const eliminatorias = {
    octavos: [
        { id: 'oct-1', p1: 'Por definir', p2: 'Por definir', ganador: null },
        { id: 'oct-2', p1: 'Por definir', p2: 'Por definir', ganador: null },
        { id: 'oct-3', p1: 'Por definir', p2: 'Por definir', ganador: null },
        { id: 'oct-4', p1: 'Por definir', p2: 'Por definir', ganador: null },
        { id: 'oct-5', p1: 'Por definir', p2: 'Por definir', ganador: null },
        { id: 'oct-6', p1: 'Por definir', p2: 'Por definir', ganador: null },
        { id: 'oct-7', p1: 'Por definir', p2: 'Por definir', ganador: null },
        { id: 'oct-8', p1: 'Por definir', p2: 'Por definir', ganador: null },
    ],
    cuartos: [
        { id: 'cua-1', p1: 'Ganador P1', p2: 'Ganador P2', ganador: null },
        { id: 'cua-2', p1: 'Ganador P3', p2: 'Ganador P4', ganador: null },
        { id: 'cua-3', p1: 'Ganador P5', p2: 'Ganador P6', ganador: null },
        { id: 'cua-4', p1: 'Ganador P7', p2: 'Ganador P8', ganador: null },
    ],
    semis: [
        { id: 'sem-1', p1: 'Ganador C1', p2: 'Ganador C2', ganador: null },
        { id: 'sem-2', p1: 'Ganador C3', p2: 'Ganador C4', ganador: null },
    ],
    final: [
        { id: 'fin-1', p1: 'Ganador S1', p2: 'Ganador S2', ganador: null },
    ]
};

// ----------------------------------------
// RENDER DE SLOTS
// ----------------------------------------

function renderSlots(matchEl, data) {
    const slots = matchEl.querySelectorAll('.match-slot');
    const names = [data.p1, data.p2];
    const tbd = 'Por definir';

    slots.forEach((slot, i) => {
        const nameEl = slot.querySelector('.slot-name');
        if (!nameEl) return;

        const name = names[i] || tbd;
        nameEl.textContent = name;

        const isPending = name === tbd || name.startsWith('Ganador');
        slot.classList.toggle('tbd', isPending);
        slot.classList.remove('winner');

        if (data.ganador && data.ganador === name) {
            slot.classList.add('winner');
            slot.classList.remove('tbd');
        }
    });
}

function renderAll() {
    const fases = ['octavos', 'cuartos', 'semis', 'final'];
    fases.forEach(fase => {
        (eliminatorias[fase] || []).forEach(match => {
            const el = document.getElementById(match.id);
            if (el) renderSlots(el, match);
        });
    });
}

// ----------------------------------------
// CONECTORES SVG
// Dibuja las líneas bracket entre rondas
// ----------------------------------------

function drawConnectors() {
    drawConnectorColumn('conn-oct-cua', 'col--octavos', 'col--cuartos', 8, 4);
    drawConnectorColumn('conn-cua-sem', 'col--cuartos', 'col--semis', 4, 2);
    drawConnectorColumn('conn-sem-fin', 'col--semis', 'col--final', 2, 1);
}

function drawConnectorColumn(connId, leftColClass, rightColClass, leftCount, rightCount) {
    const connEl = document.getElementById(connId);
    if (!connEl) return;

    const connRect = connEl.getBoundingClientRect();
    if (connRect.height < 10) return;

    const leftCol  = document.querySelector('.' + leftColClass);
    const rightCol = document.querySelector('.' + rightColClass);
    if (!leftCol || !rightCol) return;

    const leftMatches  = leftCol.querySelectorAll('.match');
    const rightMatches = rightCol.querySelectorAll('.match');

    const h = connRect.height;
    const w = connRect.width || 28;

    let svg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">`;

    const pairsCount = Math.min(leftMatches.length / 2, rightMatches.length);

    for (let i = 0; i < pairsCount; i++) {
        const lA = leftMatches[i * 2];
        const lB = leftMatches[i * 2 + 1];
        const rM = rightMatches[i];

        if (!lA || !lB || !rM) continue;

        const lARect = lA.getBoundingClientRect();
        const lBRect = lB.getBoundingClientRect();
        const rMRect = rM.getBoundingClientRect();

        const yA  = lARect.top  + lARect.height / 2 - connRect.top;
        const yB  = lBRect.top  + lBRect.height / 2 - connRect.top;
        const yR  = rMRect.top  + rMRect.height / 2 - connRect.top;
        const yMid = (yA + yB) / 2;

        const color = 'rgba(255,207,64,0.3)';
        const stroke = `stroke="${color}" stroke-width="1" fill="none"`;

        // Línea desde lA hacia el centro
        svg += `<line x1="0" y1="${yA}" x2="${w / 2}" y2="${yA}" ${stroke}/>`;
        // Línea desde lB hacia el centro
        svg += `<line x1="0" y1="${yB}" x2="${w / 2}" y2="${yB}" ${stroke}/>`;
        // Línea vertical conectando yA y yB
        svg += `<line x1="${w / 2}" y1="${yA}" x2="${w / 2}" y2="${yB}" ${stroke}/>`;
        // Línea horizontal desde el centro hasta el partido derecho
        svg += `<line x1="${w / 2}" y1="${yMid}" x2="${w}" y2="${yR}" ${stroke}/>`;
    }

    svg += `</svg>`;
    connEl.innerHTML = svg;
}

// ----------------------------------------
// INIT
// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    renderAll();

    // Dibuja conectores tras un pequeño delay para que el layout esté asentado
    requestAnimationFrame(() => {
        setTimeout(drawConnectors, 80);
    });

    // Redibujar si cambia el tamaño de la ventana
    window.addEventListener('resize', () => {
        clearTimeout(window._connTimer);
        window._connTimer = setTimeout(drawConnectors, 120);
    });
});

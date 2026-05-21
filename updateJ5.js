const fs = require('fs');
const path = 'js/data.js';
let content = fs.readFileSync(path, 'utf8');

// Update comments
content = content.replace(/Actualizado tras Jornada 4/g, 'Actualizado tras Jornada 5');
content = content.replace(/Clasificación actualizada tras J4/g, 'Clasificación actualizada tras J5');

const winners = [
    'Valdi CT',
    'André Prov',
    'Leoo Ferreira',
    'Thiago Campos',
    'Cristian Ezpeleta',
    'Sergio Solano',
    'Vasvo Lao',
    'Roma II',
    'Alexis Iceman',
    'Tony Crowther',
    'Francisco Martínez',
    'Antonio Pinillos',
    'Freya Anafi',
    'Giacomina Leclerc',
    'Romus Toras',
    'Pablo Mañas'
];

let evalContent = content.substring(content.indexOf('const pilotosT37') );
const endPilotos = evalContent.indexOf('const supercopaT37');
let pilotosStr = evalContent.substring(0, endPilotos);
let pilotos = [];
eval('pilotos = ' + pilotosStr.replace('const pilotosT37 = ', '').trim().slice(0, -1));

pilotos.forEach(p => {
    if (winners.includes(p.nombre.trim())) {
        p.puntos += 3;
    }
});

// Stable sort: points descending
pilotos.sort((a, b) => b.puntos - a.puntos);
pilotos.forEach((p, i) => {
    p.pos = i + 1;
});

let newPilotosStr = 'const pilotosT37 = [\n';
pilotos.forEach((p, i) => {
    let equipo = p.equipo.replace(/'/g, "\\'");
    let pName = p.nombre.trim();
    let pEq = equipo.trim();
    newPilotosStr += `    { pos: ${p.pos < 10 ? ' ' + p.pos : p.pos}, nombre: '${pName}', \t\tequipo: '${pEq}', \t\tpuntos: ${p.puntos} }`;
    if (i < pilotos.length - 1) newPilotosStr += ',\n';
    else newPilotosStr += '\n';
});
newPilotosStr += '];\n\n';

content = content.replace(pilotosStr, newPilotosStr);

const matches = [
        `'🏆 Valdi CT vs Alejandro Alonso (P7 vs P22)'`,
        `'🏆 André Prov vs Marc cr Rayo (P6 vs P25)'`,
        `'🏆 Leoo Ferreira vs Blake Ezeh (P5 vs P28)'`,
        `'🏆 Thiago Campos vs Eduardo Calvo (P4 vs P10)'`,
        `'🏆 Cristian Ezpeleta vs Juan Garcia (P11 vs P17)'`,
        `'🏆 Sergio Solano vs Julio Maidana (P15 vs P32 DNF)'`,
        `'🏆 Vasvo Lao vs Christian Horny (P1 vs P19)'`,
        `'🏆 Roma II vs Marco Rodríguez (P9 vs P31)'`,
        `'🏆 Alexis Iceman vs Cristóbal Farías Galleguillos (P8 vs P26)'`,
        `'🏆 Tony Crowther vs Templario VCR (P16 vs P30 DNF)'`,
        `'🏆 Francisco Martínez vs Álvaro Redondo (P18 vs P21)'`,
        `'🏆 Antonio Pinillos vs Rui Acacio (P14 vs P27)'`,
        `'🏆 Freya Anafi vs Peppe Vedda (P23 vs P24)'`,
        `'🏆 Giacomina Leclerc vs Sebas Srg Ramírez (P2 vs P29)'`,
        `'🏆 Romus Toras vs Stefano Cann (P3 vs P13)'`,
        `'🏆 Pablo Mañas vs Mauro Reyes Hernández (P12 vs P20)'`
].join(',\n            ');

const j5Re = /nombre: 'Jornada 5',[\s\S]*?enfrentamientos: \[[\s\S]*?\]/;

content = content.replace(j5Re, `nombre: 'Jornada 5',
        fecha: 'Miercoles 20 de mayo',
        estado: 'Completada',
        enfrentamientos: [
            ${matches}
        ]`);

fs.writeFileSync(path, content, 'utf8');

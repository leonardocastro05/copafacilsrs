const fs = require('fs');

const path = 'js/data.js';
let content = fs.readFileSync(path, 'utf8');

// Update comments
content = content.replace(/Actualizado tras Jornada 3/, 'Actualizado tras Jornada 4');
content = content.replace(/Clasificación actualizada tras J2/, 'Clasificación actualizada tras J4');
content = content.replace(/Clasificación actualizada tras J3/, 'Clasificación actualizada tras J4');

// Points logic
const winners = [
    'Valdi CT',
    'André Prov',
    'Leoo Ferreira',
    'Eduardo Calvo',
    'Cristian Ezpeleta',
    'Sergio Solano',
    'Vasvo Lao',
    'Francisco Martínez',
    'Juan Garcia',
    'Tony Crowther',
    'Pablo Mañas',
    'Romus Toras',
    'Thiago Campos',
    'Giacomina Leclerc',
    'Stefano Cann',
    'Alejandro Alonso'
];

let evalContent = content.substring(content.indexOf('const pilotosT37') );
const endPilotos = evalContent.indexOf('const supercopaT37');
let pilotosStr = evalContent.substring(0, endPilotos);
let pilotos = [];
eval('pilotos = ' + pilotosStr.replace('const pilotosT37 = ', '').trim().slice(0, -1));

pilotos.forEach(p => {
    if (winners.includes(p.nombre)) {
        p.puntos += 3;
    }
});

pilotos.sort((a, b) => b.puntos - a.puntos);
pilotos.forEach((p, i) => {
    p.pos = i + 1;
});

let newPilotosStr = 'const pilotosT37 = [\n';
pilotos.forEach((p, i) => {
    let equipo = p.equipo.replace(/'/g, "\\'");
    let pName = p.nombre.padEnd(30, ' ');
    let pEq = p.equipo.padEnd(35, ' ');
    newPilotosStr += `    { pos: ${p.pos < 10 ? ' ' + p.pos : p.pos}, nombre: '${pName.trim()}', \t\tequipo: '${pEq.trim()}', \t\tpuntos: ${p.puntos} }`;
    if (i < pilotos.length - 1) newPilotosStr += ',\n';
    else newPilotosStr += '\n';
});
newPilotosStr += '];\n\n';

content = content.replace(pilotosStr, newPilotosStr);

const matches = [
            `'🏆 Valdi CT vs Álvaro Redondo (P4 vs P17)'`,
            `'🏆 André Prov vs Roma II (P9 vs P11)'`,
            `'🏆 Leoo Ferreira vs Rui Acacio (P1 vs P27)'`,
            `'🏆 Eduardo Calvo vs Blake Ezeh (P8 vs P26)'`,
            `'🏆 Cristian Ezpeleta vs Templario VCR (P12 vs P24)'`,
            `'🏆 Sergio Solano vs Alexis Iceman (P3 vs P10)'`,
            `'🏆 Vasvo Lao vs Peppe Vedda (P2 vs P16)'`,
            `'🏆 Francisco Martínez vs Marco Rodríguez (P22 vs P30 DNF)'`,
            `'🏆 Juan Garcia vs Julio Maidana (P29 vs P32 DNF)'`,
            `'🏆 Tony Crowther vs Cristóbal Farías Galleguillos (P21 vs P25)'`,
            `'🏆 Pablo Mañas vs Antonio Pinillos (P13 vs P15)'`,
            `'🏆 Romus Toras vs Marc cr Rayo (P6 vs P23)'`,
            `'🏆 Thiago Campos vs Freya Anafi (P5 vs P28)'`,
            `'🏆 Giacomina Leclerc vs Mauro Reyes Hernández (P7 vs P18)'`,
            `'🏆 Stefano Cann vs Sebas Srg Ramírez (P20 vs P31)'`,
            `'🏆 Alejandro Alonso vs Christian Horny (P14 vs P19)'`
].join(',\n            ');

const j4Re = /nombre: 'Jornada 4',[\s\S]*?enfrentamientos: \[[\s\S]*?\]/;

content = content.replace(j4Re, `nombre: 'Jornada 4',
        fecha: 'Lunes 18 de mayo',
        estado: 'Completada',
        enfrentamientos: [
            ${matches}
        ]`);

fs.writeFileSync(path, content, 'utf8');

const fs = require('fs');
let content = fs.readFileSync('js/data.js', 'utf8');

const regexJ3 = /        nombre: 'Jornada 3',[\s\S]*?        \]/m;
const newJ3 = "        nombre: 'Jornada 3',\n" +
"        fecha: 'Viernes 15 de mayo',\n" +
"        estado: 'Completada',\n" +
"        enfrentamientos: [\n" +
"            '🏆 Valdi CT vs Roma II (P1 vs P10)',\n" +
"            '🏆 André Prov vs Christian Horny (P7 vs P26)',\n" +
"            '🏆 Leoo Ferreira vs Alexis Iceman (P4 vs P11)',\n" +
"            '🏆 Eduardo Calvo vs Cristóbal Farías Galleguillos (P15 vs P25)',\n" +
"            '🏆 Marc cr Rayo vs Cristian Ezpeleta (P14 vs P19)',\n" +
"            '🏆 Sergio Solano vs Alejandro Alonso (P8 vs P21)',\n" +
"            '🏆 Vasvo Lao vs Stefano Cann (P3 vs P9)',\n" +
"            '🏆 Tony Crowther vs Marco Rodríguez (P12 vs P29)',\n" +
"            '🏆 Juan Garcia vs Sebas Srg Ramírez (P5 vs P28)',\n" +
"            '🏆 Romus Toras vs Álvaro Redondo (P6 vs P22)',\n" +
"            '🏆 Antonio Pinillos vs Peppe Vedda (P16 vs P20)',\n" +
"            '🏆 Freya Anafi vs Pablo Mañas (P31 vs P32)',\n" +
"            '🏆 Julio Maidana vs Giacomina Leclerc (P13 vs P17)',\n" +
"            '🏆 Thiago Campos vs Blake Ezeh (P2 vs P23)',\n" +
"            '🏆 Francisco Martínez vs Rui Acacio (P24 vs P30)',\n" +
"            '🏆 Mauro Reyes Hernández vs Templario VCR (P18 vs P27)'\n" +
"        ]";

content = content.replace(regexJ3, newJ3);
content = content.replace('Actualizado tras Jornada 2', 'Actualizado tras Jornada 3');
content = content.replace('Puntos = 3 puntos por victoria en duelo', 'Puntos = 3 puntos por victoria en duelo');

const pointsToAdd = [
    'Valdi CT', 'André Prov', 'Leoo Ferreira', 'Eduardo Calvo', 'Marc cr Rayo', 'Sergio Solano', 'Vasvo Lao', 'Tony Crowther', 'Juan Garcia', 'Romus Toras', 'Antonio Pinillos', 'Freya Anafi', 'Julio Maidana', 'Thiago Campos', 'Francisco Martínez', 'Mauro Reyes Hernández'
];

pointsToAdd.forEach(p => {
    const rx = new RegExp("(nombre: '" + p + "',[\\\\s\\\\S]*?puntos: )(\\\\d+)", 'g');
    content = content.replace(rx, (m, p1, p2) => p1 + (parseInt(p2) + 3));
});

const regexPilotos = /const pilotosT37 = \[[\s\S]*?\];/;
const arrayMatch = content.match(regexPilotos);
if (arrayMatch) {
    let arrayStr = arrayMatch[0];
    const objRegex = /{ pos: \d+,(.+?)puntos: (\d+) }/g;
    let pilots = [];
    let match;
    while ((match = objRegex.exec(arrayStr)) !== null) {
        pilots.push({
            str: match[1],
            pts: parseInt(match[2])
        });
    }
    pilots.sort((a, b) => b.pts - a.pts);
    let newPilotsStr = "const pilotosT37 = [\n";
    for(let i=0; i<pilots.length; i++) {
        let comma = (i === pilots.length - 1) ? "" : ",";
        newPilotsStr += "    { pos: " + (i+1) + "," + pilots[i].str + "puntos: " + pilots[i].pts + " }" + comma + "\n";
    }
    newPilotsStr += "];";
    content = content.replace(regexPilotos, newPilotsStr);
}

fs.writeFileSync('js/data.js', content, 'utf8');
console.log('done');

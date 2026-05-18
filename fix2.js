const fs = require('fs');
let content = fs.readFileSync('js/data.js', 'utf8');
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

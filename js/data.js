// ========================================
// SPANISH RACING SERIES - DATA
// Temporada 35
// ========================================

// Colores para los equipos/pilotos
const colores = [
    '#e10600', '#00d4ff', '#ffd700', '#ff6b35', '#7b68ee',
    '#00ff88', '#ff1493', '#32cd32', '#ff4500', '#1e90ff',
    '#9932cc', '#00ced1', '#ff69b4', '#ffa500', '#8b4513',
    '#4169e1', '#dc143c', '#2e8b57', '#ff8c00', '#9400d3',
    '#00bfff', '#ff7f50', '#6495ed', '#dda0dd', '#f0e68c',
    '#add8e6', '#90ee90', '#ffb6c1', '#87ceeb', '#deb887',
    '#b0c4de'
];

// Datos de los pilotos/equipos — T35
const pilotos = [
    { pos: 1,  nombre: "Eduardo Calvo",              equipo: "Foxtrot GP",                        puntos: 3, color: colores[0] },
    { pos: 2,  nombre: "Sergio Solano",              equipo: "Furia Andalusí",                    puntos: 3, color: colores[1] },
    { pos: 3,  nombre: "Vasvo Lao",                  equipo: "Subaru F1 Team",                    puntos: 3, color: colores[2] },
    { pos: 4,  nombre: "André Prov",                 equipo: "Tortuga",                           puntos: 3, color: colores[3] },
    { pos: 5,  nombre: "Cristian Ezpeleta",          equipo: "Campos Racing F1 Ezpeleta",         puntos: 3, color: colores[4] },
    { pos: 6,  nombre: "Alexis Iceman",              equipo: "00 CRT Competition",                puntos: 0, color: colores[5] },
    { pos: 7,  nombre: "Valdi CT",                   equipo: "El Nano",                           puntos: 3, color: colores[6] },
    { pos: 8,  nombre: "Ruben Medina",               equipo: "Team Chuis",                        puntos: 3, color: colores[7] },
    { pos: 9,  nombre: "Frank White",                equipo: "69 CRT Competition",                puntos: 3, color: colores[8] },
    { pos: 10, nombre: "Johans Gormaz",              equipo: "01 FORD MUSTANG",                   puntos: 3, color: colores[9] },
    { pos: 11, nombre: "Marc cr Rayo",               equipo: "Rayito Team",                       puntos: 3, color: colores[10] },
    { pos: 12, nombre: "Nelson David Quiroz",        equipo: "9 ART Grand prix",                  puntos: 3, color: colores[11] },
    { pos: 13, nombre: "Leoo Castro",                equipo: "07 CRT Competition",                puntos: 3, color: colores[12] },
    { pos: 14, nombre: "Antonio Pinillos",           equipo: "Red Bull Pinkustercia F1 Team",     puntos: 0, color: colores[13] },
    { pos: 15, nombre: "Alvaro Redondo",             equipo: "72 Akina SpeedStars Fujiwara",      puntos: 3, color: colores[14] },
    { pos: 16, nombre: "Blake Ezeh",                 equipo: "Deco27 HoloLive Racing Team",       puntos: 0, color: colores[15] },
    { pos: 17, nombre: "Clais Racing",               equipo: "Clais Racing team",                 puntos: 0, color: colores[16] },
    { pos: 18, nombre: "Francisco Martínez",         equipo: "Renfe Cercanías RT",                puntos: 0, color: colores[17] },
    { pos: 19, nombre: "Marco Rodriguez",            equipo: "94 Pagani Renault",                 puntos: 3, color: colores[18] },
    { pos: 20, nombre: "Alfonso Laguera",            equipo: "70 Benetton Camel",                 puntos: 0, color: colores[19] },
    { pos: 21, nombre: "Eduardo Scarpati Flores",    equipo: "ESFX Red Bull Ferrari",             puntos: 0, color: colores[20] },
    { pos: 22, nombre: "Cristóbal Farias",           equipo: "18 ZETTA RACING",                   puntos: 0, color: colores[21] },
    { pos: 23, nombre: "Christian Horny",            equipo: "15 Fénix Racing Team",              puntos: 0, color: colores[22] },
    { pos: 24, nombre: "Alejandro Alonso",           equipo: "BMW F1 TEAM",                       puntos: 0, color: colores[23] },
    { pos: 25, nombre: "Samuel Guevara Salazar",     equipo: "HONDA",                             puntos: 0, color: colores[24] },
    { pos: 26, nombre: "Templario VCR",              equipo: "Hispania Racing Team",              puntos: 0, color: colores[25] },
    { pos: 27, nombre: "Giacomina Leclerc",          equipo: "jacqui09sikes615978",               puntos: 0, color: colores[26] }
];

// Datos de las jornadas (Fase de Grupos) — T35
// 10 jornadas, 27 pilotos → 13 partidos + 1 libre por jornada
// J1: Leoo Castro libre como campeón de la T34 (+3 puntos)
const jornadas = {
    1: {
        fecha: "06 de Marzo",
        partidos: [
            { local: "Sergio Solano",              visitante: "Cristóbal Farias",            golesLocal: "P3", golesVisitante: "P23" },
            { local: "Vasvo Lao",                  visitante: "Templario VCR",               golesLocal: "P5", golesVisitante: "P22" },
            { local: "André Prov",                 visitante: "Blake Ezeh",                  golesLocal: "P6", golesVisitante: "P21" },
            { local: "Eduardo Calvo",              visitante: "Samuel Guevara Salazar",      golesLocal: "P1", golesVisitante: "P2" },
            { local: "Alexis Iceman",              visitante: "Marco Rodriguez",             golesLocal: "RET", golesVisitante: "P18" },
            { local: "Cristian Ezpeleta",          visitante: "Giacomina Leclerc",           golesLocal: "P11", golesVisitante: "P27" },
            { local: "Valdi CT",                   visitante: "Francisco Martínez",          golesLocal: "P12", golesVisitante: "P19" },
            { local: "Ruben Medina",               visitante: "Alfonso Laguera",             golesLocal: "P10", golesVisitante: "RET" },
            { local: "Frank White",                visitante: "Antonio Pinillos",            golesLocal: "P8", golesVisitante: "P20" },
            { local: "Johans Gormaz",              visitante: "Christian Horny",              golesLocal: "P9", golesVisitante: "P17" },
            { local: "Marc cr Rayo",               visitante: "Alejandro Alonso",            golesLocal: "P14", golesVisitante: "P15" },
            { local: "Nelson David Quiroz",        visitante: "Eduardo Scarpati Flores",     golesLocal: "P13", golesVisitante: "P16" },
            { local: "Alvaro Redondo",             visitante: "Clais Racing",                golesLocal: "P7", golesVisitante: "P24" }
        ]
    },
    // J2: Clais Racing descansa (libre), recibe 3 puntos
    2: {
        fecha: "9 de Marzo",
        partidos: [
            { local: "Eduardo Calvo",              visitante: "Leoo Castro",                 golesLocal: "", golesVisitante: "" },
            { local: "Sergio Solano",              visitante: "Frank White",                 golesLocal: "", golesVisitante: "" },
            { local: "Vasvo Lao",                  visitante: "Alfonso Laguera",             golesLocal: "", golesVisitante: "" },
            { local: "André Prov",                 visitante: "Giacomina Leclerc",           golesLocal: "", golesVisitante: "" },
            { local: "Cristian Ezpeleta",          visitante: "Templario VCR",               golesLocal: "", golesVisitante: "" },
            { local: "Alexis Iceman",              visitante: "Nelson David Quiroz",         golesLocal: "", golesVisitante: "" },
            { local: "Valdi CT",                   visitante: "Samuel Guevara Salazar",      golesLocal: "", golesVisitante: "" },
            { local: "Ruben Medina",               visitante: "Alejandro Alonso",            golesLocal: "", golesVisitante: "" },
            { local: "Johans Gormaz",              visitante: "Blake Ezeh",                  golesLocal: "", golesVisitante: "" },
            { local: "Marc cr Rayo",               visitante: "Eduardo Scarpati Flores",     golesLocal: "", golesVisitante: "" },
            { local: "Alvaro Redondo",             visitante: "Marco Rodriguez",             golesLocal: "", golesVisitante: "" },
            { local: "Antonio Pinillos",           visitante: "Cristóbal Farias",            golesLocal: "", golesVisitante: "" },
            { local: "Francisco Martínez",         visitante: "Christian Horny",             golesLocal: "", golesVisitante: "" }
        ]
    },
    3:  { fecha: "11 de Marzo", partidos: [] },
    4:  { fecha: "13 de Marzo", partidos: [] },
    5:  { fecha: "16 de Marzo", partidos: [] },
    6:  { fecha: "18 de Marzo", partidos: [] },
    7:  { fecha: "20 de Marzo", partidos: [] },
    8:  { fecha: "23 de Marzo", partidos: [] },
    9:  { fecha: "25 de Marzo", partidos: [] },
    10: { fecha: "27 de Marzo", partidos: [] }
};

// Datos de las eliminatorias — T35
// Sin playoffs: los 16 mejores van directamente a octavos
const eliminatorias = {
    octavos: { nombre: "Octavos de Final", fecha: "30 de Marzo", partidos: [] },
    cuartos: { nombre: "Cuartos de Final", fecha: "1 de Abril", partidos: [] },
    semis:   { nombre: "Semifinales", fecha: "3 de Abril", partidos: [] },
    final:   { nombre: "Gran Final", fecha: "6 de Abril", partidos: [] }
};

// Función para obtener las iniciales de un nombre
function getInitials(nombre) {
    const palabras = nombre.split(' ');
    if (palabras.length >= 2) {
        return (palabras[0][0] + palabras[1][0]).toUpperCase();
    }
    return nombre.substring(0, 2).toUpperCase();
}

// Función para obtener el color de un piloto por nombre
function getColorByName(nombre) {
    const piloto = pilotos.find(p => p.nombre === nombre);
    return piloto ? piloto.color : colores[0];
}

// Función para obtener el equipo de un piloto por nombre
function getEquipoByName(nombre) {
    const piloto = pilotos.find(p => p.nombre === nombre);
    return piloto ? piloto.equipo : "Sin equipo";
}

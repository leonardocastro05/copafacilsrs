// ========================================
// SPANISH RACING SERIES - DATA
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

// Datos de los pilotos/equipos
const pilotos = [
    { pos: 1, nombre: "Cristian Ezpeleta", equipo: "Campos Racing F1 Ezpeleta", puntos: 3, color: colores[0] },
    { pos: 2, nombre: "Alexis Iceman", equipo: "00 CRT Competition", puntos: 0, color: colores[1] },
    { pos: 3, nombre: "Sergio Solano", equipo: "Furia Andalusí", puntos: 0, color: colores[2] },
    { pos: 4, nombre: "Eduardo Calvo", equipo: "Foxtrot GP", puntos: 3, color: colores[3] },
    { pos: 5, nombre: "Álvaro Redondo", equipo: "72 Akina SpeedStars Fujiwara", puntos: 3, color: colores[4] },
    { pos: 6, nombre: "Leonardo Castro", equipo: "07 CRT Competition", puntos: 0, color: colores[5] },
    { pos: 7, nombre: "Antonio Pinillos", equipo: "Red Bull Pinkustercia F1 Team", puntos: 0, color: colores[6] },
    { pos: 8, nombre: "Alejandro Alonso", equipo: "BMW F1 Team", puntos: 3, color: colores[7] },
    { pos: 9, nombre: "Nelson David Quiroz", equipo: "9 ART Grand prix", puntos: 0, color: colores[8] },
    { pos: 10, nombre: "Marc cr Rayo", equipo: "Rayito Team", puntos: 3, color: colores[9] },
    { pos: 11, nombre: "Cristóbal Farías Galleguillos", equipo: "18 ZETTA RACING", puntos: 0, color: colores[10] },
    { pos: 12, nombre: "Alfonso Laguera", equipo: "70 Benetton Corse", puntos: 0, color: colores[11] },
    { pos: 13, nombre: "Samuel Guevara Salazar", equipo: "HONDA", puntos: 3, color: colores[12] },
    { pos: 14, nombre: "Offline Account", equipo: "offlineaccount", puntos: 0, color: colores[13] },
    { pos: 15, nombre: "Pablo Parada", equipo: "BMT Alpine F1 Team", puntos: 0, color: colores[14] },
    { pos: 16, nombre: "David Palomo", equipo: "Alunk Works", puntos: 3, color: colores[15] },
    { pos: 17, nombre: "Giacomina Leclerc", equipo: "jacqui09sikes615978", puntos: 0, color: colores[16] },
    { pos: 18, nombre: "Blake Ezeh", equipo: "Deco27 HoloLive Racing Team", puntos: 0, color: colores[17] },
    { pos: 19, nombre: "Christian Horny", equipo: "15 Fénix Racing Team", puntos: 0, color: colores[18] },
    { pos: 20, nombre: "Fab Man", equipo: "Racing CLub", puntos: 3, color: colores[19] },
    { pos: 21, nombre: "Francisco Martínez", equipo: "Renfe Cercanías RT", puntos: 0, color: colores[20] },
    { pos: 22, nombre: "Toro Reyes", equipo: "Toro Reyes", puntos: 3, color: colores[21] },
    { pos: 23, nombre: "La Gacela Del Deporte", equipo: "La Gacela del Deporte", puntos: 3, color: colores[22] },
    { pos: 24, nombre: "Saúl González", equipo: "99 León Racing Team", puntos: 0, color: colores[23] },
    { pos: 25, nombre: "Clais Racing", equipo: "Clais Racing team", puntos: 3, color: colores[24] },
    { pos: 26, nombre: "Johans Gormaz", equipo: "F1 FORD MUSTANG", puntos: 3, color: colores[25] },
    { pos: 27, nombre: "Mauro Reyes Hernández", equipo: "Canary Racing Team SRS", puntos: 0, color: colores[26] },
    { pos: 28, nombre: "Luis Rivera", equipo: "28 BRAWN GP", puntos: 3, color: colores[27] },
    { pos: 29, nombre: "Valdi CT", equipo: "El Nano", puntos: 3, color: colores[28] },
    { pos: 30, nombre: "André Pov", equipo: "Tortuga", puntos: 3, color: colores[29] },
    { pos: 31, nombre: "Vasvo Lao", equipo: "Subaru F1 Team", puntos: 3, color: colores[30] },
    { pos: 32, nombre: "Eduardo Scarpanti Flores", equipo: "ESFX Red Bull Ferrari", puntos: 0, color: colores[0] }

];

// Datos de las jornadas (Fase de Grupos)
const jornadas = {
    1: {
        fecha: "02/02/2026",
        partidos: [
            { local: "Alexis Iceman", golesLocal: 0, golesVisitante: 1, visitante: "Cristian Ezpeleta", dsq: false },
            { local: "Sergio Solano", golesLocal: 0, golesVisitante: 1, visitante: "Eduardo Calvo", dsq: false },
            { local: "Leonardo Castro", golesLocal: 0, golesVisitante: 1, visitante: "Álvaro Redondo", dsq: false },
            { local: "Luis Rivera", golesLocal: 1, golesVisitante: 0, visitante: "Antonio Pinillos", dsq: false },
            { local: "Alejandro Alonso", golesLocal: 1, golesVisitante: 0, visitante: "Nelson David Quiroz", dsq: false },
            { local: "Marc cr Rayo", golesLocal: 1, golesVisitante: 0, visitante: "Cristóbal Farías Galleguillos", dsq: false },
            { local: "Alfonso Laguera", golesLocal: 0, golesVisitante: 1, visitante: "Samuel Guevara Salazar", dsq: false },
            { local: "Valdi CT", golesLocal: 1, golesVisitante: 0, visitante: "Jorge Nevado Barbero", dsq: false },
            { local: "André Pov", golesLocal: 1, golesVisitante: 0, visitante: "Pablo Parada", dsq: false },
            { local: "David Palomo", golesLocal: 1, golesVisitante: 0, visitante: "Giacomina Leclerc", dsq: false },
            { local: "Vasvo Lao", golesLocal: 1, golesVisitante: 0, visitante: "Blake Ezeh", dsq: false },
            { local: "Christian Horny", golesLocal: 0, golesVisitante: 1, visitante: "Fab Man", dsq: false },
            { local: "Francisco Martínez", golesLocal: 0, golesVisitante: 1, visitante: "Toro Reyes", dsq: false },
            { local: "La Gacela Del Deporte", golesLocal: 1, golesVisitante: 0, visitante: "Eduardo Scarpanti Flores", dsq: false },
            { local: "Saúl González", golesLocal: 0, golesVisitante: 1, visitante: "Clais Racing", dsq: false },
            { local: "Johans Gormaz", golesLocal: 1, golesVisitante: 0, visitante: "Mauro Reyes Hernández", dsq: false }
        ]
    },
    2: {
        fecha: "06/02/2026",
        partidos: [
            { local: "Cristian Ezpeleta", golesLocal: 0, golesVisitante: 0, visitante: "Eduardo Calvo", dsq: false },
            { local: "Alexis Iceman", golesLocal: 0, golesVisitante: 0, visitante: "Álvaro Redondo", dsq: false },
            { local: "Sergio Solano", golesLocal: 0, golesVisitante: 0, visitante: "Antonio Pinillos", dsq: false },
            { local: "Leonardo Castro", golesLocal: 0, golesVisitante: 0, visitante: "Nelson David Quiroz", dsq: false },
            { local: "Luis Rivera", golesLocal: 0, golesVisitante: 0, visitante: "Cristóbal Farías Galleguillos", dsq: false },
            { local: "Alejandro Alonso", golesLocal: 0, golesVisitante: 0, visitante: "Samuel Guevara Salazar", dsq: false },
            { local: "Marc cr Rayo", golesLocal: 0, golesVisitante: 0, visitante: "Offline Account", dsq: false },
            { local: "Alfonso Laguera", golesLocal: 0, golesVisitante: 0, visitante: "Pablo Parada", dsq: false },
            { local: "Valdi CT", golesLocal: 0, golesVisitante: 0, visitante: "Giacomina Leclerc", dsq: false },
            { local: "André Pov", golesLocal: 0, golesVisitante: 0, visitante: "Blake Ezeh", dsq: false },
            { local: "David Palomo", golesLocal: 0, golesVisitante: 0, visitante: "Fab Man", dsq: false },
            { local: "Vasvo Lao", golesLocal: 0, golesVisitante: 0, visitante: "Toro Reyes", dsq: false },
            { local: "Christian Horny", golesLocal: 0, golesVisitante: 0, visitante: "Eduardo Scarpanti Flores", dsq: false },
            { local: "Francisco Martínez", golesLocal: 0, golesVisitante: 0, visitante: "Clais Racing", dsq: false },
            { local: "La Gacela Del Deporte", golesLocal: 0, golesVisitante: 0, visitante: "Mauro Reyes Hernández", dsq: false },
            { local: "Saúl González", golesLocal: 0, golesVisitante: 0, visitante: "Johans Gormaz", dsq: false }
        ]
    },
    3: { fecha: "09/02/2026", partidos: [] },
    4: { fecha: "11/02/2026", partidos: [] },
    5: { fecha: "13/02/2026", partidos: [] },
    6: { fecha: "16/02/2026", partidos: [] }
};

// Datos de las eliminatorias
const eliminatorias = {
    playoff: {
        nombre: "Play Off",
        fecha: "18/02/2026",
        partidos: []
    },
    octavos: {
        nombre: "Octavos de Final",
        fecha: "23/02/2026",
        partidos: []
    },
    cuartos: {
        nombre: "Cuartos de Final",
        fecha: "25/02/2026",
        partidos: []
    },
    semis: {
        nombre: "Semifinales",
        fecha: "27/02/2026",
        partidos: []
    },
    final: {
        nombre: "Gran Final",
        fecha: "03/03/2026",
        partidos: []
    }
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

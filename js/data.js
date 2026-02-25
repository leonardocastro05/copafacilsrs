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
    { pos: 1, nombre: "Alexis Iceman", equipo: "00 CRT Competition", puntos: 15, color: colores[1] },
    { pos: 2, nombre: "Sergio Solano", equipo: "Furia Andalusí", puntos: 15, color: colores[2] },
    { pos: 3, nombre: "Cristian Ezpeleta", equipo: "Campos Racing F1 Ezpeleta", puntos: 15, color: colores[0] },
    { pos: 4, nombre: "Eduardo Calvo", equipo: "Foxtrot GP", puntos: 15, color: colores[3] },
    { pos: 5, nombre: "Johans Gormaz", equipo: "F1 FORD MUSTANG", puntos: 15, color: colores[25] },
    { pos: 6, nombre: "Marc cr Rayo", equipo: "Rayito Team", puntos: 15, color: colores[9] },
    { pos: 7, nombre: "André Pov", equipo: "Tortuga", puntos: 12, color: colores[29] },
    { pos: 8, nombre: "Leonardo Castro", equipo: "07 CRT Competition", puntos: 12, color: colores[5] },
    { pos: 9, nombre: "Frank White", equipo: "Frank White", puntos: 12, color: colores[21] },
    { pos: 10, nombre: "Vasvo Lao", equipo: "Subaru F1 Team", puntos: 12, color: colores[30] },
    { pos: 11, nombre: "Valdi CT", equipo: "El Nano", puntos: 12, color: colores[28] },
    { pos: 12, nombre: "Christian Horny", equipo: "15 Fénix Racing Team", puntos: 12, color: colores[18] },
    { pos: 13, nombre: "Alejandro Alonso", equipo: "BMW F1 Team", puntos: 12, color: colores[7] },
    { pos: 14, nombre: "Mauro Reyes Hernández", equipo: "Canary Racing Team SRS", puntos: 12, color: colores[26] },
    { pos: 15, nombre: "Álvaro Redondo", equipo: "72 Akina SpeedStars Fujiwara", puntos: 9, color: colores[4] },
    { pos: 16, nombre: "Clais Racing", equipo: "Clais Racing team", puntos: 9, color: colores[24] },
    { pos: 17, nombre: "Samuel Guevara Salazar", equipo: "HONDA", puntos: 9, color: colores[12] },
    { pos: 18, nombre: "Francisco Martínez", equipo: "Renfe Cercanías RT", puntos: 9, color: colores[20] },
    { pos: 19, nombre: "Cristóbal Farías Galleguillos", equipo: "18 ZETTA RACING", puntos: 9, color: colores[10] },
    { pos: 20, nombre: "Alfonso Laguera", equipo: "70 Benetton Corse", puntos: 9, color: colores[11] },
    { pos: 21, nombre: "Eduardo Scarpanti Flores", equipo: "ESFX Red Bull Ferrari", puntos: 9, color: colores[0] },
    { pos: 22, nombre: "Blake Ezeh", equipo: "Deco27 HoloLive Racing Team", puntos: 9, color: colores[17] },
    { pos: 23, nombre: "Luis Rivera", equipo: "28 BRAWN GP", puntos: 9, color: colores[27] },
    { pos: 24, nombre: "Nelson David Quiroz", equipo: "9 ART Grand prix", puntos: 6, color: colores[8] },
    { pos: 25, nombre: "Antonio Pinillos", equipo: "Red Bull Pinkustercia F1 Team", puntos: 6, color: colores[6] },
    { pos: 26, nombre: "Saúl González", equipo: "99 León Racing Team", puntos: 6, color: colores[23] },
    { pos: 27, nombre: "Giacomina Leclerc", equipo: "jacqui09sikes615978", puntos: 6, color: colores[16] },
    { pos: 28, nombre: "Pablo Parada", equipo: "BMT Alpine F1 Team", puntos: 0, color: colores[14] },
    { pos: 29, nombre: "David Palomo", equipo: "Alunk Works", puntos: 0, color: colores[15] },
    { pos: 30, nombre: "La Gacela Del Deporte", equipo: "La Gacela del Deporte", puntos: 0, color: colores[22] },
    { pos: 31, nombre: "Fab Man", equipo: "Racing CLub", puntos: 0, color: colores[19] },
    { pos: 32, nombre: "Offline Account", equipo: "offlineaccount", puntos: 0, color: colores[13] }

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
            { local: "André Pov", golesLocal: 0, golesVisitante: 0, visitante: "Pablo Parada", dsq: true },
            { local: "David Palomo", golesLocal: 0, golesVisitante: 0, visitante: "Giacomina Leclerc", dsq: true },
            { local: "Vasvo Lao", golesLocal: 1, golesVisitante: 0, visitante: "Blake Ezeh", dsq: false },
            { local: "Christian Horny", golesLocal: 0, golesVisitante: 0, visitante: "Fab Man", dsq: true },
            { local: "Francisco Martínez", golesLocal: 0, golesVisitante: 1, visitante: "Frank White", dsq: false },
            { local: "La Gacela Del Deporte", golesLocal: 0, golesVisitante: 0, visitante: "Eduardo Scarpanti Flores", dsq: true },
            { local: "Saúl González", golesLocal: 0, golesVisitante: 1, visitante: "Clais Racing", dsq: false },
            { local: "Johans Gormaz", golesLocal: 1, golesVisitante: 0, visitante: "Mauro Reyes Hernández", dsq: false }
        ]
    },
    2: {
        fecha: "06/02/2026",
        partidos: [
            { local: "Cristian Ezpeleta", golesLocal: 0, golesVisitante: 1, visitante: "Eduardo Calvo", dsq: false },
            { local: "Alexis Iceman", golesLocal: 1, golesVisitante: 0, visitante: "Álvaro Redondo", dsq: false },
            { local: "Sergio Solano", golesLocal: 1, golesVisitante: 0, visitante: "Antonio Pinillos", dsq: false },
            { local: "Leonardo Castro", golesLocal: 1, golesVisitante: 0, visitante: "Nelson David Quiroz", dsq: false },
            { local: "Luis Rivera", golesLocal: 0, golesVisitante: 1, visitante: "Cristóbal Farías Galleguillos", dsq: false },
            { local: "Alejandro Alonso", golesLocal: 1, golesVisitante: 0, visitante: "Samuel Guevara Salazar", dsq: false },
            { local: "Marc cr Rayo", golesLocal: 1, golesVisitante: 0, visitante: "Jorge Nevado Barbero", dsq: true },
            { local: "Alfonso Laguera", golesLocal: 0, golesVisitante: 0, visitante: "Pablo Parada", dsq: true },
            { local: "Valdi CT", golesLocal: 1, golesVisitante: 0, visitante: "Giacomina Leclerc", dsq: false },
            { local: "André Pov", golesLocal: 1, golesVisitante: 0, visitante: "Blake Ezeh", dsq: false },
            { local: "David Palomo", golesLocal: 0, golesVisitante: 0, visitante: "Fab Man", dsq: true },
            { local: "Vasvo Lao", golesLocal: 0, golesVisitante: 1, visitante: "Frank White", dsq: false },
            { local: "Christian Horny", golesLocal: 1, golesVisitante: 0, visitante: "Eduardo Scarpanti Flores", dsq: false },
            { local: "Francisco Martínez", golesLocal: 1, golesVisitante: 0, visitante: "Clais Racing", dsq: false },
            { local: "La Gacela Del Deporte", golesLocal: 0, golesVisitante: 0, visitante: "Mauro Reyes Hernández", dsq: true },
            { local: "Saúl González", golesLocal: 0, golesVisitante: 1, visitante: "Johans Gormaz", dsq: false }
        ]
    },
    3: {
        fecha: "09/02/2026",
        partidos: [
            { local: "Eduardo Calvo", golesLocal: 5, golesVisitante: 6, visitante: "Álvaro Redondo", dsq: false },
            { local: "Cristian Ezpeleta", golesLocal: 2, golesVisitante: 15, visitante: "Antonio Pinillos", dsq: false },
            { local: "Alexis Iceman", golesLocal: 1, golesVisitante: 28, visitante: "Nelson David Quiroz", dsq: false },
            { local: "Sergio Solano", golesLocal: 4, golesVisitante: 17, visitante: "Cristóbal Farías Galleguillos", dsq: false },
            { local: "Leonardo Castro", golesLocal: 3, golesVisitante: 24, visitante: "Samuel Guevara Salazar", dsq: false },
            { local: "Luis Rivera", golesLocal: 22, golesVisitante: 0, visitante: "Jorge Nevado Barbero", dsq: true },
            { local: "Alejandro Alonso", golesLocal: 7, golesVisitante: 0, visitante: "Pablo Parada", dsq: true },
            { local: "Marc cr Rayo", golesLocal: 9, golesVisitante: 25, visitante: "Giacomina Leclerc", dsq: false },
            { local: "Alfonso Laguera", golesLocal: 29, golesVisitante: 26, visitante: "Blake Ezeh", dsq: false },
            { local: "Valdi CT", golesLocal: 10, golesVisitante: 0, visitante: "Fab Man", dsq: true },
            { local: "André Pov", golesLocal: 14, golesVisitante: 11, visitante: "Frank White", dsq: false },
            { local: "David Palomo", golesLocal: 0, golesVisitante: 21, visitante: "Eduardo Scarpanti Flores", dsq: true },
            { local: "Vasvo Lao", golesLocal: 8, golesVisitante: 16, visitante: "Clais Racing", dsq: false },
            { local: "Christian Horny", golesLocal: 30, golesVisitante: 20, visitante: "Mauro Reyes Hernández", dsq: false },
            { local: "Francisco Martínez", golesLocal: 18, golesVisitante: 12, visitante: "Johans Gormaz", dsq: false },
            { local: "La Gacela Del Deporte", golesLocal: 0, golesVisitante: 19, visitante: "Saúl González", dsq: true }
        ]
    },
    4: {
        fecha: "11/02/2026",
        partidos: [
            { local: "Eduardo Calvo", golesLocal: 2, golesVisitante: 1, visitante: "Alexis Iceman", dsq: false },
            { local: "Álvaro Redondo", golesLocal: 6, golesVisitante: 3, visitante: "Cristian Ezpeleta", dsq: false },
            { local: "Antonio Pinillos", golesLocal: 17, golesVisitante: 5, visitante: "Leonardo Castro", dsq: false },
            { local: "Nelson David Quiroz", golesLocal: 27, golesVisitante: 4, visitante: "Sergio Solano", dsq: false },
            { local: "Cristóbal Farías Galleguillos", golesLocal: 22, golesVisitante: 10, visitante: "Alejandro Alonso", dsq: false },
            { local: "Samuel Guevara Salazar", golesLocal: 15, golesVisitante: 28, visitante: "Luis Rivera", dsq: false },
            { local: "Pablo Parada", golesLocal: 0, golesVisitante: 9, visitante: "Marc cr Rayo", dsq: true },
            { local: "Giacomina Leclerc", golesLocal: 23, golesVisitante: 26, visitante: "Alfonso Laguera", dsq: false },
            { local: "Blake Ezeh", golesLocal: 24, golesVisitante: 0, visitante: "David Palomo", dsq: true },
            { local: "Fab Man", golesLocal: 0, golesVisitante: 12, visitante: "André Pov", dsq: true },
            { local: "Frank White", golesLocal: 14, golesVisitante: 11, visitante: "Christian Horny", dsq: false },
            { local: "Eduardo Scarpanti Flores", golesLocal: 21, golesVisitante: 7, visitante: "Vasvo Lao", dsq: false },
            { local: "Clais Racing", golesLocal: 16, golesVisitante: 0, visitante: "La Gacela Del Deporte", dsq: true },
            { local: "Mauro Reyes Hernández", golesLocal: 18, golesVisitante: 19, visitante: "Francisco Martínez", dsq: false },
            { local: "Saúl González", golesLocal: 20, golesVisitante: 13, visitante: "Valdi CT", dsq: false },
            { local: "Johans Gormaz", golesLocal: 8, golesVisitante: 0, visitante: "Jorge Nevado Barbero", dsq: true }
        ]
    },
    5: {
        fecha: "13/02/2026",
        partidos: [
            { local: "Marc cr Rayo", golesLocal: 8, golesVisitante: 1, visitante: "Alexis Iceman", dsq: false },
            { local: "Alejandro Alonso", golesLocal: 24, golesVisitante: 2, visitante: "Leonardo Castro", dsq: false },
            { local: "Johans Gormaz", golesLocal: 10, golesVisitante: 9, visitante: "Eduardo Calvo", dsq: false },
            { local: "Valdi CT", golesLocal: 18, golesVisitante: 6, visitante: "Sergio Solano", dsq: false },
            { local: "Nelson David Quiroz", golesLocal: 4, golesVisitante: 0, visitante: "Fab Man", dsq: true },
            { local: "Antonio Pinillos", golesLocal: 17, golesVisitante: 0, visitante: "Pablo Parada", dsq: true },
            { local: "Álvaro Redondo", golesLocal: 3, golesVisitante: 0, visitante: "David Palomo", dsq: true },
            { local: "Cristóbal Farías Galleguillos", golesLocal: 19, golesVisitante: 0, visitante: "La Gacela Del Deporte", dsq: true },
            { local: "Cristian Ezpeleta", golesLocal: 5, golesVisitante: 7, visitante: "André Pov", dsq: false },
            { local: "Vasvo Lao", golesLocal: 12, golesVisitante: 13, visitante: "Frank White", dsq: false },
            { local: "Mauro Reyes Hernández", golesLocal: 21, golesVisitante: 27, visitante: "Luis Rivera", dsq: false },
            { local: "Christian Horny", golesLocal: 11, golesVisitante: 15, visitante: "Clais Racing", dsq: false },
            { local: "Samuel Guevara Salazar", golesLocal: 14, golesVisitante: 25, visitante: "Giacomina Leclerc", dsq: false },
            { local: "Eduardo Scarpanti Flores", golesLocal: 23, golesVisitante: 26, visitante: "Blake Ezeh", dsq: false },
            { local: "Alfonso Laguera", golesLocal: 22, golesVisitante: 16, visitante: "Francisco Martínez", dsq: false },
            { local: "Saúl González", golesLocal: 20, golesVisitante: 0, visitante: "Offline Account", dsq: true }
        ]
    },
    6: {
        fecha: "17/02/2026",
        partidos: [
            { local: "Antonio Pinillos", golesLocal: 15, golesVisitante: 0, visitante: "David Palomo", dsq: true },
            { local: "Nelson David Quiroz", golesLocal: 12, golesVisitante: 0, visitante: "La Gacela Del Deporte", dsq: true },
            { local: "Cristóbal Farías Galleguillos", golesLocal: 19, golesVisitante: 0, visitante: "Pablo Parada", dsq: true },
            { local: "Luis Rivera", golesLocal: 29, golesVisitante: 0, visitante: "Fab Man", dsq: true },
            { local: "Alfonso Laguera", golesLocal: 20, golesVisitante: 0, visitante: "Offline Account", dsq: true },
            { local: "Marc cr Rayo", golesLocal: 13, golesVisitante: 21, visitante: "Alejandro Alonso", dsq: false },
            { local: "Johans Gormaz", golesLocal: 10, golesVisitante: 14, visitante: "Valdi CT", dsq: false },
            { local: "Alexis Iceman", golesLocal: 1, golesVisitante: 7, visitante: "Leonardo Castro", dsq: false },
            { local: "Christian Horny", golesLocal: 16, golesVisitante: 2, visitante: "Sergio Solano", dsq: false },
            { local: "Eduardo Calvo", golesLocal: 4, golesVisitante: 9, visitante: "Vasvo Lao", dsq: false },
            { local: "Mauro Reyes Hernández", golesLocal: 30, golesVisitante: 6, visitante: "André Pov", dsq: false },
            { local: "Cristian Ezpeleta", golesLocal: 3, golesVisitante: 17, visitante: "Samuel Guevara Salazar", dsq: false },
            { local: "Clais Racing", golesLocal: 11, golesVisitante: 5, visitante: "Álvaro Redondo", dsq: false },
            { local: "Eduardo Scarpanti Flores", golesLocal: 25, golesVisitante: 18, visitante: "Francisco Martínez", dsq: false },
            { local: "Frank White", golesLocal: 8, golesVisitante: 23, visitante: "Saúl González", dsq: false },
            { local: "Giacomina Leclerc", golesLocal: 28, golesVisitante: 27, visitante: "Blake Ezeh", dsq: false }
        ]
    }
};

// Datos de las eliminatorias
const eliminatorias = {
    playoff: {
        nombre: "Play Off",
        fecha: "18/02/2026",
        partidos: [
            { local: "Frank White", golesLocal: 11, golesVisitante: 27, visitante: "Nelson David Quiroz", dsq: false },
            { local: "Vasvo Lao", golesLocal: 8, golesVisitante: 29, visitante: "Luis Rivera", dsq: false },
            { local: "Valdi CT", golesLocal: 13, golesVisitante: 24, visitante: "Blake Ezeh", dsq: false },
            { local: "Christian Horny", golesLocal: 12, golesVisitante: 20, visitante: "Eduardo Scarpanti Flores", dsq: false },
            { local: "Alejandro Alonso", golesLocal: 9, golesVisitante: 6, visitante: "Alfonso Laguera", dsq: false },
            { local: "Mauro Reyes Hernández", golesLocal: 30, golesVisitante: 18, visitante: "Cristóbal Farías Galleguillos", dsq: false },
            { local: "Álvaro Redondo", golesLocal: 7, golesVisitante: 19, visitante: "Francisco Martínez", dsq: false },
            { local: "Clais Racing", golesLocal: 17, golesVisitante: 14, visitante: "Samuel Guevara Salazar", dsq: false }
        ]
    },
    octavos: {
        nombre: "Octavos de Final",
        fecha: "23/02/2026",
        partidos: [
            { local: "Alexis Iceman", golesLocal: 4, golesVisitante: 18, visitante: "Samuel Guevara Salazar", dsq: false },
            { local: "Sergio Solano", golesLocal: 3, golesVisitante: 12, visitante: "Álvaro Redondo", dsq: false },
            { local: "Cristian Ezpeleta", golesLocal: 5, golesVisitante: 15, visitante: "Cristóbal Farías Galleguillos", dsq: false },
            { local: "Eduardo Calvo", golesLocal: 2, golesVisitante: 23, visitante: "Alfonso Laguera", dsq: false },
            { local: "Johans Gormaz", golesLocal: 7, golesVisitante: 13, visitante: "Christian Horny", dsq: false },
            { local: "Marc cr Rayo", golesLocal: 11, golesVisitante: 10, visitante: "Valdi CT", dsq: false },
            { local: "André Pov", golesLocal: 8, golesVisitante: 6, visitante: "Vasvo Lao", dsq: false },
            { local: "Leonardo Castro", golesLocal: 1, golesVisitante: 9, visitante: "69 CRT Competition", dsq: false }
        ]
    },
    cuartos: {
        nombre: "Cuartos de Final",
        fecha: "25/02/2026",
        partidos: [
            { local: "Alexis Iceman", golesLocal: 27, golesVisitante: 11, visitante: "Leonardo Castro", dsq: false },
            { local: "Sergio Solano", golesLocal: 2, golesVisitante: 6, visitante: "Vasvo Lao", dsq: false },
            { local: "Cristian Ezpeleta", golesLocal: 3, golesVisitante: 9, visitante: "Valdi CT", dsq: false },
            { local: "Eduardo Calvo", golesLocal: 1, golesVisitante: 5, visitante: "Johans Gormaz", dsq: false }
        ]
    },
    semis: {
        nombre: "Semifinales",
        fecha: "27/02/2026",
        partidos: [
            { local: "Leonardo Castro", golesLocal: 0, golesVisitante: 0, visitante: "Eduardo Calvo", dsq: false },
            { local: "Sergio Solano", golesLocal: 0, golesVisitante: 0, visitante: "Cristian Ezpeleta", dsq: false }
        ]
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

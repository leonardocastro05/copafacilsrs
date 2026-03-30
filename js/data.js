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
    '#b0c4de', '#cd853f', '#98fb98', '#db7093', '#f4a460'
];

// Datos de los pilotos/equipos — T35
// 30 pilotos (expulsados: TJ LEE, Alfiansyah Reza, Alfonso Laguera, Marco Antonio)
const pilotos = [
    { pos: 1,  nombre: "Cristian Ezpeleta",          equipo: "Campos Racing F1 Ezpeleta",         puntos: 30, color: colores[0] },
    { pos: 2,  nombre: "Valdi CT",                   equipo: "El Nano",                           puntos: 27, color: colores[1] },
    { pos: 3,  nombre: "Leoo Castro",                equipo: "07 CRT Competition",                puntos: 30, color: colores[2] },
    { pos: 4,  nombre: "Sergio Solano",              equipo: "Furia Andalusí",                    puntos: 27, color: colores[3] },
    { pos: 5,  nombre: "Vasvo Lao",                  equipo: "Subaru F1 Team",                    puntos: 27, color: colores[4] },
    { pos: 6,  nombre: "Alexis Iceman",              equipo: "00 CRT Competition",                puntos: 24, color: colores[5] },
    { pos: 7,  nombre: "Ruben Medina",               equipo: "Team Chuis",                        puntos: 15, color: colores[6] },
    { pos: 8,  nombre: "André Prov",                 equipo: "Tortuga",                           puntos: 24, color: colores[7] },
    { pos: 9,  nombre: "Frank White",                equipo: "69 CRT Competition",                puntos: 12, color: colores[8] },
    { pos: 10, nombre: "Marco Rodriguez",            equipo: "94 Pagani Renault",                 puntos: 18, color: colores[9] },
    { pos: 11, nombre: "Eduardo Calvo",              equipo: "Foxtrot GP",                        puntos: 24, color: colores[10] },
    { pos: 12, nombre: "Samuel Guevara Salazar",     equipo: "HONDA",                             puntos: 15, color: colores[11] },
    { pos: 13, nombre: "Nelson David Quiroz",        equipo: "9 ART Grand prix",                  puntos: 12, color: colores[12] },
    { pos: 14, nombre: "Eduardo Scarpati Flores",    equipo: "ESFX Red Bull Ferrari",             puntos: 6, color: colores[13] },
    { pos: 15, nombre: "Templario VCR",              equipo: "Hispania Racing Team",              puntos: 9, color: colores[14] },
    { pos: 16, nombre: "Johans Gormaz",              equipo: "01 FORD MUSTANG",                   puntos: 0, color: colores[15], dsq: true },
    { pos: 17, nombre: "Marc cr Rayo",               equipo: "Rayito Team",                       puntos: 18, color: colores[16] },
    { pos: 18, nombre: "Antonio Pinillos",           equipo: "Red Bull Pinkustercia F1 Team",     puntos: 18, color: colores[17] },
    { pos: 19, nombre: "Alvaro Redondo",             equipo: "72 Akina SpeedStars Fujiwara",      puntos: 18, color: colores[18] },
    { pos: 20, nombre: "Francisco Martínez",         equipo: "Renfe Cercanías RT",                puntos: 9, color: colores[19] },
    { pos: 21, nombre: "Cristóbal Farias",           equipo: "18 ZETTA RACING",                   puntos: 12, color: colores[20] },
    { pos: 22, nombre: "Markel Diaz",                equipo: "Cadillac KTM F5",                   puntos: 9, color: colores[21] },
    { pos: 23, nombre: "Nicolo Civera",              equipo: "ncivera94792820",                   puntos: 9, color: colores[22] },
    { pos: 24, nombre: "Blake Ezeh",                 equipo: "Deco27 HoloLive Racing Team",       puntos: 9, color: colores[23] },
    { pos: 25, nombre: "Alfonso Laguera",            equipo: "70 Benetton Camel",                 puntos: 0, color: colores[24], expulsado: true },
    { pos: 26, nombre: "Christian Horny",            equipo: "15 Fénix Racing Team",              puntos: 12, color: colores[25] },
    { pos: 27, nombre: "Alejandro Alonso",           equipo: "BMW F1 TEAM",                       puntos: 3, color: colores[26] },
    { pos: 28, nombre: "Giacomina Leclerc",          equipo: "jacqui09sikes615978",               puntos: 3, color: colores[27] },
    { pos: 29, nombre: "Clais Racing",               equipo: "Clais Racing team",                 puntos: 3, color: colores[28] },
    { pos: 30, nombre: "Marco Antonio",              equipo: "217488549770",                      puntos: 0, color: colores[29], expulsado: true }
];

// Datos de las jornadas (Fase de Grupos) — T35
// 10 jornadas, 30 pilotos (TJ LEE y Alfiansyah Reza expulsados desde J3; Alfonso Laguera y Marco Antonio desde J4)
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
    // J2: 32 pilotos → 16 partidos, nadie se libra
    2: {
        fecha: "9 de Marzo",
        partidos: [
            { local: "Eduardo Calvo",              visitante: "Leoo Castro",                 golesLocal: "P2", golesVisitante: "P1" },
            { local: "Sergio Solano",              visitante: "Alvaro Redondo",              golesLocal: "P8", golesVisitante: "P3" },
            { local: "Vasvo Lao",                  visitante: "Marco Rodriguez",             golesLocal: "P18", golesVisitante: "P11" },
            { local: "André Prov",                 visitante: "Christian Horny",             golesLocal: "P4", golesVisitante: "P24" },
            { local: "Cristian Ezpeleta",          visitante: "Alfonso Laguera",             golesLocal: "P6", golesVisitante: "P19" },
            { local: "Alexis Iceman",              visitante: "TJ LEE",                     golesLocal: "P12", golesVisitante: "P30" },
            { local: "Valdi CT",                   visitante: "Nicolo Civera",               golesLocal: "P7", golesVisitante: "P29" },
            { local: "Ruben Medina",               visitante: "Giacomina Leclerc",           golesLocal: "P5", golesVisitante: "P22" },
            { local: "Frank White",                visitante: "Templario VCR",               golesLocal: "P16", golesVisitante: "P23" },
            { local: "Johans Gormaz",              visitante: "Clais Racing",                golesLocal: "P9", golesVisitante: "P28" },
            { local: "Marc cr Rayo",               visitante: "Samuel Guevara Salazar",      golesLocal: "P13", golesVisitante: "P25" },
            { local: "Nelson David Quiroz",        visitante: "Markel Diaz",                 golesLocal: "P27", golesVisitante: "P26" },
            { local: "Antonio Pinillos",           visitante: "Alfiansyah Reza",             golesLocal: "P10", golesVisitante: "P31" },
            { local: "Blake Ezeh",                 visitante: "Eduardo Scarpati Flores",     golesLocal: "P15", golesVisitante: "P21" },
            { local: "Francisco Martínez",         visitante: "Marco Antonio",               golesLocal: "P20", golesVisitante: "P32" },
            { local: "Cristóbal Farias",           visitante: "Alejandro Alonso",            golesLocal: "P14", golesVisitante: "P17" }
        ]
    },
    3: {
        fecha: "11 de Marzo",
        partidos: [
            { local: "Eduardo Calvo",              visitante: "Cristian Ezpeleta",           golesLocal: "P8",  golesVisitante: "P4" },
            { local: "Sergio Solano",              visitante: "Ruben Medina",                golesLocal: "P2",  golesVisitante: "P11" },
            { local: "Vasvo Lao",                  visitante: "Frank White",                 golesLocal: "P1",  golesVisitante: "P7" },
            { local: "André Prov",                 visitante: "Johans Gormaz",               golesLocal: "P9",  golesVisitante: "P10" },
            { local: "Leoo Castro",                visitante: "Alvaro Redondo",              golesLocal: "P5",  golesVisitante: "P6" },
            { local: "Valdi CT",                   visitante: "Marc cr Rayo",                golesLocal: "P12", golesVisitante: "P14" },
            { local: "Alexis Iceman",              visitante: "Nelson David Quiroz",         golesLocal: "P3",  golesVisitante: "P24" },
            { local: "Marco Rodriguez",            visitante: "Antonio Pinillos",            golesLocal: "RET", golesVisitante: "P13" },
            { local: "Blake Ezeh",                 visitante: "Francisco Martínez",          golesLocal: "P21", golesVisitante: "P19" },
            { local: "Cristóbal Farias",           visitante: "Giacomina Leclerc",           golesLocal: "P16", golesVisitante: "P22" },
            { local: "Alfonso Laguera",            visitante: "Templario VCR",               golesLocal: "RET", golesVisitante: "P20" },
            { local: "Christian Horny",            visitante: "Samuel Guevara Salazar",      golesLocal: "P18", golesVisitante: "P15" },
            { local: "Eduardo Scarpati Flores",    visitante: "Clais Racing",                golesLocal: "P17", golesVisitante: "P26" },
            { local: "Alejandro Alonso",           visitante: "Nicolo Civera",               golesLocal: "P27", golesVisitante: "P25" },
            { local: "Markel Diaz",                visitante: "Marco Antonio",               golesLocal: "P23", golesVisitante: "P30" }
        ]
    },
    4: {
        fecha: "13 de Marzo",
        partidos: [
            { local: "Vasvo Lao",                  visitante: "Christian Horny",             golesLocal: "P4", golesVisitante: "P17" },
            { local: "Cristian Ezpeleta",          visitante: "Marco Antonio",               golesLocal: "P16", golesVisitante: "DSQ", dsq: true },
            { local: "André Prov",                 visitante: "Clais Racing",                golesLocal: "P1", golesVisitante: "P22" },
            { local: "Leoo Castro",                visitante: "Nelson David Quiroz",         golesLocal: "P5", golesVisitante: "P10" },
            { local: "Valdi CT",                   visitante: "Alfonso Laguera",             golesLocal: "P11", golesVisitante: "DSQ", dsq: true },
            { local: "Sergio Solano",              visitante: "Giacomina Leclerc",           golesLocal: "P6", golesVisitante: "P24" },
            { local: "Alexis Iceman",              visitante: "Templario VCR",               golesLocal: "P2", golesVisitante: "P21" },
            { local: "Antonio Pinillos",           visitante: "Eduardo Scarpati Flores",     golesLocal: "P9", golesVisitante: "P19" },
            { local: "Francisco Martínez",         visitante: "Alvaro Redondo",              golesLocal: "P18", golesVisitante: "P8" },
            { local: "Cristóbal Farias",           visitante: "Eduardo Calvo",               golesLocal: "P25", golesVisitante: "P3" },
            { local: "Markel Diaz",                visitante: "Johans Gormaz",               golesLocal: "P28", golesVisitante: "P7" },
            { local: "Marco Rodriguez",            visitante: "Nicolo Civera",               golesLocal: "RET", golesVisitante: "P23" },
            { local: "Frank White",                visitante: "Samuel Guevara Salazar",      golesLocal: "P26", golesVisitante: "P13" },
            { local: "Ruben Medina",               visitante: "Blake Ezeh",                  golesLocal: "P12", golesVisitante: "P20" },
            { local: "Marc cr Rayo",               visitante: "Alejandro Alonso",            golesLocal: "P14", golesVisitante: "P15" }
        ]
    },
    5: {
        fecha: "16 de Marzo",
        partidos: [
            { local: "Valdi CT",                   visitante: "Christian Horny",             golesLocal: "P7", golesVisitante: "P20" },
            { local: "André Prov",                 visitante: "Eduardo Scarpati Flores",     golesLocal: "P10", golesVisitante: "P17" },
            { local: "Antonio Pinillos",           visitante: "Leoo Castro",                 golesLocal: "P9", golesVisitante: "P3" },
            { local: "Nelson David Quiroz",        visitante: "Alejandro Alonso",            golesLocal: "P13", golesVisitante: "RET" },
            { local: "Alvaro Redondo",             visitante: "Vasvo Lao",                   golesLocal: "P8", golesVisitante: "P5" },
            { local: "Marc cr Rayo",               visitante: "Eduardo Calvo",               golesLocal: "P16", golesVisitante: "P4" },
            { local: "Markel Diaz",                visitante: "Ruben Medina",                golesLocal: "P26", golesVisitante: "P19" },
            { local: "Samuel Guevara Salazar",     visitante: "Giacomina Leclerc",           golesLocal: "P12", golesVisitante: "P25" },
            { local: "Nicolo Civera",              visitante: "Sergio Solano",               golesLocal: "RET", golesVisitante: "P2" },
            { local: "Francisco Martínez",         visitante: "Frank White",                 golesLocal: "P22", golesVisitante: "P11" },
            { local: "Johans Gormaz",              visitante: "Templario VCR",               golesLocal: "P27", golesVisitante: "P23" },
            { local: "Marco Rodriguez",            visitante: "Cristóbal Farias",            golesLocal: "P14", golesVisitante: "P15" },
            { local: "Cristian Ezpeleta",          visitante: "Clais Racing",                golesLocal: "P6", golesVisitante: "P21" },
            { local: "Alexis Iceman",              visitante: "Blake Ezeh",                  golesLocal: "P1", golesVisitante: "RET" }
        ]
    },
    6: {
        fecha: "18 de Marzo",
        partidos: [
            { local: "Leoo Castro",                visitante: "Cristóbal Farias",            golesLocal: "P2",  golesVisitante: "P22" },
            { local: "Cristian Ezpeleta",          visitante: "Frank White",                 golesLocal: "P5",  golesVisitante: "P7" },
            { local: "Nelson David Quiroz",        visitante: "Sergio Solano",               golesLocal: "P9",  golesVisitante: "P1" },
            { local: "Clais Racing",               visitante: "Vasvo Lao",                   golesLocal: "P27", golesVisitante: "P3" },
            { local: "Blake Ezeh",                 visitante: "Markel Diaz",                 golesLocal: "P18", golesVisitante: "P28" },
            { local: "Johans Gormaz",              visitante: "Eduardo Scarpati Flores",     golesLocal: "P13", golesVisitante: "P16" },
            { local: "Valdi CT",                   visitante: "Alejandro Alonso",            golesLocal: "P8",  golesVisitante: "P12" },
            { local: "Marc cr Rayo",               visitante: "Antonio Pinillos",            golesLocal: "P15", golesVisitante: "P24" },
            { local: "André Prov",                 visitante: "Alvaro Redondo",              golesLocal: "P6",  golesVisitante: "P14" },
            { local: "Templario VCR",              visitante: "Christian Horny",             golesLocal: "P20", golesVisitante: "P17" },
            { local: "Ruben Medina",               visitante: "Giacomina Leclerc",           golesLocal: "P19", golesVisitante: "P26" },
            { local: "Nicolo Civera",              visitante: "Eduardo Calvo",               golesLocal: "RET", golesVisitante: "P4" },
            { local: "Francisco Martínez",         visitante: "Marco Rodriguez",             golesLocal: "P11", golesVisitante: "P10" },
            { local: "Alexis Iceman",              visitante: "Samuel Guevara Salazar",      golesLocal: "P31", golesVisitante: "P21" }
        ]
    },
    7: {
        fecha: "23 de Marzo",
        partidos: [
            { local: "Marco Rodriguez",            visitante: "Valdi CT",                    golesLocal: "P11", golesVisitante: "P7" },
            { local: "Vasvo Lao",                  visitante: "Antonio Pinillos",            golesLocal: "P6", golesVisitante: "P14" },
            { local: "Cristóbal Farias",           visitante: "Alexis Iceman",               golesLocal: "P21", golesVisitante: "P2" },
            { local: "Samuel Guevara Salazar",     visitante: "Cristian Ezpeleta",           golesLocal: "P10", golesVisitante: "P3" },
            { local: "Eduardo Scarpati Flores",    visitante: "Christian Horny",             golesLocal: "P20", golesVisitante: "P15" },
            { local: "Alvaro Redondo",             visitante: "Templario VCR",               golesLocal: "P12", golesVisitante: "P19" },
            { local: "Frank White",                visitante: "Nelson David Quiroz",         golesLocal: "RET", golesVisitante: "P9" },
            { local: "Eduardo Calvo",              visitante: "Markel Diaz",                 golesLocal: "P4", golesVisitante: "RET" },
            { local: "Nicolo Civera",              visitante: "Johans Gormaz",               golesLocal: "RET", golesVisitante: "DSQ", dsq: true },
            { local: "Blake Ezeh",                 visitante: "Giacomina Leclerc",           golesLocal: "P17", golesVisitante: "P22" },
            { local: "Alejandro Alonso",           visitante: "Leoo Castro",                 golesLocal: "P13", golesVisitante: "P1" },
            { local: "Francisco Martínez",         visitante: "Clais Racing",                golesLocal: "P18", golesVisitante: "P25" },
            { local: "Ruben Medina",               visitante: "Marc cr Rayo",                golesLocal: "P19", golesVisitante: "P16" },
            { local: "André Prov",                 visitante: "Sergio Solano",               golesLocal: "P8", golesVisitante: "P5" }
        ]
    },
    8: {
        fecha: "24 de Marzo",
        partidos: [
            { local: "André Prov",                 visitante: "Samuel Guevara Salazar",      golesLocal: "P6", golesVisitante: "P11" },
            { local: "Cristian Ezpeleta",          visitante: "Blake Ezeh",                  golesLocal: "P8", golesVisitante: "P15" },
            { local: "Valdi CT",                   visitante: "Eduardo Calvo",               golesLocal: "P7", golesVisitante: "P2" },
            { local: "Leoo Castro",                visitante: "Ruben Medina",                golesLocal: "P1", golesVisitante: "RET" },
            { local: "Sergio Solano",              visitante: "Francisco Martínez",          golesLocal: "P3", golesVisitante: "P14" },
            { local: "Vasvo Lao",                  visitante: "Nelson David Quiroz",         golesLocal: "P5", golesVisitante: "RET" },
            { local: "Alexis Iceman",              visitante: "Clais Racing",                golesLocal: "P4", golesVisitante: "P18" },
            { local: "Johans Gormaz",              visitante: "Marco Rodriguez",             golesLocal: "DSQ", golesVisitante: "P19" },
            { local: "Marc cr Rayo",               visitante: "Alvaro Redondo",              golesLocal: "P13", golesVisitante: "P9" },
            { local: "Antonio Pinillos",           visitante: "Cristóbal Farias",            golesLocal: "P10", golesVisitante: "P17" },
            { local: "Frank White",                visitante: "Eduardo Scarpati Flores",     golesLocal: "RET", golesVisitante: "P20" },
            { local: "Templario VCR",              visitante: "Nicolo Civera",               golesLocal: "P12", golesVisitante: "RET" },
            { local: "Christian Horny",            visitante: "Alejandro Alonso",            golesLocal: "RET", golesVisitante: "RET" },
            { local: "Markel Diaz",                visitante: "Giacomina Leclerc",           golesLocal: "RET", golesVisitante: "P23" }
        ]
    },
    9: {
        fecha: "25 de Marzo",
        partidos: [
            { local: "Nicolo Civera",              visitante: "Frank White",                 golesLocal: "RET", golesVisitante: "P8" },
            { local: "Cristóbal Farias",           visitante: "Ruben Medina",                golesLocal: "P21", golesVisitante: "RET" },
            { local: "Eduardo Calvo",              visitante: "Johans Gormaz",               golesLocal: "P4", golesVisitante: "DSQ", dsq: true },
            { local: "Alejandro Alonso",           visitante: "Cristian Ezpeleta",           golesLocal: "P17", golesVisitante: "P4" },
            { local: "Samuel Guevara Salazar",     visitante: "Leoo Castro",                 golesLocal: "P21", golesVisitante: "P3" },
            { local: "Giacomina Leclerc",          visitante: "Antonio Pinillos",            golesLocal: "P18", golesVisitante: "P5" },
            { local: "Eduardo Scarpati Flores",    visitante: "Valdi CT",                    golesLocal: "P23", golesVisitante: "P1" },
            { local: "Sergio Solano",              visitante: "Blake Ezeh",                  golesLocal: "P13", golesVisitante: "P15" },
            { local: "Templario VCR",              visitante: "Marc cr Rayo",                golesLocal: "P6", golesVisitante: "P9" },
            { local: "Marco Rodriguez",            visitante: "Christian Horny",             golesLocal: "P12", golesVisitante: "P26" },
            { local: "Alexis Iceman",              visitante: "Alvaro Redondo",              golesLocal: "P2", golesVisitante: "P10" },
            { local: "Vasvo Lao",                  visitante: "Markel Diaz",                 golesLocal: "P27", golesVisitante: "RET" },
            { local: "André Prov",                 visitante: "Francisco Martínez",          golesLocal: "P8", golesVisitante: "P18" },
            { local: "Clais Racing",               visitante: "Nelson David Quiroz",         golesLocal: "P25", golesVisitante: "P11" }
        ]
    },
    10: {
        fecha: "27 de Marzo",
        partidos: [
            { local: "Leoo Castro",                visitante: "Frank White",                 golesLocal: "P1", golesVisitante: "P6" },
            { local: "André Prov",                 visitante: "Cristóbal Farias",            golesLocal: "P28", golesVisitante: "P15" },
            { local: "Cristian Ezpeleta",          visitante: "Nicolo Civera",               golesLocal: "P13", golesVisitante: "RET" },
            { local: "Valdi CT",                   visitante: "Blake Ezeh",                  golesLocal: "P3", golesVisitante: "P17" },
            { local: "Marc cr Rayo",               visitante: "Clais Racing",                golesLocal: "P16", golesVisitante: "RET" },
            { local: "Sergio Solano",              visitante: "Markel Diaz",                 golesLocal: "P5", golesVisitante: "RET" },
            { local: "Vasvo Lao",                  visitante: "Eduardo Scarpati Flores",     golesLocal: "P7", golesVisitante: "P20" },
            { local: "Alexis Iceman",              visitante: "Ruben Medina",                golesLocal: "P4", golesVisitante: "RET" },
            { local: "Johans Gormaz",              visitante: "Alvaro Redondo",              golesLocal: "DSQ", golesVisitante: "P12", dsq: true },
            { local: "Antonio Pinillos",           visitante: "Nelson David Quiroz",         golesLocal: "P8", golesVisitante: "P10" },
            { local: "Francisco Martínez",         visitante: "Samuel Guevara Salazar",      golesLocal: "P19", golesVisitante: "P11" },
            { local: "Marco Rodriguez",            visitante: "Eduardo Calvo",               golesLocal: "P9", golesVisitante: "P2" },
            { local: "Templario VCR",              visitante: "Alejandro Alonso",            golesLocal: "P25", golesVisitante: "P14" },
            { local: "Christian Horny",            visitante: "Giacomina Leclerc",           golesLocal: "P21", golesVisitante: "P24" }
        ]
    }
};

// Datos de las eliminatorias — T35
// Sin playoffs: los 16 mejores van directamente a octavos
const eliminatorias = {
    octavos: {
        nombre: "Octavos de Final",
        fecha: "30 de Marzo",
        partidos: [
            { local: "Cristian Ezpeleta",      visitante: "Nelson David Quiroz",        golesLocal: "P3",  golesVisitante: "P10" },
            { local: "Leoo Castro",            visitante: "Frank White",                golesLocal: "P1",  golesVisitante: "P8" },
            { local: "Valdi CT",               visitante: "Samuel Guevara Salazar",     golesLocal: "P5",  golesVisitante: "P19" },
            { local: "Sergio Solano",          visitante: "Ruben Medina",               golesLocal: "P7",  golesVisitante: "RET" },
            { local: "Vasvo Lao",              visitante: "Alvaro Redondo",             golesLocal: "P4",  golesVisitante: "P11" },
            { local: "Alexis Iceman",          visitante: "Antonio Pinillos",           golesLocal: "P9",  golesVisitante: "P12" },
            { local: "André Prov",             visitante: "Marc cr Rayo",               golesLocal: "P6",  golesVisitante: "P13" },
            { local: "Eduardo Calvo",          visitante: "Marco Rodriguez",            golesLocal: "P2",  golesVisitante: "P15" }
        ]
    },
    cuartos: {
        nombre: "Cuartos de Final",
        fecha: "1 de Abril",
        partidos: [
            { local: "Leoo Castro",            visitante: "André Prov",                 golesLocal: "", golesVisitante: "" },
            { local: "Eduardo Calvo",          visitante: "Alexis Iceman",              golesLocal: "", golesVisitante: "" },
            { local: "Cristian Ezpeleta",      visitante: "Vasvo Lao",                  golesLocal: "", golesVisitante: "" },
            { local: "Valdi CT",               visitante: "Sergio Solano",              golesLocal: "", golesVisitante: "" }
        ]
    },
    semis: {
        nombre: "Semifinales",
        fecha: "3 de Abril",
        partidos: [
            { local: "Leoo Castro",            visitante: "Ganador André Prov vs Alexis Iceman", golesLocal: "", golesVisitante: "" },
            { local: "Ganador Cristian Ezpeleta vs Vasvo Lao", visitante: "Ganador Valdi CT vs Sergio Solano", golesLocal: "", golesVisitante: "" }
        ]
    },
    final: {
        nombre: "Gran Final",
        fecha: "6 de Abril",
        partidos: [
            { local: "Leoo Castro",            visitante: "Finalista más débil restante", golesLocal: "", golesVisitante: "" }
        ]
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

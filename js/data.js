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
            { pilotoA: "Sergio Solano",              pilotoB: "Cristóbal Farias",            resultadoA: "P3", resultadoB: "P23" },
            { pilotoA: "Vasvo Lao",                  pilotoB: "Templario VCR",               resultadoA: "P5", resultadoB: "P22" },
            { pilotoA: "André Prov",                 pilotoB: "Blake Ezeh",                  resultadoA: "P6", resultadoB: "P21" },
            { pilotoA: "Eduardo Calvo",              pilotoB: "Samuel Guevara Salazar",      resultadoA: "P1", resultadoB: "P2" },
            { pilotoA: "Alexis Iceman",              pilotoB: "Marco Rodriguez",             resultadoA: "RET", resultadoB: "P18" },
            { pilotoA: "Cristian Ezpeleta",          pilotoB: "Giacomina Leclerc",           resultadoA: "P11", resultadoB: "P27" },
            { pilotoA: "Valdi CT",                   pilotoB: "Francisco Martínez",          resultadoA: "P12", resultadoB: "P19" },
            { pilotoA: "Ruben Medina",               pilotoB: "Alfonso Laguera",             resultadoA: "P10", resultadoB: "RET" },
            { pilotoA: "Frank White",                pilotoB: "Antonio Pinillos",            resultadoA: "P8", resultadoB: "P20" },
            { pilotoA: "Johans Gormaz",              pilotoB: "Christian Horny",              resultadoA: "P9", resultadoB: "P17" },
            { pilotoA: "Marc cr Rayo",               pilotoB: "Alejandro Alonso",            resultadoA: "P14", resultadoB: "P15" },
            { pilotoA: "Nelson David Quiroz",        pilotoB: "Eduardo Scarpati Flores",     resultadoA: "P13", resultadoB: "P16" },
            { pilotoA: "Alvaro Redondo",             pilotoB: "Clais Racing",                resultadoA: "P7", resultadoB: "P24" }
        ]
    },
    // J2: 32 pilotos → 16 partidos, nadie se libra
    2: {
        fecha: "9 de Marzo",
        partidos: [
            { pilotoA: "Eduardo Calvo",              pilotoB: "Leoo Castro",                 resultadoA: "P2", resultadoB: "P1" },
            { pilotoA: "Sergio Solano",              pilotoB: "Alvaro Redondo",              resultadoA: "P8", resultadoB: "P3" },
            { pilotoA: "Vasvo Lao",                  pilotoB: "Marco Rodriguez",             resultadoA: "P18", resultadoB: "P11" },
            { pilotoA: "André Prov",                 pilotoB: "Christian Horny",             resultadoA: "P4", resultadoB: "P24" },
            { pilotoA: "Cristian Ezpeleta",          pilotoB: "Alfonso Laguera",             resultadoA: "P6", resultadoB: "P19" },
            { pilotoA: "Alexis Iceman",              pilotoB: "TJ LEE",                     resultadoA: "P12", resultadoB: "P30" },
            { pilotoA: "Valdi CT",                   pilotoB: "Nicolo Civera",               resultadoA: "P7", resultadoB: "P29" },
            { pilotoA: "Ruben Medina",               pilotoB: "Giacomina Leclerc",           resultadoA: "P5", resultadoB: "P22" },
            { pilotoA: "Frank White",                pilotoB: "Templario VCR",               resultadoA: "P16", resultadoB: "P23" },
            { pilotoA: "Johans Gormaz",              pilotoB: "Clais Racing",                resultadoA: "P9", resultadoB: "P28" },
            { pilotoA: "Marc cr Rayo",               pilotoB: "Samuel Guevara Salazar",      resultadoA: "P13", resultadoB: "P25" },
            { pilotoA: "Nelson David Quiroz",        pilotoB: "Markel Diaz",                 resultadoA: "P27", resultadoB: "P26" },
            { pilotoA: "Antonio Pinillos",           pilotoB: "Alfiansyah Reza",             resultadoA: "P10", resultadoB: "P31" },
            { pilotoA: "Blake Ezeh",                 pilotoB: "Eduardo Scarpati Flores",     resultadoA: "P15", resultadoB: "P21" },
            { pilotoA: "Francisco Martínez",         pilotoB: "Marco Antonio",               resultadoA: "P20", resultadoB: "P32" },
            { pilotoA: "Cristóbal Farias",           pilotoB: "Alejandro Alonso",            resultadoA: "P14", resultadoB: "P17" }
        ]
    },
    3: {
        fecha: "11 de Marzo",
        partidos: [
            { pilotoA: "Eduardo Calvo",              pilotoB: "Cristian Ezpeleta",           resultadoA: "P8",  resultadoB: "P4" },
            { pilotoA: "Sergio Solano",              pilotoB: "Ruben Medina",                resultadoA: "P2",  resultadoB: "P11" },
            { pilotoA: "Vasvo Lao",                  pilotoB: "Frank White",                 resultadoA: "P1",  resultadoB: "P7" },
            { pilotoA: "André Prov",                 pilotoB: "Johans Gormaz",               resultadoA: "P9",  resultadoB: "P10" },
            { pilotoA: "Leoo Castro",                pilotoB: "Alvaro Redondo",              resultadoA: "P5",  resultadoB: "P6" },
            { pilotoA: "Valdi CT",                   pilotoB: "Marc cr Rayo",                resultadoA: "P12", resultadoB: "P14" },
            { pilotoA: "Alexis Iceman",              pilotoB: "Nelson David Quiroz",         resultadoA: "P3",  resultadoB: "P24" },
            { pilotoA: "Marco Rodriguez",            pilotoB: "Antonio Pinillos",            resultadoA: "RET", resultadoB: "P13" },
            { pilotoA: "Blake Ezeh",                 pilotoB: "Francisco Martínez",          resultadoA: "P21", resultadoB: "P19" },
            { pilotoA: "Cristóbal Farias",           pilotoB: "Giacomina Leclerc",           resultadoA: "P16", resultadoB: "P22" },
            { pilotoA: "Alfonso Laguera",            pilotoB: "Templario VCR",               resultadoA: "RET", resultadoB: "P20" },
            { pilotoA: "Christian Horny",            pilotoB: "Samuel Guevara Salazar",      resultadoA: "P18", resultadoB: "P15" },
            { pilotoA: "Eduardo Scarpati Flores",    pilotoB: "Clais Racing",                resultadoA: "P17", resultadoB: "P26" },
            { pilotoA: "Alejandro Alonso",           pilotoB: "Nicolo Civera",               resultadoA: "P27", resultadoB: "P25" },
            { pilotoA: "Markel Diaz",                pilotoB: "Marco Antonio",               resultadoA: "P23", resultadoB: "P30" }
        ]
    },
    4: {
        fecha: "13 de Marzo",
        partidos: [
            { pilotoA: "Vasvo Lao",                  pilotoB: "Christian Horny",             resultadoA: "P4", resultadoB: "P17" },
            { pilotoA: "Cristian Ezpeleta",          pilotoB: "Marco Antonio",               resultadoA: "P16", resultadoB: "DSQ", dsq: true },
            { pilotoA: "André Prov",                 pilotoB: "Clais Racing",                resultadoA: "P1", resultadoB: "P22" },
            { pilotoA: "Leoo Castro",                pilotoB: "Nelson David Quiroz",         resultadoA: "P5", resultadoB: "P10" },
            { pilotoA: "Valdi CT",                   pilotoB: "Alfonso Laguera",             resultadoA: "P11", resultadoB: "DSQ", dsq: true },
            { pilotoA: "Sergio Solano",              pilotoB: "Giacomina Leclerc",           resultadoA: "P6", resultadoB: "P24" },
            { pilotoA: "Alexis Iceman",              pilotoB: "Templario VCR",               resultadoA: "P2", resultadoB: "P21" },
            { pilotoA: "Antonio Pinillos",           pilotoB: "Eduardo Scarpati Flores",     resultadoA: "P9", resultadoB: "P19" },
            { pilotoA: "Francisco Martínez",         pilotoB: "Alvaro Redondo",              resultadoA: "P18", resultadoB: "P8" },
            { pilotoA: "Cristóbal Farias",           pilotoB: "Eduardo Calvo",               resultadoA: "P25", resultadoB: "P3" },
            { pilotoA: "Markel Diaz",                pilotoB: "Johans Gormaz",               resultadoA: "P28", resultadoB: "P7" },
            { pilotoA: "Marco Rodriguez",            pilotoB: "Nicolo Civera",               resultadoA: "RET", resultadoB: "P23" },
            { pilotoA: "Frank White",                pilotoB: "Samuel Guevara Salazar",      resultadoA: "P26", resultadoB: "P13" },
            { pilotoA: "Ruben Medina",               pilotoB: "Blake Ezeh",                  resultadoA: "P12", resultadoB: "P20" },
            { pilotoA: "Marc cr Rayo",               pilotoB: "Alejandro Alonso",            resultadoA: "P14", resultadoB: "P15" }
        ]
    },
    5: {
        fecha: "16 de Marzo",
        partidos: [
            { pilotoA: "Valdi CT",                   pilotoB: "Christian Horny",             resultadoA: "P7", resultadoB: "P20" },
            { pilotoA: "André Prov",                 pilotoB: "Eduardo Scarpati Flores",     resultadoA: "P10", resultadoB: "P17" },
            { pilotoA: "Antonio Pinillos",           pilotoB: "Leoo Castro",                 resultadoA: "P9", resultadoB: "P3" },
            { pilotoA: "Nelson David Quiroz",        pilotoB: "Alejandro Alonso",            resultadoA: "P13", resultadoB: "RET" },
            { pilotoA: "Alvaro Redondo",             pilotoB: "Vasvo Lao",                   resultadoA: "P8", resultadoB: "P5" },
            { pilotoA: "Marc cr Rayo",               pilotoB: "Eduardo Calvo",               resultadoA: "P16", resultadoB: "P4" },
            { pilotoA: "Markel Diaz",                pilotoB: "Ruben Medina",                resultadoA: "P26", resultadoB: "P19" },
            { pilotoA: "Samuel Guevara Salazar",     pilotoB: "Giacomina Leclerc",           resultadoA: "P12", resultadoB: "P25" },
            { pilotoA: "Nicolo Civera",              pilotoB: "Sergio Solano",               resultadoA: "RET", resultadoB: "P2" },
            { pilotoA: "Francisco Martínez",         pilotoB: "Frank White",                 resultadoA: "P22", resultadoB: "P11" },
            { pilotoA: "Johans Gormaz",              pilotoB: "Templario VCR",               resultadoA: "P27", resultadoB: "P23" },
            { pilotoA: "Marco Rodriguez",            pilotoB: "Cristóbal Farias",            resultadoA: "P14", resultadoB: "P15" },
            { pilotoA: "Cristian Ezpeleta",          pilotoB: "Clais Racing",                resultadoA: "P6", resultadoB: "P21" },
            { pilotoA: "Alexis Iceman",              pilotoB: "Blake Ezeh",                  resultadoA: "P1", resultadoB: "RET" }
        ]
    },
    6: {
        fecha: "18 de Marzo",
        partidos: [
            { pilotoA: "Leoo Castro",                pilotoB: "Cristóbal Farias",            resultadoA: "P2",  resultadoB: "P22" },
            { pilotoA: "Cristian Ezpeleta",          pilotoB: "Frank White",                 resultadoA: "P5",  resultadoB: "P7" },
            { pilotoA: "Nelson David Quiroz",        pilotoB: "Sergio Solano",               resultadoA: "P9",  resultadoB: "P1" },
            { pilotoA: "Clais Racing",               pilotoB: "Vasvo Lao",                   resultadoA: "P27", resultadoB: "P3" },
            { pilotoA: "Blake Ezeh",                 pilotoB: "Markel Diaz",                 resultadoA: "P18", resultadoB: "P28" },
            { pilotoA: "Johans Gormaz",              pilotoB: "Eduardo Scarpati Flores",     resultadoA: "P13", resultadoB: "P16" },
            { pilotoA: "Valdi CT",                   pilotoB: "Alejandro Alonso",            resultadoA: "P8",  resultadoB: "P12" },
            { pilotoA: "Marc cr Rayo",               pilotoB: "Antonio Pinillos",            resultadoA: "P15", resultadoB: "P24" },
            { pilotoA: "André Prov",                 pilotoB: "Alvaro Redondo",              resultadoA: "P6",  resultadoB: "P14" },
            { pilotoA: "Templario VCR",              pilotoB: "Christian Horny",             resultadoA: "P20", resultadoB: "P17" },
            { pilotoA: "Ruben Medina",               pilotoB: "Giacomina Leclerc",           resultadoA: "P19", resultadoB: "P26" },
            { pilotoA: "Nicolo Civera",              pilotoB: "Eduardo Calvo",               resultadoA: "RET", resultadoB: "P4" },
            { pilotoA: "Francisco Martínez",         pilotoB: "Marco Rodriguez",             resultadoA: "P11", resultadoB: "P10" },
            { pilotoA: "Alexis Iceman",              pilotoB: "Samuel Guevara Salazar",      resultadoA: "P31", resultadoB: "P21" }
        ]
    },
    7: {
        fecha: "23 de Marzo",
        partidos: [
            { pilotoA: "Marco Rodriguez",            pilotoB: "Valdi CT",                    resultadoA: "P11", resultadoB: "P7" },
            { pilotoA: "Vasvo Lao",                  pilotoB: "Antonio Pinillos",            resultadoA: "P6", resultadoB: "P14" },
            { pilotoA: "Cristóbal Farias",           pilotoB: "Alexis Iceman",               resultadoA: "P21", resultadoB: "P2" },
            { pilotoA: "Samuel Guevara Salazar",     pilotoB: "Cristian Ezpeleta",           resultadoA: "P10", resultadoB: "P3" },
            { pilotoA: "Eduardo Scarpati Flores",    pilotoB: "Christian Horny",             resultadoA: "P20", resultadoB: "P15" },
            { pilotoA: "Alvaro Redondo",             pilotoB: "Templario VCR",               resultadoA: "P12", resultadoB: "P19" },
            { pilotoA: "Frank White",                pilotoB: "Nelson David Quiroz",         resultadoA: "RET", resultadoB: "P9" },
            { pilotoA: "Eduardo Calvo",              pilotoB: "Markel Diaz",                 resultadoA: "P4", resultadoB: "RET" },
            { pilotoA: "Nicolo Civera",              pilotoB: "Johans Gormaz",               resultadoA: "RET", resultadoB: "DSQ", dsq: true },
            { pilotoA: "Blake Ezeh",                 pilotoB: "Giacomina Leclerc",           resultadoA: "P17", resultadoB: "P22" },
            { pilotoA: "Alejandro Alonso",           pilotoB: "Leoo Castro",                 resultadoA: "P13", resultadoB: "P1" },
            { pilotoA: "Francisco Martínez",         pilotoB: "Clais Racing",                resultadoA: "P18", resultadoB: "P25" },
            { pilotoA: "Ruben Medina",               pilotoB: "Marc cr Rayo",                resultadoA: "P19", resultadoB: "P16" },
            { pilotoA: "André Prov",                 pilotoB: "Sergio Solano",               resultadoA: "P8", resultadoB: "P5" }
        ]
    },
    8: {
        fecha: "24 de Marzo",
        partidos: [
            { pilotoA: "André Prov",                 pilotoB: "Samuel Guevara Salazar",      resultadoA: "P6", resultadoB: "P11" },
            { pilotoA: "Cristian Ezpeleta",          pilotoB: "Blake Ezeh",                  resultadoA: "P8", resultadoB: "P15" },
            { pilotoA: "Valdi CT",                   pilotoB: "Eduardo Calvo",               resultadoA: "P7", resultadoB: "P2" },
            { pilotoA: "Leoo Castro",                pilotoB: "Ruben Medina",                resultadoA: "P1", resultadoB: "RET" },
            { pilotoA: "Sergio Solano",              pilotoB: "Francisco Martínez",          resultadoA: "P3", resultadoB: "P14" },
            { pilotoA: "Vasvo Lao",                  pilotoB: "Nelson David Quiroz",         resultadoA: "P5", resultadoB: "RET" },
            { pilotoA: "Alexis Iceman",              pilotoB: "Clais Racing",                resultadoA: "P4", resultadoB: "P18" },
            { pilotoA: "Johans Gormaz",              pilotoB: "Marco Rodriguez",             resultadoA: "DSQ", resultadoB: "P19" },
            { pilotoA: "Marc cr Rayo",               pilotoB: "Alvaro Redondo",              resultadoA: "P13", resultadoB: "P9" },
            { pilotoA: "Antonio Pinillos",           pilotoB: "Cristóbal Farias",            resultadoA: "P10", resultadoB: "P17" },
            { pilotoA: "Frank White",                pilotoB: "Eduardo Scarpati Flores",     resultadoA: "RET", resultadoB: "P20" },
            { pilotoA: "Templario VCR",              pilotoB: "Nicolo Civera",               resultadoA: "P12", resultadoB: "RET" },
            { pilotoA: "Christian Horny",            pilotoB: "Alejandro Alonso",            resultadoA: "RET", resultadoB: "RET" },
            { pilotoA: "Markel Diaz",                pilotoB: "Giacomina Leclerc",           resultadoA: "RET", resultadoB: "P23" }
        ]
    },
    9: {
        fecha: "25 de Marzo",
        partidos: [
            { pilotoA: "Nicolo Civera",              pilotoB: "Frank White",                 resultadoA: "RET", resultadoB: "P8" },
            { pilotoA: "Cristóbal Farias",           pilotoB: "Ruben Medina",                resultadoA: "P21", resultadoB: "RET" },
            { pilotoA: "Eduardo Calvo",              pilotoB: "Johans Gormaz",               resultadoA: "P4", resultadoB: "DSQ", dsq: true },
            { pilotoA: "Alejandro Alonso",           pilotoB: "Cristian Ezpeleta",           resultadoA: "P17", resultadoB: "P4" },
            { pilotoA: "Samuel Guevara Salazar",     pilotoB: "Leoo Castro",                 resultadoA: "P21", resultadoB: "P3" },
            { pilotoA: "Giacomina Leclerc",          pilotoB: "Antonio Pinillos",            resultadoA: "P18", resultadoB: "P5" },
            { pilotoA: "Eduardo Scarpati Flores",    pilotoB: "Valdi CT",                    resultadoA: "P23", resultadoB: "P1" },
            { pilotoA: "Sergio Solano",              pilotoB: "Blake Ezeh",                  resultadoA: "P13", resultadoB: "P15" },
            { pilotoA: "Templario VCR",              pilotoB: "Marc cr Rayo",                resultadoA: "P6", resultadoB: "P9" },
            { pilotoA: "Marco Rodriguez",            pilotoB: "Christian Horny",             resultadoA: "P12", resultadoB: "P26" },
            { pilotoA: "Alexis Iceman",              pilotoB: "Alvaro Redondo",              resultadoA: "P2", resultadoB: "P10" },
            { pilotoA: "Vasvo Lao",                  pilotoB: "Markel Diaz",                 resultadoA: "P27", resultadoB: "RET" },
            { pilotoA: "André Prov",                 pilotoB: "Francisco Martínez",          resultadoA: "P8", resultadoB: "P18" },
            { pilotoA: "Clais Racing",               pilotoB: "Nelson David Quiroz",         resultadoA: "P25", resultadoB: "P11" }
        ]
    },
    10: {
        fecha: "27 de Marzo",
        partidos: [
            { pilotoA: "Leoo Castro",                pilotoB: "Frank White",                 resultadoA: "P1", resultadoB: "P6" },
            { pilotoA: "André Prov",                 pilotoB: "Cristóbal Farias",            resultadoA: "P28", resultadoB: "P15" },
            { pilotoA: "Cristian Ezpeleta",          pilotoB: "Nicolo Civera",               resultadoA: "P13", resultadoB: "RET" },
            { pilotoA: "Valdi CT",                   pilotoB: "Blake Ezeh",                  resultadoA: "P3", resultadoB: "P17" },
            { pilotoA: "Marc cr Rayo",               pilotoB: "Clais Racing",                resultadoA: "P16", resultadoB: "RET" },
            { pilotoA: "Sergio Solano",              pilotoB: "Markel Diaz",                 resultadoA: "P5", resultadoB: "RET" },
            { pilotoA: "Vasvo Lao",                  pilotoB: "Eduardo Scarpati Flores",     resultadoA: "P7", resultadoB: "P20" },
            { pilotoA: "Alexis Iceman",              pilotoB: "Ruben Medina",                resultadoA: "P4", resultadoB: "RET" },
            { pilotoA: "Johans Gormaz",              pilotoB: "Alvaro Redondo",              resultadoA: "DSQ", resultadoB: "P12", dsq: true },
            { pilotoA: "Antonio Pinillos",           pilotoB: "Nelson David Quiroz",         resultadoA: "P8", resultadoB: "P10" },
            { pilotoA: "Francisco Martínez",         pilotoB: "Samuel Guevara Salazar",      resultadoA: "P19", resultadoB: "P11" },
            { pilotoA: "Marco Rodriguez",            pilotoB: "Eduardo Calvo",               resultadoA: "P9", resultadoB: "P2" },
            { pilotoA: "Templario VCR",              pilotoB: "Alejandro Alonso",            resultadoA: "P25", resultadoB: "P14" },
            { pilotoA: "Christian Horny",            pilotoB: "Giacomina Leclerc",           resultadoA: "P21", resultadoB: "P24" }
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
            { pilotoA: "Cristian Ezpeleta",      pilotoB: "Nelson David Quiroz",        resultadoA: "P3",  resultadoB: "P10" },
            { pilotoA: "Leoo Castro",            pilotoB: "Frank White",                resultadoA: "P1",  resultadoB: "P8" },
            { pilotoA: "Valdi CT",               pilotoB: "Samuel Guevara Salazar",     resultadoA: "P5",  resultadoB: "P19" },
            { pilotoA: "Sergio Solano",          pilotoB: "Ruben Medina",               resultadoA: "P7",  resultadoB: "RET" },
            { pilotoA: "Vasvo Lao",              pilotoB: "Alvaro Redondo",             resultadoA: "P4",  resultadoB: "P11" },
            { pilotoA: "Alexis Iceman",          pilotoB: "Antonio Pinillos",           resultadoA: "P9",  resultadoB: "P12" },
            { pilotoA: "André Prov",             pilotoB: "Marc cr Rayo",               resultadoA: "P6",  resultadoB: "P13" },
            { pilotoA: "Eduardo Calvo",          pilotoB: "Marco Rodriguez",            resultadoA: "P2",  resultadoB: "P15" }
        ]
    },
    cuartos: {
        nombre: "Cuartos de Final",
        fecha: "1 de Abril",
        partidos: [
            { pilotoA: "Leoo Castro",            pilotoB: "André Prov",                 resultadoA: "P1", resultadoB: "P5" },
            { pilotoA: "Eduardo Calvo",          pilotoB: "Alexis Iceman",              resultadoA: "P2", resultadoB: "P31" },
            { pilotoA: "Cristian Ezpeleta",      pilotoB: "Vasvo Lao",                  resultadoA: "P10", resultadoB: "P3" },
            { pilotoA: "Valdi CT",               pilotoB: "Sergio Solano",              resultadoA: "P6", resultadoB: "P8" }
        ]
    },
    semis: {
        nombre: "Semifinales",
        fecha: "3 de Abril",
        partidos: [
            { pilotoA: "Leoo Castro",            pilotoB: "Eduardo Calvo", resultadoA: "P1", resultadoB: "P10" },
            { pilotoA: "Vasvo Lao", pilotoB: "Valdi CT", resultadoA: "P4", resultadoB: "P20" }
        ]
    },
    final: {
        nombre: "Gran Final",
        fecha: "6 de Abril",
        partidos: [
            { pilotoA: "Leoo Castro", pilotoB: "Vasvo Lao", resultadoA: "", resultadoB: "" }
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

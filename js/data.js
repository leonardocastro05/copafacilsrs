// ========================================
// SPANISH RACING SERIES - DATA
// Temporada 37 — Actualizado tras Jornada 5
// ========================================

const seasonInfo = {
    number: 37,
    title: 'Temporada 37',
    subtitle: 'Parrilla oficial (32 managers)'
};

// ----------------------------------------
// PILOTOS — Clasificación actualizada tras J5
// Puntos = 3 puntos por victoria en duelo
// ----------------------------------------
const pilotosT37 = [
    { pos:  1, nombre: 'Romus Toras', 		equipo: '50 Rizia Royal Racing', 		puntos: 15 },
    { pos:  2, nombre: 'Leoo Ferreira', 		equipo: '07 CRT Competition', 		puntos: 15 },
    { pos:  3, nombre: 'Vasvo Lao', 		equipo: 'Subaru F1 Team', 		puntos: 15 },
    { pos:  4, nombre: 'Sergio Solano', 		equipo: '13 CRT Competition', 		puntos: 15 },
    { pos:  5, nombre: 'Valdi CT', 		equipo: '77 Campos Racing F1', 		puntos: 15 },
    { pos:  6, nombre: 'André Prov', 		equipo: 'Tortuga', 		puntos: 15 },
    { pos:  7, nombre: 'Juan Garcia', 		equipo: 'Ferrari F1 Team', 		puntos: 12 },
    { pos:  8, nombre: 'Freya Anafi', 		equipo: 'Subaru Pirelli SRS Team', 		puntos: 12 },
    { pos:  9, nombre: 'Thiago Campos', 		equipo: 'Mercedes', 		puntos: 12 },
    { pos: 10, nombre: 'Tony Crowther', 		equipo: '44 Patria Italia', 		puntos: 12 },
    { pos: 11, nombre: 'Francisco Martínez', 		equipo: 'Renfe Cercanías RT', 		puntos: 12 },
    { pos: 12, nombre: 'Cristian Ezpeleta', 		equipo: '99 Campos Racing F1', 		puntos: 12 },
    { pos: 13, nombre: 'Eduardo Calvo', 		equipo: '72 CTC VCR Foxtrot', 		puntos: 9 },
    { pos: 14, nombre: 'Antonio Pinillos', 		equipo: 'Red Bull Pinkustercia F1 Team', 		puntos: 9 },
    { pos: 15, nombre: 'Marc cr Rayo', 		equipo: 'Rayito Team', 		puntos: 6 },
    { pos: 16, nombre: 'Stefano Cann', 		equipo: 'Italica Siracusa', 		puntos: 6 },
    { pos: 17, nombre: 'Alejandro Alonso', 		equipo: '3 Zetta Racing', 		puntos: 6 },
    { pos: 18, nombre: 'Roma II', 		equipo: '69 CRT Competition', 		puntos: 6 },
    { pos: 19, nombre: 'Alexis Iceman', 		equipo: '00 CRT Competition', 		puntos: 6 },
    { pos: 20, nombre: 'Pablo Mañas', 		equipo: 'Aston Martin F1 Team Mañas', 		puntos: 6 },
    { pos: 21, nombre: 'Giacomina Leclerc', 		equipo: 'Patria Italia', 		puntos: 6 },
    { pos: 22, nombre: 'Julio Maidana', 		equipo: '18 BMW Team', 		puntos: 3 },
    { pos: 23, nombre: 'Mauro Reyes Hernández', 		equipo: '26 Zetta Racing', 		puntos: 3 },
    { pos: 24, nombre: 'Álvaro Redondo', 		equipo: '36 CTC VCR FTSE', 		puntos: 3 },
    { pos: 25, nombre: 'Christian Horny', 		equipo: '15 Zetta Racing', 		puntos: 3 },
    { pos: 26, nombre: 'Marco Rodríguez', 		equipo: '94 Pagani Renault', 		puntos: 3 },
    { pos: 27, nombre: 'Blake Ezeh', 		equipo: 'Ferrari HoloLive Racing Team', 		puntos: 3 },
    { pos: 28, nombre: 'Templario VCR', 		equipo: 'Hispania Racing Team', 		puntos: 0 },
    { pos: 29, nombre: 'Cristóbal Farías Galleguillos', 		equipo: '18 Zetta Racing', 		puntos: 0 },
    { pos: 30, nombre: 'Rui Acacio', 		equipo: 'Flamengüam', 		puntos: 0 },
    { pos: 31, nombre: 'Sebas Srg Ramírez', 		equipo: '11 Ferrari McDonald\'s', 		puntos: 0 },
    { pos: 32, nombre: 'Peppe Vedda', 		equipo: 'Iron Racing Team', 		puntos: 0 }
];

const supercopaT37 = [
    {
        label: 'Campeon Mundial',
        nombre: 'Por definir (En espera)',
        equipo: 'TBD',
        icon: 'fa-globe-europe',
        color: '#2ec5ff'
    },
    {
        label: 'Campeón de Copa',
        nombre: 'Por definir (En espera)',
        equipo: 'TBD',
        icon: 'fa-trophy',
        color: '#ffd166'
    },
    {
        label: 'Campeon de Qualy',
        nombre: 'Sergio Ruiz',
        equipo: 'Ferrari',
        icon: 'fa-stopwatch',
        color: '#57f2c2'
    },
    {
        label: 'Campeon Supercopa',
        nombre: 'Cristian Ezpeleta',
        equipo: 'Campos',
        icon: 'fa-shield-halved',
        color: '#ff6f61'
    }
];

const jornadasT37 = [
    {
        nombre: 'Jornada 1',
        fecha: 'Lunes 11 de mayo',
        estado: 'Completada',
        // Ganador determinado por posición en carrera (menor pos = ganador del duelo)
        // Formato: "🏆 GANADOR vs perdedor (PX vs PY)"
        enfrentamientos: [
            '🏆 Valdi CT vs Stefano Cann (P8 vs P22)',
            '🏆 André Prov vs Julio Maidana (P6 vs P29 DNF)',
            '🏆 Leoo Ferreira vs Marc cr Rayo (P2 vs P21)',
            '🏆 Romus Toras vs Eduardo Calvo (P1 vs P9)',
            '🏆 Cristian Ezpeleta vs Pablo Mañas (P13 vs P14)',
            '🏆 Sergio Solano vs Mauro Reyes Hernández (P5 vs P27)',
            '🏆 Vasvo Lao vs Álvaro Redondo (P3 vs P17)',
            '🏆 Marco Rodríguez vs Sebas Srg Ramírez (P16 vs P28 DNF)',
            '🏆 Alexis Iceman vs Giacomina Leclerc (P11 vs DSQ)',
            '🏆 Juan Garcia vs Alejandro Alonso (P7 vs P18)',
            '🏆 Tony Crowther vs Christian Horny (P23 vs P25)',
            '🏆 Antonio Pinillos vs Thiago Campos (P10 vs P12)',
            '🏆 Freya Anafi vs Rui Acacio (P19 vs +2 vueltas)',
            '🏆 Blake Ezeh vs Cristóbal Farías Galleguillos (P15 vs P26)',
            '🏆 Francisco Martínez vs Peppe Vedda (P24 vs P30 DNF)',
            '🏆 Roma II vs Templario VCR (P4 vs P20)'
        ]
    },
    {
        nombre: 'Jornada 2',
        fecha: 'Miercoles 13 de mayo',
        estado: 'Completada',
        enfrentamientos: [
            '🏆 Valdi CT vs Mauro Reyes Hernández (P8 vs P30)',
            '🏆 André Prov vs Tony Crowther (P3 vs P21)',
            '🏆 Leoo Ferreira vs Templario VCR (P2 vs P20)',
            '🏆 Eduardo Calvo vs Antonio Pinillos (P7 vs P16)',
            '🏆 Cristian Ezpeleta vs Rui Acacio (P9 vs P28)',
            '🏆 Sergio Solano vs Blake Ezeh (P6 vs P27)',
            '🏆 Vasvo Lao vs Pablo Mañas (P4 vs P24)',
            '🏆 Freya Anafi vs Marco Rodríguez (P13 vs P25)',
            '🏆 Thiago Campos vs Alexis Iceman (P10 vs P11)',
            '🏆 Juan Garcia vs Francisco Martínez (P5 vs P26)',
            '🏆 Álvaro Redondo vs Sebas Srg Ramírez (P15 vs P29)',
            '🏆 Marc cr Rayo vs Julio Maidana (P18 vs P19)',
            '🏆 Alejandro Alonso vs Giacomina Leclerc (P17 vs DSQ)',
            '🏆 Stefano Cann vs Roma II (P12 vs P14)',
            '🏆 Christian Horny vs Cristóbal Farías Galleguillos (P22 vs P23)',
            '🏆 Romus Toras vs Peppe Vedda (P1 vs DNF)'
        ]
    },
    {
        nombre: 'Jornada 3',
        fecha: 'Viernes 15 de mayo',
        estado: 'Completada',
        enfrentamientos: [
            '🏆 Valdi CT vs Roma II (P1 vs P10)',
            '🏆 André Prov vs Christian Horny (P7 vs P26)',
            '🏆 Leoo Ferreira vs Alexis Iceman (P4 vs P11)',
            '🏆 Eduardo Calvo vs Cristóbal Farías Galleguillos (P15 vs P25)',
            '🏆 Marc cr Rayo vs Cristian Ezpeleta (P14 vs P19)',
            '🏆 Sergio Solano vs Alejandro Alonso (P8 vs P21)',
            '🏆 Vasvo Lao vs Stefano Cann (P3 vs P9)',
            '🏆 Tony Crowther vs Marco Rodríguez (P12 vs P29)',
            '🏆 Juan Garcia vs Sebas Srg Ramírez (P5 vs P28)',
            '🏆 Romus Toras vs Álvaro Redondo (P6 vs P22)',
            '🏆 Antonio Pinillos vs Peppe Vedda (P16 vs P20)',
            '🏆 Freya Anafi vs Pablo Mañas (P31 vs P32)',
            '🏆 Julio Maidana vs Giacomina Leclerc (P13 vs P17)',
            '🏆 Thiago Campos vs Blake Ezeh (P2 vs P23)',
            '🏆 Francisco Martínez vs Rui Acacio (P24 vs P30)',
            '🏆 Mauro Reyes Hernández vs Templario VCR (P18 vs P27)'
        ]
    },
    {
        nombre: 'Jornada 4',
        fecha: 'Lunes 18 de mayo',
        estado: 'Completada',
        enfrentamientos: [
            '🏆 Valdi CT vs Álvaro Redondo (P4 vs P17)',
            '🏆 André Prov vs Roma II (P9 vs P11)',
            '🏆 Leoo Ferreira vs Rui Acacio (P1 vs P27)',
            '🏆 Eduardo Calvo vs Blake Ezeh (P8 vs P26)',
            '🏆 Cristian Ezpeleta vs Templario VCR (P12 vs P24)',
            '🏆 Sergio Solano vs Alexis Iceman (P3 vs P10)',
            '🏆 Vasvo Lao vs Peppe Vedda (P2 vs P16)',
            '🏆 Francisco Martínez vs Marco Rodríguez (P22 vs P30 DNF)',
            '🏆 Juan Garcia vs Julio Maidana (P29 vs P32 DNF)',
            '🏆 Tony Crowther vs Cristóbal Farías Galleguillos (P21 vs P25)',
            '🏆 Pablo Mañas vs Antonio Pinillos (P13 vs P15)',
            '🏆 Romus Toras vs Marc cr Rayo (P6 vs P23)',
            '🏆 Thiago Campos vs Freya Anafi (P5 vs P28)',
            '🏆 Giacomina Leclerc vs Mauro Reyes Hernández (P7 vs P18)',
            '🏆 Stefano Cann vs Sebas Srg Ramírez (P20 vs P31)',
            '🏆 Alejandro Alonso vs Christian Horny (P14 vs P19)'
        ]
    },
    {
        nombre: 'Jornada 5',
        fecha: 'Miercoles 20 de mayo',
        estado: 'Completada',
        enfrentamientos: [
            '🏆 Valdi CT vs Alejandro Alonso (P7 vs P22)',
            '🏆 André Prov vs Marc cr Rayo (P6 vs P25)',
            '🏆 Leoo Ferreira vs Blake Ezeh (P5 vs P28)',
            '🏆 Thiago Campos vs Eduardo Calvo (P4 vs P10)',
            '🏆 Cristian Ezpeleta vs Juan Garcia (P11 vs P17)',
            '🏆 Sergio Solano vs Julio Maidana (P15 vs P32 DNF)',
            '🏆 Vasvo Lao vs Christian Horny (P1 vs P19)',
            '🏆 Roma II vs Marco Rodríguez (P9 vs P31)',
            '🏆 Alexis Iceman vs Cristóbal Farías Galleguillos (P8 vs P26)',
            '🏆 Tony Crowther vs Templario VCR (P16 vs P30 DNF)',
            '🏆 Francisco Martínez vs Álvaro Redondo (P18 vs P21)',
            '🏆 Antonio Pinillos vs Rui Acacio (P14 vs P27)',
            '🏆 Freya Anafi vs Peppe Vedda (P23 vs P24)',
            '🏆 Giacomina Leclerc vs Sebas Srg Ramírez (P2 vs P29)',
            '🏆 Romus Toras vs Stefano Cann (P3 vs P13)',
            '🏆 Pablo Mañas vs Mauro Reyes Hernández (P12 vs P20)'
        ]
    },
    {
        nombre: 'Jornada 6',
        fecha: 'Viernes 22 de mayo',
        estado: 'Pendiente',
        enfrentamientos: [
            'Valdi CT vs Giacomina Leclerc',
            'André Prov vs Vasvo Lao',
            'Leoo Ferreira vs Peppe Vedda',
            'Eduardo Calvo vs Tony Crowther',
            'Cristian Ezpeleta vs Thiago Campos',
            'Sergio Solano vs Antonio Pinillos',
            'Marco Rodríguez vs Mauro Reyes Hernández',
            'Alexis Iceman vs Christian Horny',
            'Juan Garcia vs Roma II',
            'Álvaro Redondo vs Blake Ezeh',
            'Marc cr Rayo vs Sebas Srg Ramírez',
            'Freya Anafi vs Templario VCR',
            'Stefano Cann vs Julio Maidana',
            'Francisco Martínez vs Cristóbal Farías Galleguillos',
            'Romus Toras vs Pablo Mañas',
            'Alejandro Alonso vs Rui Acacio'
        ]
    },
    {
        nombre: 'Jornada 7',
        fecha: 'Lunes 25 de mayo',
        estado: 'Pendiente',
        enfrentamientos: [
            'Valdi CT vs Sebas Srg Ramírez',
            'André Prov vs Templario VCR',
            'Leoo Ferreira vs Tony Crowther',
            'Eduardo Calvo vs Pablo Mañas',
            'Cristian Ezpeleta vs Giacomina Leclerc',
            'Sergio Solano vs Francisco Martínez',
            'Vasvo Lao vs Cristóbal Farías Galleguillos',
            'Marco Rodríguez vs Antonio Pinillos',
            'Alexis Iceman vs Rui Acacio',
            'Juan Garcia vs Freya Anafi',
            'Álvaro Redondo vs Roma II',
            'Marc cr Rayo vs Mauro Reyes Hernández',
            'Blake Ezeh vs Peppe Vedda',
            'Stefano Cann vs Alejandro Alonso',
            'Christian Horny vs Julio Maidana',
            'Romus Toras vs Thiago Campos'
        ]
    },
    {
        nombre: 'Jornada 8',
        fecha: 'Miercoles 27 de mayo',
        estado: 'Pendiente',
        enfrentamientos: [
            'Valdi CT vs Peppe Vedda',
            'André Prov vs Alexis Iceman',
            'Leoo Ferreira vs Christian Horny',
            'Eduardo Calvo vs Freya Anafi',
            'Cristian Ezpeleta vs Julio Maidana',
            'Sergio Solano vs Pablo Mañas',
            'Vasvo Lao vs Juan Garcia',
            'Marco Rodríguez vs Blake Ezeh',
            'Tony Crowther vs Rui Acacio',
            'Álvaro Redondo vs Alejandro Alonso',
            'Antonio Pinillos vs Cristóbal Farías Galleguillos',
            'Marc cr Rayo vs Francisco Martínez',
            'Giacomina Leclerc vs Roma II',
            'Stefano Cann vs Mauro Reyes Hernández',
            'Romus Toras vs Templario VCR',
            'Sebas Srg Ramírez vs Thiago Campos'
        ]
    },
    {
        nombre: 'Jornada 9',
        fecha: 'Viernes 29 de mayo',
        estado: 'Pendiente',
        enfrentamientos: [
            'Valdi CT vs Romus Toras',
            'André Prov vs Pablo Mañas',
            'Leoo Ferreira vs Antonio Pinillos',
            'Eduardo Calvo vs Marco Rodríguez',
            'Cristian Ezpeleta vs Stefano Cann',
            'Sergio Solano vs Tony Crowther',
            'Vasvo Lao vs Rui Acacio',
            'Alexis Iceman vs Templario VCR',
            'Juan Garcia vs Blake Ezeh',
            'Álvaro Redondo vs Julio Maidana',
            'Marc cr Rayo vs Roma II',
            'Freya Anafi vs Cristóbal Farías Galleguillos',
            'Giacomina Leclerc vs Francisco Martínez',
            'Christian Horny vs Sebas Srg Ramírez',
            'Alejandro Alonso vs Thiago Campos',
            'Peppe Vedda vs Mauro Reyes Hernández'
        ]
    },
    {
        nombre: 'Jornada 10',
        fecha: 'Lunes 1 de junio',
        estado: 'Pendiente',
        enfrentamientos: [
            'Valdi CT vs Marco Rodríguez',
            'André Prov vs Freya Anafi',
            'Leoo Ferreira vs Thiago Campos',
            'Eduardo Calvo vs Francisco Martínez',
            'Cristian Ezpeleta vs Peppe Vedda',
            'Sergio Solano vs Roma II',
            'Vasvo Lao vs Giacomina Leclerc',
            'Alexis Iceman vs Marc cr Rayo',
            'Juan Garcia vs Romus Toras',
            'Tony Crowther vs Pablo Mañas',
            'Álvaro Redondo vs Mauro Reyes Hernández',
            'Antonio Pinillos vs Stefano Cann',
            'Blake Ezeh vs Templario VCR',
            'Christian Horny vs Sebas Srg Ramírez',
            'Alejandro Alonso vs Cristóbal Farías Galleguillos',
            'Julio Maidana vs Rui Acacio'
        ]
    }
];
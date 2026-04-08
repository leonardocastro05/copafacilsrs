// ========================================
// SPANISH RACING SERIES - DATA
// Temporada 36
// ========================================

const seasonInfo = {
    number: 36,
    title: 'Temporada 36',
    subtitle: 'Parrilla cerrada (32 managers)'
};

const pilotosT36 = [
    { pos: 1, nombre: 'Leoo Castro', equipo: '07 CRT Competition' },
    { pos: 2, nombre: 'Eduardo Calvo', equipo: 'Foxtrot GP' },
    { pos: 3, nombre: 'Sergio Solano', equipo: 'Furia Andalusi' },
    { pos: 4, nombre: 'Alexis Iceman', equipo: '00 CRT Competition' },
    { pos: 5, nombre: 'Vasvo Lao', equipo: 'Subaru F1 Team' },
    { pos: 6, nombre: 'Andre Prov', equipo: 'Tortuga' },
    { pos: 7, nombre: 'Cristian Ezpeleta', equipo: 'Campos Racing F1' },
    { pos: 8, nombre: 'Valdi CT', equipo: 'El Nano' },
    { pos: 9, nombre: 'Alvaro Redondo', equipo: '72 Akina SpeedStars Fujiwara' },
    { pos: 10, nombre: 'Antonio Pinillos', equipo: 'Red Bull Pinkustercia F1 Team' },
    { pos: 11, nombre: 'Nelson David Quiroz', equipo: '9 ART Grand Prix' },
    { pos: 12, nombre: 'Marco Rodriguez', equipo: '94 Pagani Renault' },
    { pos: 13, nombre: 'Marc cr Rayo', equipo: 'Rayito Team' },
    { pos: 14, nombre: 'Alejandro Alonso', equipo: 'BMW F1 Team' },
    { pos: 15, nombre: 'Templario VCR', equipo: 'Hispania Racing Team' },
    { pos: 16, nombre: 'Blake Ezeh', equipo: 'Deco27 HoloLive Racing Team' },
    { pos: 17, nombre: 'Francisco Martinez', equipo: 'Renfe Cercanias RT' },
    { pos: 18, nombre: 'Cristobal Farias Galleguillos', equipo: '18 ZETTA Racing' },
    { pos: 19, nombre: 'Eduardo Scarpati Flores', equipo: 'ESFX Red Bull Ferrari' },
    { pos: 20, nombre: 'Christian Horny', equipo: '15 Fenix Racing Team' },
    { pos: 21, nombre: 'Pedro Vedda', equipo: 'Racing Team' },
    { pos: 22, nombre: 'Tony Crowther', equipo: 'Leyton House March' },
    { pos: 23, nombre: 'Renyu Asafi', equipo: 'Subaru Pirelli SRS Team' },
    { pos: 24, nombre: 'Giacomina Leclerc', equipo: 'jacqui09sikes615978' },
    { pos: 25, nombre: 'Juan Garcia', equipo: '04 Pagani Renault' },
    { pos: 26, nombre: 'Juan Ignacio Rodriguez Ansaldi', equipo: '74 Subaru Pirelli SRS Team' },
    { pos: 27, nombre: 'Nicolo Civera', equipo: 'Olympic Torino Racing' },
    { pos: 28, nombre: 'Stefano Cano', equipo: 'Italica Saucesa' },
    { pos: 29, nombre: 'Luis Reynoso', equipo: '42 Alpine F1 Team' },
    { pos: 30, nombre: 'Mauro Reyes Hernandez', equipo: '76 Zetta Racing' },
    { pos: 31, nombre: 'Roma Astur', equipo: 'Roma Astur' },
    { pos: 32, nombre: 'SERGIO RUIZ FURIOUS', equipo: '88 Honda Marlboro' }
];

const supercopaT36 = [
    {
        label: 'Campeon Mundial',
        nombre: 'Leoo Castro',
        equipo: '07 CRT Competition',
        icon: 'fa-globe-europe',
        color: '#2ec5ff'
    },
    {
        label: 'Subcampeón de Copa',
        nombre: 'Vasvo Lao',
        equipo: 'Subaru F1 Team',
        icon: 'fa-trophy',
        color: '#ffd166'
    },
    {
        label: 'Campeon de Qualy',
        nombre: 'Francisco Martinez',
        equipo: 'Renfe Cercanias RT',
        icon: 'fa-stopwatch',
        color: '#57f2c2'
    },
    {
        label: 'Campeon Supercopa',
        nombre: 'Cristian Ezpeleta',
        equipo: 'Campos Racing F1',
        icon: 'fa-shield-halved',
        color: '#ff6f61'
    }
];

const jornadasT36 = [
    {
        nombre: 'Jornada 1',
        fecha: 'Miercoles 8 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Alvaro Redondo vs Christian Horny',
            'Pedro Vedda vs Marco Rodriguez',
            'Nelson David Quiroz vs Vasvo Lao',
            'Cristobal Farias Galleguillos vs Roma Astur',
            'Stefano Cano vs Eduardo Calvo',
            'Antonio Pinillos vs Juan Ignacio Rodriguez Ansaldi',
            'Luis Reynoso vs Alexis Iceman',
            'Francisco Martinez vs Sergio Solano',
            'Nicolo Civera vs Cristian Ezpeleta',
            'Blake Ezeh vs Alejandro Alonso',
            'Templario VCR vs SERGIO RUIZ FURIOUS',
            'Andre Prov vs Leoo Castro',
            'Valdi CT vs Giacomina Leclerc',
            'Mauro Reyes Hernandez vs Juan Garcia',
            'Eduardo Scarpati Flores vs Tony Crowther',
            'Renyu Asafi vs Marc cr Rayo'
        ]
    },
    {
        nombre: 'Jornada 2',
        fecha: 'Viernes 10 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Andre Prov vs Luis Reynoso',
            'Alejandro Alonso vs Francisco Martinez',
            'Pedro Vedda vs Roma Astur',
            'Cristian Ezpeleta vs SERGIO RUIZ FURIOUS',
            'Mauro Reyes Hernandez vs Alvaro Redondo',
            'Christian Horny vs Renyu Asafi',
            'Alexis Iceman vs Leoo Castro',
            'Templario VCR vs Vasvo Lao',
            'Marc cr Rayo vs Juan Garcia',
            'Cristobal Farias Galleguillos vs Eduardo Scarpati Flores',
            'Marco Rodriguez vs Blake Ezeh',
            'Valdi CT vs Eduardo Calvo',
            'Tony Crowther vs Nicolo Civera',
            'Giacomina Leclerc vs Sergio Solano',
            'Juan Ignacio Rodriguez Ansaldi vs Nelson David Quiroz',
            'Stefano Cano vs Antonio Pinillos'
        ]
    },
    {
        nombre: 'Jornada 3',
        fecha: 'Lunes 13 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'SERGIO RUIZ FURIOUS vs Christian Horny',
            'Leoo Castro vs Juan Ignacio Rodriguez Ansaldi',
            'Cristobal Farias Galleguillos vs Alvaro Redondo',
            'Marco Rodriguez vs Eduardo Scarpati Flores',
            'Cristian Ezpeleta vs Templario VCR',
            'Andre Prov vs Antonio Pinillos',
            'Juan Garcia vs Mauro Reyes Hernandez',
            'Pedro Vedda vs Alexis Iceman',
            'Luis Reynoso vs Valdi CT',
            'Alejandro Alonso vs Renyu Asafi',
            'Roma Astur vs Stefano Cano',
            'Eduardo Calvo vs Blake Ezeh',
            'Giacomina Leclerc vs Nelson David Quiroz',
            'Sergio Solano vs Vasvo Lao',
            'Nicolo Civera vs Francisco Martinez',
            'Marc cr Rayo vs Tony Crowther'
        ]
    },
    {
        nombre: 'Jornada 4',
        fecha: 'Miercoles 15 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Antonio Pinillos vs Christian Horny',
            'Juan Ignacio Rodriguez Ansaldi vs Andre Prov',
            'Nicolo Civera vs Giacomina Leclerc',
            'Roma Astur vs Pedro Vedda',
            'Tony Crowther vs Juan Garcia',
            'Alejandro Alonso vs Alvaro Redondo',
            'Nelson David Quiroz vs Vasvo Lao',
            'Luis Reynoso vs Sergio Solano',
            'Francisco Martinez vs Eduardo Calvo',
            'Mauro Reyes Hernandez vs Cristian Ezpeleta',
            'SERGIO RUIZ FURIOUS vs Stefano Cano',
            'Alexis Iceman vs Templario VCR',
            'Leoo Castro vs Valdi CT',
            'Marc cr Rayo vs Marco Rodriguez',
            'Eduardo Scarpati Flores vs Renyu Asafi',
            'Cristobal Farias Galleguillos vs Blake Ezeh'
        ]
    },
    {
        nombre: 'Jornada 5',
        fecha: 'Viernes 17 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Vasvo Lao vs Blake Ezeh',
            'Francisco Martinez vs Marco Rodriguez',
            'Sergio Solano vs Antonio Pinillos',
            'Stefano Cano vs Alvaro Redondo',
            'Alexis Iceman vs Pedro Vedda',
            'Cristian Ezpeleta vs Juan Ignacio Rodriguez Ansaldi',
            'Christian Horny vs Tony Crowther',
            'Andre Prov vs Roma Astur',
            'Nicolo Civera vs Alejandro Alonso',
            'SERGIO RUIZ FURIOUS vs Juan Garcia',
            'Giacomina Leclerc vs Eduardo Calvo',
            'Marc cr Rayo vs Leoo Castro',
            'Nelson David Quiroz vs Templario VCR',
            'Cristobal Farias Galleguillos vs Eduardo Scarpati Flores',
            'Renyu Asafi vs Valdi CT',
            'Mauro Reyes Hernandez vs Luis Reynoso'
        ]
    },
    {
        nombre: 'Jornada 6',
        fecha: 'Lunes 20 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Mauro Reyes Hernandez vs Sergio Solano',
            'Valdi CT vs Alexis Iceman',
            'Francisco Martinez vs Templario VCR',
            'Giacomina Leclerc vs Marc cr Rayo',
            'Renyu Asafi vs SERGIO RUIZ FURIOUS',
            'Andre Prov vs Christian Horny',
            'Eduardo Scarpati Flores vs Eduardo Calvo',
            'Juan Ignacio Rodriguez Ansaldi vs Alvaro Redondo',
            'Stefano Cano vs Blake Ezeh',
            'Tony Crowther vs Nelson David Quiroz',
            'Alejandro Alonso vs Nicolo Civera',
            'Pedro Vedda vs Juan Garcia',
            'Marco Rodriguez vs Luis Reynoso',
            'Vasvo Lao vs Roma Astur',
            'Leoo Castro vs Cristobal Farias Galleguillos',
            'Cristian Ezpeleta vs Antonio Pinillos'
        ]
    },
    {
        nombre: 'Jornada 7',
        fecha: 'Miercoles 22 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Christian Horny vs Francisco Martinez',
            'Tony Crowther vs Eduardo Scarpati Flores',
            'Juan Garcia vs Cristian Ezpeleta',
            'Alejandro Alonso vs Roma Astur',
            'Eduardo Calvo vs Alexis Iceman',
            'Giacomina Leclerc vs Sergio Solano',
            'Stefano Cano vs Templario VCR',
            'Mauro Reyes Hernandez vs Marco Rodriguez',
            'Nicolo Civera vs Vasvo Lao',
            'Pedro Vedda vs SERGIO RUIZ FURIOUS',
            'Andre Prov vs Luis Reynoso',
            'Nelson David Quiroz vs Marc cr Rayo',
            'Leoo Castro vs Juan Ignacio Rodriguez Ansaldi',
            'Antonio Pinillos vs Valdi CT',
            'Renyu Asafi vs Cristobal Farias Galleguillos',
            'Alvaro Redondo vs Blake Ezeh'
        ]
    },
    {
        nombre: 'Jornada 8',
        fecha: 'Viernes 24 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Sergio Solano vs Juan Ignacio Rodriguez Ansaldi',
            'Leoo Castro vs Christian Horny',
            'Andre Prov vs Alexis Iceman',
            'Nicolo Civera vs Roma Astur',
            'Cristian Ezpeleta vs Francisco Martinez',
            'Luis Reynoso vs Eduardo Calvo',
            'Juan Garcia vs Vasvo Lao',
            'Nelson David Quiroz vs Valdi CT',
            'Templario VCR vs Eduardo Scarpati Flores',
            'SERGIO RUIZ FURIOUS vs Blake Ezeh',
            'Antonio Pinillos vs Stefano Cano',
            'Giacomina Leclerc vs Cristobal Farias Galleguillos',
            'Mauro Reyes Hernandez vs Alvaro Redondo',
            'Marco Rodriguez vs Marc cr Rayo',
            'Renyu Asafi vs Tony Crowther',
            'Pedro Vedda vs Alejandro Alonso'
        ]
    },
    {
        nombre: 'Jornada 9',
        fecha: 'Lunes 27 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Valdi CT vs SERGIO RUIZ FURIOUS',
            'Eduardo Scarpati Flores vs Giacomina Leclerc',
            'Blake Ezeh vs Tony Crowther',
            'Vasvo Lao vs Nelson David Quiroz',
            'Eduardo Calvo vs Francisco Martinez',
            'Andre Prov vs Roma Astur',
            'Juan Ignacio Rodriguez Ansaldi vs Sergio Solano',
            'Stefano Cano vs Templario VCR',
            'Juan Garcia vs Alexis Iceman',
            'Mauro Reyes Hernandez vs Antonio Pinillos',
            'Cristian Ezpeleta vs Marc cr Rayo',
            'Renyu Asafi vs Leoo Castro',
            'Alvaro Redondo vs Nicolo Civera',
            'Cristobal Farias Galleguillos vs Pedro Vedda',
            'Marco Rodriguez vs Luis Reynoso',
            'Christian Horny vs Alejandro Alonso'
        ]
    },
    {
        nombre: 'Jornada 10',
        fecha: 'Miercoles 29 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Cristobal Farias Galleguillos vs Valdi CT',
            'Andre Prov vs Roma Astur',
            'Alejandro Alonso vs Templario VCR',
            'Nicolo Civera vs Alvaro Redondo',
            'SERGIO RUIZ FURIOUS vs Tony Crowther',
            'Mauro Reyes Hernandez vs Sergio Solano',
            'Juan Ignacio Rodriguez Ansaldi vs Nelson David Quiroz',
            'Blake Ezeh vs Marco Rodriguez',
            'Cristian Ezpeleta vs Eduardo Scarpati Flores',
            'Luis Reynoso vs Leoo Castro',
            'Giacomina Leclerc vs Christian Horny',
            'Antonio Pinillos vs Juan Garcia',
            'Vasvo Lao vs Francisco Martinez',
            'Alexis Iceman vs Marc cr Rayo',
            'Pedro Vedda vs Renyu Asafi',
            'Stefano Cano vs Eduardo Calvo'
        ]
    }
];

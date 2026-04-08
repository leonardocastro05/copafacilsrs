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
    { pos: 3, nombre: 'Sergio Solano', equipo: '13 CRT Competition' },
    { pos: 4, nombre: 'Alexis Iceman', equipo: '00 CRT Competition' },
    { pos: 5, nombre: 'Vasvo Lao', equipo: 'Subaru F1 Team' },
    { pos: 6, nombre: 'Andre Prov', equipo: 'Tortuga' },
    { pos: 7, nombre: 'Cristian Ezpeleta', equipo: 'Campos Racing F1' },
    { pos: 8, nombre: 'Valdi CT', equipo: '77 Campos Racing F1' },
    { pos: 9, nombre: 'Alvaro Redondo', equipo: '36 CTC VCR FTSE' },
    { pos: 10, nombre: 'Antonio Pinillos', equipo: 'Red Bull Pinkustercia F1 Team' },
    { pos: 11, nombre: 'Nelson David Quiroz', equipo: '9 ART Grand Prix' },
    { pos: 12, nombre: 'Marco Rodriguez', equipo: '94 Pagani Renault' },
    { pos: 13, nombre: 'Marc cr Rayo', equipo: 'Rayito Team' },
    { pos: 14, nombre: 'Alejandro Alonso', equipo: 'BMW F1 Team' },
    { pos: 15, nombre: 'Templario VCR', equipo: 'Hispania Racing Team' },
    { pos: 16, nombre: 'Blake Ezeh', equipo: 'Deco27 HoloLive Racing Team' },
    { pos: 17, nombre: 'Francisco Martinez', equipo: 'Renfe Cercanias RT' },
    { pos: 18, nombre: 'Cristobal Farias', equipo: '18 Zetta Racing' },
    { pos: 19, nombre: 'Eduardo Scarpati', equipo: 'ESFX Red Bull Ferrari' },
    { pos: 20, nombre: 'Christian Horny', equipo: '15 Zetta Racing Team' },
    { pos: 21, nombre: 'Peppe Vedda', equipo: 'Iron Racing Team' },
    { pos: 22, nombre: 'Tony Crowther', equipo: 'Leyton House March' },
    { pos: 23, nombre: 'Freya Anafi', equipo: 'Subaru Pirelli SRS Team' },
    { pos: 24, nombre: 'Giacomina Leclerc', equipo: 'jacqui09sikes615978' },
    { pos: 25, nombre: 'Juan Garcia', equipo: 'Renault F1 Team' },
    { pos: 26, nombre: 'Juan Ignacio', equipo: '74 Subaru Pirelli SRS Team' },
    { pos: 27, nombre: 'Nicolo Civera', equipo: 'Olympic Torino Racing' },
    { pos: 28, nombre: 'Stefano Cann', equipo: 'Italica Siracusa' },
    { pos: 29, nombre: 'Luis Reynoso', equipo: '22 Alpine F1 Team' },
    { pos: 30, nombre: 'Mauro Reyes', equipo: '26 Zetta Racing' },
    { pos: 31, nombre: 'Roma Astur', equipo: '69 CRT Competition' },
    { pos: 32, nombre: 'SERGIO Ruiz Furious', equipo: '88 Honda Marlboro' }
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
            'Leoo Castro vs SERGIO Ruiz Furious',
            'Eduardo Calvo vs Roma Astur',
            'Sergio Solano vs Mauro Reyes',
            'Alexis Iceman vs Luis Reynoso',
            'Vasvo Lao vs Stefano Cann',
            'Andre Prov vs Nicolo Civera',
            'Cristian Ezpeleta vs Juan Ignacio',
            'Valdi CT vs Juan Garcia',
            'Alvaro Redondo vs Giacomina Leclerc',
            'Antonio Pinillos vs Freya Anafi',
            'Nelson David Quiroz vs Tony Crowther',
            'Marco Rodriguez vs Peppe Vedda',
            'Marc cr Rayo vs Christian Horny',
            'Alejandro Alonso vs Eduardo Scarpati',
            'Templario VCR vs Cristobal Farias',
            'Blake Ezeh vs Francisco Martinez'
        ]
    },
    {
        nombre: 'Jornada 2',
        fecha: 'Viernes 10 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Leoo Castro vs Roma Astur',
            'SERGIO Ruiz Furious vs Mauro Reyes',
            'Eduardo Calvo vs Luis Reynoso',
            'Sergio Solano vs Stefano Cann',
            'Alexis Iceman vs Nicolo Civera',
            'Vasvo Lao vs Juan Ignacio',
            'Andre Prov vs Juan Garcia',
            'Cristian Ezpeleta vs Giacomina Leclerc',
            'Valdi CT vs Freya Anafi',
            'Alvaro Redondo vs Tony Crowther',
            'Antonio Pinillos vs Peppe Vedda',
            'Nelson David Quiroz vs Christian Horny',
            'Marco Rodriguez vs Eduardo Scarpati',
            'Marc cr Rayo vs Cristobal Farias',
            'Alejandro Alonso vs Francisco Martinez',
            'Templario VCR vs Blake Ezeh'
        ]
    },
    {
        nombre: 'Jornada 3',
        fecha: 'Lunes 13 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Leoo Castro vs Mauro Reyes',
            'Roma Astur vs Luis Reynoso',
            'SERGIO Ruiz Furious vs Stefano Cann',
            'Eduardo Calvo vs Nicolo Civera',
            'Sergio Solano vs Juan Ignacio',
            'Alexis Iceman vs Juan Garcia',
            'Vasvo Lao vs Giacomina Leclerc',
            'Andre Prov vs Freya Anafi',
            'Cristian Ezpeleta vs Tony Crowther',
            'Valdi CT vs Peppe Vedda',
            'Alvaro Redondo vs Christian Horny',
            'Antonio Pinillos vs Eduardo Scarpati',
            'Nelson David Quiroz vs Cristobal Farias',
            'Marco Rodriguez vs Francisco Martinez',
            'Marc cr Rayo vs Blake Ezeh',
            'Alejandro Alonso vs Templario VCR'
        ]
    },
    {
        nombre: 'Jornada 4',
        fecha: 'Miercoles 15 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Leoo Castro vs Luis Reynoso',
            'Mauro Reyes vs Stefano Cann',
            'Roma Astur vs Nicolo Civera',
            'SERGIO Ruiz Furious vs Juan Ignacio',
            'Eduardo Calvo vs Juan Garcia',
            'Sergio Solano vs Giacomina Leclerc',
            'Alexis Iceman vs Freya Anafi',
            'Vasvo Lao vs Tony Crowther',
            'Andre Prov vs Peppe Vedda',
            'Cristian Ezpeleta vs Christian Horny',
            'Valdi CT vs Eduardo Scarpati',
            'Alvaro Redondo vs Cristobal Farias',
            'Antonio Pinillos vs Francisco Martinez',
            'Nelson David Quiroz vs Blake Ezeh',
            'Marco Rodriguez vs Templario VCR',
            'Marc cr Rayo vs Alejandro Alonso'
        ]
    },
    {
        nombre: 'Jornada 5',
        fecha: 'Viernes 17 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Leoo Castro vs Stefano Cann',
            'Luis Reynoso vs Nicolo Civera',
            'Mauro Reyes vs Juan Ignacio',
            'Roma Astur vs Juan Garcia',
            'SERGIO Ruiz Furious vs Giacomina Leclerc',
            'Eduardo Calvo vs Freya Anafi',
            'Sergio Solano vs Tony Crowther',
            'Alexis Iceman vs Peppe Vedda',
            'Vasvo Lao vs Christian Horny',
            'Andre Prov vs Eduardo Scarpati',
            'Cristian Ezpeleta vs Cristobal Farias',
            'Valdi CT vs Francisco Martinez',
            'Alvaro Redondo vs Blake Ezeh',
            'Antonio Pinillos vs Templario VCR',
            'Nelson David Quiroz vs Alejandro Alonso',
            'Marco Rodriguez vs Marc cr Rayo'
        ]
    },
    {
        nombre: 'Jornada 6',
        fecha: 'Lunes 20 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Leoo Castro vs Nicolo Civera',
            'Stefano Cann vs Juan Ignacio',
            'Luis Reynoso vs Juan Garcia',
            'Mauro Reyes vs Giacomina Leclerc',
            'Roma Astur vs Freya Anafi',
            'SERGIO Ruiz Furious vs Tony Crowther',
            'Eduardo Calvo vs Peppe Vedda',
            'Sergio Solano vs Christian Horny',
            'Alexis Iceman vs Eduardo Scarpati',
            'Vasvo Lao vs Cristobal Farias',
            'Andre Prov vs Francisco Martinez',
            'Cristian Ezpeleta vs Blake Ezeh',
            'Valdi CT vs Templario VCR',
            'Alvaro Redondo vs Alejandro Alonso',
            'Antonio Pinillos vs Marc cr Rayo',
            'Nelson David Quiroz vs Marco Rodriguez'
        ]
    },
    {
        nombre: 'Jornada 7',
        fecha: 'Miercoles 22 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Leoo Castro vs Juan Ignacio',
            'Nicolo Civera vs Juan Garcia',
            'Stefano Cann vs Giacomina Leclerc',
            'Luis Reynoso vs Freya Anafi',
            'Mauro Reyes vs Tony Crowther',
            'Roma Astur vs Peppe Vedda',
            'SERGIO Ruiz Furious vs Christian Horny',
            'Eduardo Calvo vs Eduardo Scarpati',
            'Sergio Solano vs Cristobal Farias',
            'Alexis Iceman vs Francisco Martinez',
            'Vasvo Lao vs Blake Ezeh',
            'Andre Prov vs Templario VCR',
            'Cristian Ezpeleta vs Alejandro Alonso',
            'Valdi CT vs Marc cr Rayo',
            'Alvaro Redondo vs Marco Rodriguez',
            'Antonio Pinillos vs Nelson David Quiroz'
        ]
    },
    {
        nombre: 'Jornada 8',
        fecha: 'Viernes 24 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Leoo Castro vs Juan Garcia',
            'Juan Ignacio vs Giacomina Leclerc',
            'Nicolo Civera vs Freya Anafi',
            'Stefano Cann vs Tony Crowther',
            'Luis Reynoso vs Peppe Vedda',
            'Mauro Reyes vs Christian Horny',
            'Roma Astur vs Eduardo Scarpati',
            'SERGIO Ruiz Furious vs Cristobal Farias',
            'Eduardo Calvo vs Francisco Martinez',
            'Sergio Solano vs Blake Ezeh',
            'Alexis Iceman vs Templario VCR',
            'Vasvo Lao vs Alejandro Alonso',
            'Andre Prov vs Marc cr Rayo',
            'Cristian Ezpeleta vs Marco Rodriguez',
            'Valdi CT vs Nelson David Quiroz',
            'Alvaro Redondo vs Antonio Pinillos'
        ]
    },
    {
        nombre: 'Jornada 9',
        fecha: 'Lunes 27 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Leoo Castro vs Giacomina Leclerc',
            'Juan Garcia vs Freya Anafi',
            'Juan Ignacio vs Tony Crowther',
            'Nicolo Civera vs Peppe Vedda',
            'Stefano Cann vs Christian Horny',
            'Luis Reynoso vs Eduardo Scarpati',
            'Mauro Reyes vs Cristobal Farias',
            'Roma Astur vs Francisco Martinez',
            'SERGIO Ruiz Furious vs Blake Ezeh',
            'Eduardo Calvo vs Templario VCR',
            'Sergio Solano vs Alejandro Alonso',
            'Alexis Iceman vs Marc cr Rayo',
            'Vasvo Lao vs Marco Rodriguez',
            'Andre Prov vs Nelson David Quiroz',
            'Cristian Ezpeleta vs Antonio Pinillos',
            'Valdi CT vs Alvaro Redondo'
        ]
    },
    {
        nombre: 'Jornada 10',
        fecha: 'Miercoles 29 de abril',
        estado: 'Programada',
        enfrentamientos: [
            'Leoo Castro vs Freya Anafi',
            'Giacomina Leclerc vs Tony Crowther',
            'Juan Garcia vs Peppe Vedda',
            'Juan Ignacio vs Christian Horny',
            'Nicolo Civera vs Eduardo Scarpati',
            'Stefano Cann vs Cristobal Farias',
            'Luis Reynoso vs Francisco Martinez',
            'Mauro Reyes vs Blake Ezeh',
            'Roma Astur vs Templario VCR',
            'SERGIO Ruiz Furious vs Alejandro Alonso',
            'Eduardo Calvo vs Marc cr Rayo',
            'Sergio Solano vs Marco Rodriguez',
            'Alexis Iceman vs Nelson David Quiroz',
            'Vasvo Lao vs Antonio Pinillos',
            'Andre Prov vs Alvaro Redondo',
            'Cristian Ezpeleta vs Valdi CT'
        ]
    }
];

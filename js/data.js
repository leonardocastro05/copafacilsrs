// ========================================
// SPANISH RACING SERIES - DATA
// Temporada 37
// ========================================

const seasonInfo = {
    number: 37,
    title: 'Temporada 37',
    subtitle: 'Parrilla oficial (32 managers)'
};

const pilotosT37 = [
    { pos: 1,  nombre: 'Valdi CT',                          equipo: '77 Campos Racing F1',              puntos: 0 },
    { pos: 2,  nombre: 'André Prov',                        equipo: 'Tortuga',                          puntos: 0 },
    { pos: 3,  nombre: 'Leoo Ferreira',                     equipo: '07 CRT Competition',               puntos: 0 },
    { pos: 4,  nombre: 'Eduardo Calvo',                     equipo: '72 CTC VCR Foxtrot',               puntos: 0 },
    { pos: 5,  nombre: 'Cristian Ezpeleta',                 equipo: '99 Campos Racing F1',              puntos: 0 },
    { pos: 6,  nombre: 'Sergio Solano',                     equipo: '13 CRT Competition',               puntos: 0 },
    { pos: 7,  nombre: 'Vasvo Lao',                         equipo: 'Subaru F1 Team',                   puntos: 0 },
    { pos: 8,  nombre: 'Marco Rodríguez',                   equipo: '94 Pagani Renault',                puntos: 0 },
    { pos: 9,  nombre: 'Alexis Iceman',                     equipo: '00 CRT Competition',               puntos: 0 },
    { pos: 10, nombre: 'Juan Garcia',                       equipo: 'Ferrari F1 Team',                  puntos: 0 },
    { pos: 11, nombre: 'Tony Crowther',                     equipo: '44 Patria Italia',                 puntos: 0 },
    { pos: 12, nombre: 'Álvaro Redondo',                    equipo: '36 CTC VCR FTSE',                  puntos: 0 },
    { pos: 13, nombre: 'Antonio Pinillos',                  equipo: 'Red Bull Pinkustercia F1 Team',    puntos: 0 },
    { pos: 14, nombre: 'Marc cr Rayo',                      equipo: 'Rayito Team',                      puntos: 0 },
    { pos: 15, nombre: 'Freya Anafi',                       equipo: 'Subaru Pirelli SRS Team',          puntos: 0 },
    { pos: 16, nombre: 'Giacomina Leclerc',                 equipo: 'Patria Italia',                    puntos: 0 },
    { pos: 17, nombre: 'Blake Ezeh',                        equipo: 'Ferrari HoloLive Racing Team',     puntos: 0 },
    { pos: 18, nombre: 'Stefano Cann',                      equipo: 'Italica Siracusa',                 puntos: 0 },
    { pos: 19, nombre: 'Francisco Martínez',                equipo: 'Renfe Cercanías RT',               puntos: 0 },
    { pos: 20, nombre: 'Christian Horny',                   equipo: '15 Zetta Racing',                  puntos: 0 },
    { pos: 21, nombre: 'Romus Toras',                       equipo: '50 Rizia Royal Racing',            puntos: 0 },
    { pos: 22, nombre: 'Templario VCR',                     equipo: 'Hispania Racing Team',             puntos: 0 },
    { pos: 23, nombre: 'Alejandro Alonso',                  equipo: '3 Zetta Racing',                   puntos: 0 },
    { pos: 24, nombre: 'Peppe Vedda',                       equipo: 'Iron Racing Team',                 puntos: 0 },
    { pos: 25, nombre: 'Mauro Reyes Hernández',             equipo: '26 Zetta Racing',                  puntos: 0 },
    { pos: 26, nombre: 'Cristóbal Farías Galleguillos',     equipo: '18 Zetta Racing',                  puntos: 0 },
    { pos: 27, nombre: 'Julio Maidana',                     equipo: '18 BMW Team',                      puntos: 0 },
    { pos: 28, nombre: 'Rui Acacio',                        equipo: 'Flamengüam',                       puntos: 0 },
    { pos: 29, nombre: 'Sebas Srg Ramírez',                 equipo: '11 Ferrari McDonald\'s',           puntos: 0 },
    { pos: 30, nombre: 'Thiago Campos',                     equipo: 'Mercedes',                         puntos: 0 },
    { pos: 31, nombre: 'Roma II',                           equipo: '69 CRT Competition',               puntos: 0 },
    { pos: 32, nombre: 'Pablo Mañas',                       equipo: 'Aston Martin F1 Team Mañas',       puntos: 0 }
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
        estado: 'Pendiente',
        enfrentamientos: [
            'Valdi CT vs Stefano Cann',
            'André Prov vs Julio Maidana',
            'Leoo Ferreira vs Marc cr Rayo',
            'Eduardo Calvo vs Romus Toras',
            'Cristian Ezpeleta vs Pablo Mañas',
            'Sergio Solano vs Mauro Reyes Hernández',
            'Vasvo Lao vs Álvaro Redondo',
            'Marco Rodríguez vs Sebas Srg Ramírez',
            'Alexis Iceman vs Giacomina Leclerc',
            'Juan Garcia vs Alejandro Alonso',
            'Tony Crowther vs Christian Horny',
            'Antonio Pinillos vs Thiago Campos',
            'Freya Anafi vs Rui Acacio',
            'Blake Ezeh vs Cristóbal Farías Galleguillos',
            'Francisco Martínez vs Peppe Vedda',
            'Templario VCR vs Roma II'
        ]
    },
    {
        nombre: 'Jornada 2',
        fecha: 'Miercoles 13 de mayo',
        estado: 'Pendiente',
        enfrentamientos: [
            'Valdi CT vs Mauro Reyes Hernández',
            'André Prov vs Tony Crowther',
            'Leoo Ferreira vs Templario VCR',
            'Eduardo Calvo vs Antonio Pinillos',
            'Cristian Ezpeleta vs Rui Acacio',
            'Sergio Solano vs Blake Ezeh',
            'Vasvo Lao vs Pablo Mañas',
            'Marco Rodríguez vs Freya Anafi',
            'Alexis Iceman vs Thiago Campos',
            'Juan Garcia vs Francisco Martínez',
            'Álvaro Redondo vs Sebas Srg Ramírez',
            'Marc cr Rayo vs Julio Maidana',
            'Giacomina Leclerc vs Alejandro Alonso',
            'Stefano Cann vs Roma II',
            'Christian Horny vs Cristóbal Farías Galleguillos',
            'Romus Toras vs Peppe Vedda'
        ]
    },
    {
        nombre: 'Jornada 3',
        fecha: 'Viernes 15 de mayo',
        estado: 'Pendiente',
        enfrentamientos: [
            'Valdi CT vs Roma II',
            'André Prov vs Christian Horny',
            'Leoo Ferreira vs Alexis Iceman',
            'Eduardo Calvo vs Cristóbal Farías Galleguillos',
            'Cristian Ezpeleta vs Marc cr Rayo',
            'Sergio Solano vs Alejandro Alonso',
            'Vasvo Lao vs Stefano Cann',
            'Marco Rodríguez vs Tony Crowther',
            'Juan Garcia vs Sebas Srg Ramírez',
            'Álvaro Redondo vs Romus Toras',
            'Antonio Pinillos vs Peppe Vedda',
            'Freya Anafi vs Pablo Mañas',
            'Giacomina Leclerc vs Julio Maidana',
            'Blake Ezeh vs Thiago Campos',
            'Francisco Martínez vs Rui Acacio',
            'Templario VCR vs Mauro Reyes Hernández'
        ]
    },
    {
        nombre: 'Jornada 4',
        fecha: 'Lunes 18 de mayo',
        estado: 'Pendiente',
        enfrentamientos: [
            'Valdi CT vs Álvaro Redondo',
            'André Prov vs Roma II',
            'Leoo Ferreira vs Rui Acacio',
            'Eduardo Calvo vs Blake Ezeh',
            'Cristian Ezpeleta vs Templario VCR',
            'Sergio Solano vs Alexis Iceman',
            'Vasvo Lao vs Peppe Vedda',
            'Marco Rodríguez vs Francisco Martínez',
            'Juan Garcia vs Julio Maidana',
            'Tony Crowther vs Cristóbal Farías Galleguillos',
            'Antonio Pinillos vs Pablo Mañas',
            'Marc cr Rayo vs Romus Toras',
            'Freya Anafi vs Thiago Campos',
            'Giacomina Leclerc vs Mauro Reyes Hernández',
            'Stefano Cann vs Sebas Srg Ramírez',
            'Christian Horny vs Alejandro Alonso'
        ]
    },
    {
        nombre: 'Jornada 5',
        fecha: 'Miercoles 20 de mayo',
        estado: 'Pendiente',
        enfrentamientos: [
            'Valdi CT vs Alejandro Alonso',
            'André Prov vs Marc cr Rayo',
            'Leoo Ferreira vs Blake Ezeh',
            'Eduardo Calvo vs Thiago Campos',
            'Cristian Ezpeleta vs Juan Garcia',
            'Sergio Solano vs Julio Maidana',
            'Vasvo Lao vs Christian Horny',
            'Marco Rodríguez vs Roma II',
            'Alexis Iceman vs Cristóbal Farías Galleguillos',
            'Tony Crowther vs Templario VCR',
            'Álvaro Redondo vs Francisco Martínez',
            'Antonio Pinillos vs Rui Acacio',
            'Freya Anafi vs Peppe Vedda',
            'Giacomina Leclerc vs Sebas Srg Ramírez',
            'Stefano Cann vs Romus Toras',
            'Mauro Reyes Hernández vs Pablo Mañas'
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
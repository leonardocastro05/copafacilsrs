// ========================================
// SPANISH RACING SERIES - DATA
// Temporada 37
// ========================================

const seasonInfo = {
    number: 37,
    title: 'Temporada 37',
    subtitle: 'Parrilla provisional (31 managers)'
};

const pilotosT37 = [
    { pos: 1,  nombre: 'Valdi CT',              equipo: '77 Campos Racing F1',                  puntos: 0 },
    { pos: 2,  nombre: 'André Prov',            equipo: 'Tortuga',                              puntos: 0 },
    { pos: 3,  nombre: 'Leoo Castro',           equipo: '07 CRT Competition',                   puntos: 0 },
    { pos: 4,  nombre: 'Eduardo Calvo',         equipo: '72 CTC VCR Foxtrot',                   puntos: 0 },
    { pos: 5,  nombre: 'Cristian Ezpeleta',     equipo: '99 Campos Racing F1',                  puntos: 0 },
    { pos: 6,  nombre: 'Sergio Solano',         equipo: '13 CRT Competition',                   puntos: 0 },
    { pos: 7,  nombre: 'Vasvo Lao',             equipo: 'Subaru F1 Team',                       puntos: 0 },
    { pos: 8,  nombre: 'Marco Rodriguez',       equipo: '94 Pagani Renault',                    puntos: 0 },
    { pos: 9,  nombre: 'Alexis Iceman',         equipo: '00 CRT Competition',                   puntos: 0 },
    { pos: 10, nombre: 'Juan Garcia',           equipo: 'Ferrari F1 Team',                      puntos: 0 },
    { pos: 11, nombre: 'Tony Crowther',         equipo: '44 Patria Itala',                      puntos: 0 },
    { pos: 12, nombre: 'Alvaro Redondo',        equipo: '36 CTC VCR FTSE',                      puntos: 0 },
    { pos: 13, nombre: 'Antonio Pinillos',      equipo: 'Red Bull Pinkustercia F1 Team',        puntos: 0 },
    { pos: 14, nombre: 'Marc cr Rayo',          equipo: 'Rayito Team',                          puntos: 0 },
    { pos: 15, nombre: 'Juan Ignacio Rodríguez Ansaldi', equipo: '74 Subaru Pirelli SRS Team',      puntos: 0 },
    { pos: 16, nombre: 'Freya Anafi',           equipo: 'Subaru Pirelli SRS Team',              puntos: 0 },
    { pos: 17, nombre: 'Giacomina Leclerc',     equipo: 'Renfe Cercanías RT 6',                 puntos: 0 },
    { pos: 18, nombre: 'Blake Ezeh',            equipo: 'Ferrari HoloLive Racing Team',         puntos: 0 },
    { pos: 19, nombre: 'Stefano Cann',          equipo: 'Italica Siracusa',                     puntos: 0 },
    { pos: 20, nombre: 'Francisco Martinez',    equipo: 'Renfe Cercanías RT',                   puntos: 0 },
    { pos: 21, nombre: 'Christian Horny',       equipo: '15 Zetta Racing',                      puntos: 0 },
    { pos: 22, nombre: 'Romus Toras',           equipo: '50 Rizia Royal Racing',                puntos: 0 },
    { pos: 23, nombre: 'Templario VCR',         equipo: 'Hispania Racing Team',                 puntos: 0 },
    { pos: 24, nombre: 'Alejandro Alonso',      equipo: '3 Zetta Racing',                       puntos: 0 },
    { pos: 25, nombre: 'Peppe Vedda',           equipo: 'Iron Racing Team',                     puntos: 0 },
    { pos: 26, nombre: 'Mauro Reyes Hernández', equipo: '26 Zetta Racing',                      puntos: 0 },
    { pos: 27, nombre: 'Cristóbal Farias Galleguillos', equipo: '18 Zetta Racing',             puntos: 0 },
    { pos: 28, nombre: 'Fran White',            equipo: 'Lamborghini',                          puntos: 0 },
    { pos: 29, nombre: 'JUJU Monoko',           equipo: 'Blue light',                           puntos: 0 },
    { pos: 30, nombre: 'Lando Norris',          equipo: 'matyassochrt654247',                   puntos: 0 },
    { pos: 31, nombre: 'Julio Maidana',         equipo: '18 BMW team',                          puntos: 0 },
    { pos: 32, nombre: 'TBD',                   equipo: 'TBD',                                  puntos: 0 }
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
        equipo: 'Ferrari', // We don't have his team, we can put TBD or leave empty since we don't know
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
        enfrentamientos: []
    },
    {
        nombre: 'Jornada 2',
        fecha: 'Miercoles 13 de mayo',
        estado: 'Pendiente',
        enfrentamientos: []
    },
    {
        nombre: 'Jornada 3',
        fecha: 'Viernes 15 de mayo',
        estado: 'Pendiente',
        enfrentamientos: []
    },
    {
        nombre: 'Jornada 4',
        fecha: 'Lunes 18 de mayo',
        estado: 'Pendiente',
        enfrentamientos: []
    },
    {
        nombre: 'Jornada 5',
        fecha: 'Miercoles 20 de mayo',
        estado: 'Pendiente',
        enfrentamientos: []
    },
    {
        nombre: 'Jornada 6',
        fecha: 'Viernes 22 de mayo',
        estado: 'Pendiente',
        enfrentamientos: []
    },
    {
        nombre: 'Jornada 7',
        fecha: 'Lunes 25 de mayo',
        estado: 'Pendiente',
        enfrentamientos: []
    },
    {
        nombre: 'Jornada 8',
        fecha: 'Miercoles 27 de mayo',
        estado: 'Pendiente',
        enfrentamientos: []
    },
    {
        nombre: 'Jornada 9',
        fecha: 'Viernes 29 de mayo',
        estado: 'Pendiente',
        enfrentamientos: []
    },
    {
        nombre: 'Jornada 10',
        fecha: 'Lunes 1 de junio',
        estado: 'Pendiente',
        enfrentamientos: []
    }
];
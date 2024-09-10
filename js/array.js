const series = [
  {
    id: 1,
    titulo: "The Last of Us",
    temporada: "Temporada 2",
    pais: "EE. UU.",
    sinopsis: "Adaptación del videojuego sobre Joel y Ellie en un mundo postapocalíptico.",
    plataforma: "HBO Max",
    imagen: ""
  },
  {
    id: 2,
    titulo: "The Mandalorian",
    temporada: "Temporada 4",
    pais: "EE. UU.",
    sinopsis: "Sigue las aventuras de Din Djarin y Grogu en el universo de Star Wars.",
    plataforma: "Disney+",
    imagen: ""
  },
  {
    id: 3,
    titulo: "Heartstopper",
    temporada: "Temporada 2",
    pais: "Reino Unido",
    sinopsis: "Historia de amor entre Charlie y Nick explorando temas de identidad y aceptación.",
    plataforma: "Netflix",
    imagen: ""
  },
  {
    id: 4,
    titulo: "1899",
    temporada: "Temporada 1",
    pais: "Alemania",
    sinopsis: "Pasajeros de un barco en 1899 enfrentan eventos misteriosos y sobrenaturales.",
    plataforma: "Netflix",
    imagen: ""
  },
  {
    id: 5,
    titulo: "Slow Horses",
    temporada: "Temporada 3",
    pais: "Reino Unido",
    sinopsis: "Agentes del MI5 relegados a misiones peligrosas tras cometer errores en el pasado.",
    plataforma: "Apple TV+",
    imagen: ""
  },
  {
    id: 6,
    titulo: "La Serpiente de Essex",
    temporada: "Temporada 1",
    pais: "Reino Unido",
    sinopsis: "Explora el mito de una serpiente mítica en la Inglaterra victoriana.",
    plataforma: "Apple TV+",
    imagen: ""
  },
  {
    id: 7,
    titulo: "The Idol",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Joven estrella del pop navega la fama, la adicción y relaciones tóxicas.",
    plataforma: "HBO Max",
    imagen: ""
  },
  {
    id: 8,
    titulo: "Obi-Wan Kenobi",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Regreso de Ewan McGregor como Obi-Wan Kenobi en una serie ambientada en el universo de Star Wars.",
    plataforma: "Disney+",
    imagen: ""
  },
  {
    id: 9,
    titulo: "Willow",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Secuela de la película de fantasía de 1988 que enfrenta críticas divididas.",
    plataforma: "Disney+",
    imagen: ""
  },
  {
    id: 10,
    titulo: "She-Hulk: Attorney at Law",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Comedia sobre una abogada que es también una superheroína.",
    plataforma: "Disney+",
    imagen: ""
  },
  {
    id: 11,
    titulo: "The Peripheral",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Adaptación de la novela de William Gibson con una narrativa compleja y ritmo lento.",
    plataforma: "Amazon Prime Video",
    imagen: ""
  },
  {
    id: 12,
    titulo: "Paper Girls",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Serie de ciencia ficción basada en cómics con críticas mixtas.",
    plataforma: "Amazon Prime Video",
    imagen: ""
  },
  {
    id: 13,
    titulo: "Somos.",
    temporada: "Miniserie",
    pais: "México",
    sinopsis: "Dramatización del impacto del narcotráfico en la comunidad de Allende, Coahuila.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 14,
    titulo: "Club de Cuervos",
    temporada: "Temporada 4",
    pais: "México",
    sinopsis: "Comedia dramática que sigue a un equipo de fútbol y sus propietarios.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 15,
    titulo: "Narcos: México",
    temporada: "Temporada 3",
    pais: "México",
    sinopsis: "Historia de los cárteles de la droga en México y su crecimiento en la década de los 80.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
];


const todasSeries = [
  {
    id: 1,
    titulo: "The Last of Us",
    temporada: "Temporada 2",
    pais: "EE. UU.",
    sinopsis: "Adaptación del videojuego sobre Joel y Ellie en un mundo postapocalíptico.",
    plataforma: "HBO Max",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 2,
    titulo: "The Mandalorian",
    temporada: "Temporada 4",
    pais: "EE. UU.",
    sinopsis: "Sigue las aventuras de Din Djarin y Grogu en el universo de Star Wars.",
    plataforma: "Disney+",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 3,
    titulo: "Heartstopper",
    temporada: "Temporada 2",
    pais: "Reino Unido",
    sinopsis: "Historia de amor entre Charlie y Nick explorando temas de identidad y aceptación.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 4,
    titulo: "1899",
    temporada: "Temporada 1",
    pais: "Alemania",
    sinopsis: "Pasajeros de un barco en 1899 enfrentan eventos misteriosos y sobrenaturales.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 5,
    titulo: "Slow Horses",
    temporada: "Temporada 3",
    pais: "Reino Unido",
    sinopsis: "Agentes del MI5 relegados a misiones peligrosas tras cometer errores en el pasado.",
    plataforma: "Apple TV+",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 6,
    titulo: "La Serpiente de Essex",
    temporada: "Temporada 1",
    pais: "Reino Unido",
    sinopsis: "Explora el mito de una serpiente mítica en la Inglaterra victoriana.",
    plataforma: "Apple TV+",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 7,
    titulo: "The Idol",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Joven estrella del pop navega la fama, la adicción y relaciones tóxicas.",
    plataforma: "HBO Max",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 8,
    titulo: "Obi-Wan Kenobi",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Regreso de Ewan McGregor como Obi-Wan Kenobi en una serie ambientada en el universo de Star Wars.",
    plataforma: "Disney+",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 9,
    titulo: "Willow",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Secuela de la película de fantasía de 1988 que enfrenta críticas divididas.",
    plataforma: "Disney+",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 10,
    titulo: "She-Hulk: Attorney at Law",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Comedia sobre una abogada que es también una superheroína.",
    plataforma: "Disney+",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 11,
    titulo: "The Peripheral",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Adaptación de la novela de William Gibson con una narrativa compleja y ritmo lento.",
    plataforma: "Amazon Prime Video",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 12,
    titulo: "Paper Girls",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Serie de ciencia ficción basada en cómics con críticas mixtas.",
    plataforma: "Amazon Prime Video",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 13,
    titulo: "Somos.",
    temporada: "Miniserie",
    pais: "México",
    sinopsis: "Dramatización del impacto del narcotráfico en la comunidad de Allende, Coahuila.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 14,
    titulo: "Club de Cuervos",
    temporada: "Temporada 4",
    pais: "México",
    sinopsis: "Comedia dramática que sigue a un equipo de fútbol y sus propietarios.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 15,
    titulo: "Narcos: México",
    temporada: "Temporada 3",
    pais: "México",
    sinopsis: "Historia de los cárteles de la droga en México y su crecimiento en la década de los 80.",
    plataforma: "Netflix",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Narcos_Mexico.png"
  },
  {
    id: 16,
    titulo: "Dark",
    temporada: "Temporada 3",
    pais: "Alemania",
    sinopsis: "Serie de ciencia ficción que explora el concepto del tiempo en una pequeña ciudad alemana.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 17,
    titulo: "Babylon Berlin",
    temporada: "Temporada 4",
    pais: "Alemania",
    sinopsis: "Drama criminal ambientado en Berlín durante los años 20.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 18,
    titulo: "Luis Miguel: La Serie",
    temporada: "Temporada 3",
    pais: "México",
    sinopsis: "Serie biográfica sobre la vida del famoso cantante mexicano Luis Miguel.",
    plataforma: "Netflix",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Luis_Miguel%2C_la_serie_logo.png/640px-Luis_Miguel%2C_la_serie_logo.png"
  },
  {
    id: 19,
    titulo: "La Casa de las Flores",
    temporada: "Temporada 3",
    pais: "México",
    sinopsis: "Comedia negra que sigue a una familia disfuncional dueña de una floristería.",
    plataforma: "Netflix",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/La_casa_de_las_flores_stacked.png/640px-La_casa_de_las_flores_stacked.png"
  },
  {
    id: 20,
    titulo: "Monarca",
    temporada: "Temporada 2",
    pais: "México",
    sinopsis: "Drama sobre una familia mexicana poderosa en la industria del tequila.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 21,
    titulo: "El Dragón: El Regreso de un Guerrero",
    temporada: "Temporada 2",
    pais: "México",
    sinopsis: "Un joven financiero regresa a México para dirigir el cartel de su familia.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 22,
    titulo: "Diablero",
    temporada: "Temporada 2",
    pais: "México",
    sinopsis: "Cazadores de demonios en la Ciudad de México enfrentan fuerzas sobrenaturales.",
    plataforma: "Netflix",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 23,
    titulo: "El Candidato",
    temporada: "Temporada 1",
    pais: "México",
    sinopsis: "Thriller político sobre un agente de la CIA que lucha contra la corrupción en México.",
    plataforma: "Amazon Prime Video",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 24,
    titulo: "Capadocia",
    temporada: "Temporada 3",
    pais: "México",
    sinopsis: "Serie dramática sobre una prisión para mujeres en la Ciudad de México.",
    plataforma: "HBO",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 25,
    titulo: "Un Extraño Enemigo",
    temporada: "Temporada 2",
    pais: "México",
    sinopsis: "Thriller político basado en eventos reales durante el movimiento estudiantil de 1968.",
    plataforma: "Amazon Prime Video",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 26,
    titulo: "The Office",
    temporada: "Temporada 9",
    pais: "EE. UU.",
    sinopsis: "Comedia que sigue la vida de los empleados de la oficina de Dunder Mifflin.",
    plataforma: "Peacock",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 27,
    titulo: "Breaking Bad",
    temporada: "Temporada 5",
    pais: "EE. UU.",
    sinopsis: "Un profesor de química convertido en narcotraficante lucha por el control de su imperio.",
    plataforma: "Netflix",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/640px-Breaking_Bad_logo.svg.png"
  },
  {
    id: 28,
    titulo: "Stranger Things",
    temporada: "Temporada 4",
    pais: "EE. UU.",
    sinopsis: "Un grupo de amigos enfrenta eventos sobrenaturales en la década de los 80.",
    plataforma: "Netflix",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Stranger_Things_logo.png/640px-Stranger_Things_logo.png"
  },
  {
    id: 29,
    titulo: "Fleabag",
    temporada: "Temporada 2",
    pais: "Reino Unido",
    sinopsis: "Comedia dramática que sigue la vida de una joven mujer en Londres.",
    plataforma: "Amazon Prime Video",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  },
  {
    id: 30,
    titulo: "Doctor Who",
    temporada: "Temporada 13",
    pais: "Reino Unido",
    sinopsis: "Un alienígena viaja a través del tiempo y el espacio en la TARDIS.",
    plataforma: "BBC iPlayer",
    imagen: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  }
];

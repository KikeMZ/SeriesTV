const series = [
  {
    id: 1,
    titulo: "The Last of Us",
    temporada: "Temporada 2",
    pais: "EE. UU.",
    sinopsis: "Adaptación del videojuego sobre Joel y Ellie en un mundo postapocalíptico.",
    plataforma: "HBO Max",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/The_Last_of_Us_%282013%29_game_logo.png/640px-The_Last_of_Us_%282013%29_game_logo.png"
  },
  {
    id: 2,
    titulo: "The Mandalorian",
    temporada: "Temporada 4",
    pais: "EE. UU.",
    sinopsis: "Sigue las aventuras de Din Djarin y Grogu en el universo de Star Wars.",
    plataforma: "Disney+",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/The_Mandalorian_logo_black.svg/640px-The_Mandalorian_logo_black.svg.png"
  },
  {
    id: 3,
    titulo: "Heartstopper",
    temporada: "Temporada 2",
    pais: "Reino Unido",
    sinopsis: "Historia de amor entre Charlie y Nick explorando temas de identidad y aceptación.",
    plataforma: "Netflix",
    imagen: "https://m.media-amazon.com/images/I/71DbxgejbYL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 4,
    titulo: "1899",
    temporada: "Temporada 1",
    pais: "Alemania",
    sinopsis: "Pasajeros de un barco en 1899 enfrentan eventos misteriosos y sobrenaturales.",
    plataforma: "Netflix",
    imagen: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQC39v-XgcsuuUfGGmmKM19UmgC_m6ajZxIF51ceA2DdpoLAYUAew21372va_vGwakTonm1PO3C6z8bAYcTbQ2MV39MbIgWIJct0og292rakURxD_4Wyy64BhS9DrcwGuTW7tQ.jpg?r=5de"
  },
  {
    id: 5,
    titulo: "Slow Horses",
    temporada: "Temporada 3",
    pais: "Reino Unido",
    sinopsis: "Agentes del MI5 relegados a misiones peligrosas tras cometer errores en el pasado.",
    plataforma: "Apple TV+",
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/8c/Slow_Horses_series_promotional_image.png"
  },
  {
    id: 6,
    titulo: "La Serpiente de Essex",
    temporada: "Temporada 1",
    pais: "Reino Unido",
    sinopsis: "Explora el mito de una serpiente mítica en la Inglaterra victoriana.",
    plataforma: "Apple TV+",
    imagen: "https://www.apple.com/es/tv-pr/shows-and-films/t/the-essex-serpent/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_The_Essex_Serpent_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1671199658877"
  },
  {
    id: 7,
    titulo: "The Idol",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Joven estrella del pop navega la fama, la adicción y relaciones tóxicas.",
    plataforma: "HBO Max",
    imagen: "https://images.justwatch.com/poster/306103497/s718/the-idol.jpg"
  },
  {
    id: 8,
    titulo: "Obi-Wan Kenobi",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Regreso de Ewan McGregor como Obi-Wan Kenobi en una serie ambientada en el universo de Star Wars.",
    plataforma: "Disney+",
    imagen: "https://www.aceprensa.com/wp-content/uploads/2022/06/Obi-Wan-Kenobi-2.jpg"
  },
  {
    id: 9,
    titulo: "Willow",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Secuela de la película de fantasía de 1988 que enfrenta críticas divididas.",
    plataforma: "Disney+",
    imagen: "https://www.clarin.com/img/2022/12/02/Z52ClkCG5_2000x1500__1.jpg"
  },
  {
    id: 10,
    titulo: "She-Hulk: Attorney at Law",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Comedia sobre una abogada que es también una superheroína.",
    plataforma: "Disney+",
    imagen: "https://cdn.marvel.com/content/1x/clover_teaser_printed_1sht_v2_lg.jpg"
  },
  {
    id: 11,
    titulo: "The Peripheral",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Adaptación de la novela de William Gibson con una narrativa compleja y ritmo lento.",
    plataforma: "Amazon Prime Video",
    imagen: "https://images.justwatch.com/poster/301196812/s166/the-peripheral"
  },
  {
    id: 12,
    titulo: "Paper Girls",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Serie de ciencia ficción basada en cómics con críticas mixtas.",
    plataforma: "Amazon Prime Video",
    imagen: "https://m.media-amazon.com/images/M/MV5BODE5ZjMwZmQtYTcxZS00MzVjLWEzOTQtMzBhMTFkODQ3MGVmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX190_CR0,2,190,281_.jpg"
  },
  {
    id: 13,
    titulo: "Somos.",
    temporada: "Miniserie",
    pais: "México",
    sinopsis: "Dramatización del impacto del narcotráfico en la comunidad de Allende, Coahuila.",
    plataforma: "Netflix",
    imagen: "https://pics.filmaffinity.com/Somos_Miniserie_de_TV-183953997-large.jpg"
  },
  {
    id: 14,
    titulo: "Club de Cuervos",
    temporada: "Temporada 4",
    pais: "México",
    sinopsis: "Comedia dramática que sigue a un equipo de fútbol y sus propietarios.",
    plataforma: "Netflix",
    imagen: "https://cdn-3.expansion.mx/dims4/default/4a79d33/2147483647/resize/1280x/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fb6%2F95%2F144ed6164e9baa74d95cf557b466%2Fclub.JPG"
  },
  {
    id: 15,
    titulo: "Narcos: México",
    temporada: "Temporada 3",
    pais: "México",
    sinopsis: "Historia de los cárteles de la droga en México y su crecimiento en la década de los 80.",
    plataforma: "Netflix",
    imagen: "https://es.web.img3.acsta.net/pictures/15/07/29/14/33/086520.jpg"
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
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/The_Last_of_Us_%282013%29_game_logo.png/640px-The_Last_of_Us_%282013%29_game_logo.png"
  },
  {
    id: 2,
    titulo: "The Mandalorian",
    temporada: "Temporada 4",
    pais: "EE. UU.",
    sinopsis: "Sigue las aventuras de Din Djarin y Grogu en el universo de Star Wars.",
    plataforma: "Disney+",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/The_Mandalorian_logo_black.svg/640px-The_Mandalorian_logo_black.svg.png"
  },
  {
    id: 3,
    titulo: "Heartstopper",
    temporada: "Temporada 2",
    pais: "Reino Unido",
    sinopsis: "Historia de amor entre Charlie y Nick explorando temas de identidad y aceptación.",
    plataforma: "Netflix",
    imagen: "https://m.media-amazon.com/images/I/71DbxgejbYL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 4,
    titulo: "1899",
    temporada: "Temporada 1",
    pais: "Alemania",
    sinopsis: "Pasajeros de un barco en 1899 enfrentan eventos misteriosos y sobrenaturales.",
    plataforma: "Netflix",
    imagen: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQC39v-XgcsuuUfGGmmKM19UmgC_m6ajZxIF51ceA2DdpoLAYUAew21372va_vGwakTonm1PO3C6z8bAYcTbQ2MV39MbIgWIJct0og292rakURxD_4Wyy64BhS9DrcwGuTW7tQ.jpg?r=5de"
  },
  {
    id: 5,
    titulo: "Slow Horses",
    temporada: "Temporada 3",
    pais: "Reino Unido",
    sinopsis: "Agentes del MI5 relegados a misiones peligrosas tras cometer errores en el pasado.",
    plataforma: "Apple TV+",
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/8c/Slow_Horses_series_promotional_image.png"
  },
  {
    id: 6,
    titulo: "La Serpiente de Essex",
    temporada: "Temporada 1",
    pais: "Reino Unido",
    sinopsis: "Explora el mito de una serpiente mítica en la Inglaterra victoriana.",
    plataforma: "Apple TV+",
    imagen: "https://www.apple.com/es/tv-pr/shows-and-films/t/the-essex-serpent/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_The_Essex_Serpent_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1671199658877"
  },
  {
    id: 7,
    titulo: "The Idol",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Joven estrella del pop navega la fama, la adicción y relaciones tóxicas.",
    plataforma: "HBO Max",
    imagen: "https://images.justwatch.com/poster/306103497/s718/the-idol.jpg"
  },
  {
    id: 8,
    titulo: "Obi-Wan Kenobi",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Regreso de Ewan McGregor como Obi-Wan Kenobi en una serie ambientada en el universo de Star Wars.",
    plataforma: "Disney+",
    imagen: "https://www.aceprensa.com/wp-content/uploads/2022/06/Obi-Wan-Kenobi-2.jpg"
  },
  {
    id: 9,
    titulo: "Willow",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Secuela de la película de fantasía de 1988 que enfrenta críticas divididas.",
    plataforma: "Disney+",
    imagen: "https://www.clarin.com/img/2022/12/02/Z52ClkCG5_2000x1500__1.jpg"
  },
  {
    id: 10,
    titulo: "She-Hulk: Attorney at Law",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Comedia sobre una abogada que es también una superheroína.",
    plataforma: "Disney+",
    imagen: "https://cdn.marvel.com/content/1x/clover_teaser_printed_1sht_v2_lg.jpg"
  },
  {
    id: 11,
    titulo: "The Peripheral",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Adaptación de la novela de William Gibson con una narrativa compleja y ritmo lento.",
    plataforma: "Amazon Prime Video",
    imagen: "https://images.justwatch.com/poster/301196812/s166/the-peripheral"
  },
  {
    id: 12,
    titulo: "Paper Girls",
    temporada: "Temporada 1",
    pais: "EE. UU.",
    sinopsis: "Serie de ciencia ficción basada en cómics con críticas mixtas.",
    plataforma: "Amazon Prime Video",
    imagen: "https://m.media-amazon.com/images/M/MV5BODE5ZjMwZmQtYTcxZS00MzVjLWEzOTQtMzBhMTFkODQ3MGVmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX190_CR0,2,190,281_.jpg"
  },
  {
    id: 13,
    titulo: "Somos.",
    temporada: "Miniserie",
    pais: "México",
    sinopsis: "Dramatización del impacto del narcotráfico en la comunidad de Allende, Coahuila.",
    plataforma: "Netflix",
    imagen: "https://pics.filmaffinity.com/Somos_Miniserie_de_TV-183953997-large.jpg"
  },
  {
    id: 14,
    titulo: "Club de Cuervos",
    temporada: "Temporada 4",
    pais: "México",
    sinopsis: "Comedia dramática que sigue a un equipo de fútbol y sus propietarios.",
    plataforma: "Netflix",
    imagen: "https://cdn-3.expansion.mx/dims4/default/4a79d33/2147483647/resize/1280x/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fb6%2F95%2F144ed6164e9baa74d95cf557b466%2Fclub.JPG"
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
    imagen: "https://www.revistafactum.com/wp-content/uploads/2019/06/Dark-portada.jpg"
  },
  {
    id: 17,
    titulo: "Babylon Berlin",
    temporada: "Temporada 4",
    pais: "Alemania",
    sinopsis: "Drama criminal ambientado en Berlín durante los años 20.",
    plataforma: "Netflix",
    imagen: "https://www.goethe.de/resources/files/png72/163841_13_poster_babylonberlin_billingblock_rgb-1-formatkey-png-w320m.png"
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
    imagen: "https://www.lavanguardia.com/peliculas-series/images/serie/poster/2019/9/w1280/5LD4eBd0Fjp3686U8sD3Prgdu4o.jpg"
  },
  {
    id: 21,
    titulo: "El Dragón: El Regreso de un Guerrero",
    temporada: "Temporada 2",
    pais: "México",
    sinopsis: "Un joven financiero regresa a México para dirigir el cartel de su familia.",
    plataforma: "Netflix",
    imagen: "https://i.ytimg.com/vi/LEChs7AZ6Kg/mqdefault.jpg"
  },
  {
    id: 22,
    titulo: "Diablero",
    temporada: "Temporada 2",
    pais: "México",
    sinopsis: "Cazadores de demonios en la Ciudad de México enfrentan fuerzas sobrenaturales.",
    plataforma: "Netflix",
    imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRB6LXMMRRO-FBYOz1O3QyvdPYPV_l9YvsbcOYPihCo15KZKNG-fpxPhJEX-8NfipxXFV_EqAa8Ii7ySaNyB_CZB1egmxGadzdtScHO0QYzE0iQgIiICShMT9m2ax2RDOcsU0w.jpg?r=e88"
  },
  {
    id: 23,
    titulo: "El Candidato",
    temporada: "Temporada 1",
    pais: "México",
    sinopsis: "Thriller político sobre un agente de la CIA que lucha contra la corrupción en México.",
    plataforma: "Amazon Prime Video",
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/d463c1fdbc0dbd4a09cc639392671506f932a7385c42d688c05ffa98b271a690.jpg"
  },
  {
    id: 24,
    titulo: "Capadocia",
    temporada: "Temporada 3",
    pais: "México",
    sinopsis: "Serie dramática sobre una prisión para mujeres en la Ciudad de México.",
    plataforma: "HBO",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJK-Yf423QUSO-GYADpSPnTzj5OzLzgojug&s"
  },
  {
    id: 25,
    titulo: "Un Extraño Enemigo",
    temporada: "Temporada 2",
    pais: "México",
    sinopsis: "Thriller político basado en eventos reales durante el movimiento estudiantil de 1968.",
    plataforma: "Amazon Prime Video",
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/24fb7695a38084b520ecd7320de5b874fdfadc3d50f5efe49b8b0e88ba313952.jpg"
  },
  {
    id: 26,
    titulo: "The Office",
    temporada: "Temporada 9",
    pais: "EE. UU.",
    sinopsis: "Comedia que sigue la vida de los empleados de la oficina de Dunder Mifflin.",
    plataforma: "Peacock",
    imagen: "https://m.media-amazon.com/images/I/81NK3yCvMJL._AC_UF894,1000_QL80_.jpg"
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
    imagen: "https://pics.filmaffinity.com/Fleabag_Serie_de_TV-510144968-large.jpg"
  },
  {
    id: 30,
    titulo: "Doctor Who",
    temporada: "Temporada 13",
    pais: "Reino Unido",
    sinopsis: "Un alienígena viaja a través del tiempo y el espacio en la TARDIS.",
    plataforma: "BBC iPlayer",
    imagen: "https://lumiere-a.akamaihd.net/v1/images/doctor_who_season1_social_static_4x5_1080x1350_teaser_2_e26c0e86.png?region=0,0,1081,1081"
  }
];

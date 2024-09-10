const params = new URLSearchParams(window.location.search);
const id = params.get("pais");

const allSeriesContainer = document.getElementById("paisesContainer");
const paisNom = document.getElementById("paisNom");
const paisDes = document.getElementById("paisDes");
const paisImg = document.getElementById("imagen");

var contenido = "";

asignarPais();

if (id != "") {
  const seriesFiltradas =
    id === "all"
      ? todasSeries
      : todasSeries.filter((serie) => serie.pais.toLowerCase() === id.toLowerCase());
  seriesFiltradas.forEach((serie) => {
    contenido += `<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${serie.imagen}" alt="..." style="height: 150px;"/>
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${serie.titulo}</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="detalles.html?id=${serie.id}">Detalles</a></div>
                            </div>
                        </div>
                    </div>`;
  });
} else {
  document.getElementById("paisNom").innerHTML = "<p>Sin Series</p>";
}

allSeriesContainer.innerHTML = contenido;

function asignarPais() {
  var paisTexto = "TODAS LAS SERIES";
  var banderaSrc = "";
  var paisDesc = "";

  // Definir el texto y la bandera según el país seleccionado
  if (id !== null && id !== "") {
    switch (id.toLowerCase()) {
      case "ee. uu.":
        paisTexto = "SERIES DE EE. UU.";
        banderaSrc = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
        paisDesc = "Ve las mejores series de Estados Unidos";
        break;
      case "reino unido":
        paisTexto = "SERIES DE REINO UNIDO";
        banderaSrc = "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";
        paisDesc = "Ve las mejores series del Reino Unido";
        break;
      case "alemania":
        paisTexto = "SERIES DE ALEMANIA";
        banderaSrc = "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg";
        paisDesc = "Ve las mejores series de Alemania";
        break;
      case "méxico":
        paisTexto = "SERIES DE MÉXICO";
        banderaSrc = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg";
        paisDesc = "Ve las mejores series de México";
        break;
      case "all":
      default:
        paisTexto = "TODAS LAS SERIES";
        banderaSrc = "path_to_flag/all.png";
        paisDesc = "Elige alguna de todas nuestras series";
        break;
    }
  }

  paisNom.innerHTML = paisTexto;
  paisDes.innerHTML = paisDesc;
  paisImg.innerHTML = `<img src="${banderaSrc}" alt="${paisTexto}" style="height: 50px; margin-right: 10px;">`;
}

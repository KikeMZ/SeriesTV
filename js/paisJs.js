const params = new URLSearchParams(window.location.search);
const id = params.get("pais");

const allSeriesContainer = document.getElementById("paisesContainer");

var contenido = "";

if (id != "") {
  const seriesFiltradas =
    id === "all"
      ? series
      : series.filter(
          (serie) => serie.pais.toLowerCase() === id.toLowerCase()
        );
  seriesFiltradas.forEach((serie) => {
    contenido += `<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
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

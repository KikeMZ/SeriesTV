const navContainer = document.getElementById("nav");
var contenido = "";

contenido += `
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="index.html">SERIES DE TELEVISIÓN</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">POPULARES</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">CATEGORIAS</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="todasSeries.html?pais=all">TODAS LAS SERIES</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="pais.html?pais=EE. UU.">SERIES EE. UU.</a></li>
                                <li><a class="dropdown-item" href="pais.html?pais=Reino Unido">SERIES DE REINO UNIDO</a></li>
                                <li><a class="dropdown-item" href="pais.html?pais=Alemania">SERIES DE ALEMANIA</a></li>
                                <li><a class="dropdown-item" href="pais.html?pais=México">SERIES DE MÉXICO</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>`;

navContainer.innerHTML = contenido;

const OPCION = document.querySelector("#opcion");
const ENVIAR = document.querySelector("#enviar");
const TABLA = document.querySelector("#tablaPilotos");
const ERROR_MSG = document.querySelector("#errorMsg");
const BOTON = document.querySelector("#show");
const DATOS_MSG = document.querySelector("#datos");

const BOTON_SIGUIENTE = document.querySelector("#btn_next");
const BOTON_ANTERIOR = document.querySelector("#btn_prev");
const PAGINAS_PAGINADAS = document.querySelector("#paginacion");
const NUM_PAGINA = document.querySelector("#page");

let pilotos = [];
let paginaActual = 1;
let pilotosPorPagina = 3;
let numeroPaginas;

function mostrarTodos() {
  DATOS_MSG.innerHTML = "";
  ERROR_MSG.innerHTML = "";
  TABLA.innerHTML =
    "<tr><th>Nombre</th><th>Equipo</th><th>Numero</th><th>Nacionalidad</th></tr>";

  pilotos.forEach((piloto) => {
    let row = TABLA.insertRow();
    row.insertCell(0).innerHTML = piloto.nombre;
    row.insertCell(1).innerHTML = piloto.equipo;
    row.insertCell(2).innerHTML = piloto.numero;
    row.insertCell(3).innerHTML = piloto.nacionalidad;
  });

  let celdas = document.querySelectorAll("#tablaPilotos td");

  celdas.forEach((celda) => {
    celda.addEventListener("click", function (e) {
      Array.from(TABLA.rows).forEach((fila) => {
        fila.classList.remove("destacar");
      });

      e.target.parentNode.classList.add("destacar");
    });
  });
}

async function obtenerDatosJSON() {
  try {
    let respuesta = await fetch("file/pilotos.json");

    if (!respuesta.ok) {
      throw new Error("Ha habido un problema");
    }

    let respuestaJSON = await respuesta.json();

    pilotos = [...respuestaJSON.pilotos];
    mostrarTodos();
    numeroPaginas = Math.ceil(pilotos.length / pilotosPorPagina);
    paginarPilotos(1);
  } catch (error) {
    console.log(`Se ha producido el siguiente error: ${error}`);
  }
}

document.addEventListener("DOMContentLoaded", obtenerDatosJSON, false);

function ordenar(parametro) {
  let parametroOrden = parametro.toLowerCase();
  let pilotosOrdenados = [...pilotos];

  if (parametroOrden == "nombre") {
    pilotosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else {
    pilotosOrdenados.sort((a, b) => a.equipo.localeCompare(b.equipo));
  }

  TABLA.innerHTML =
    "<tr><th>Nombre</th><th>Equipo</th><th>Numero</th><th>Nacionalidad</th></tr>";

  pilotosOrdenados.forEach((piloto) => {
    let row = TABLA.insertRow();
    row.insertCell(0).innerHTML = piloto.nombre;
    row.insertCell(1).innerHTML = piloto.equipo;
    row.insertCell(2).innerHTML = piloto.numero;
    row.insertCell(3).innerHTML = piloto.nacionalidad;
  });

  let celdas = document.querySelectorAll("#tablaPilotos td");

  celdas.forEach((celda) => {
    celda.addEventListener("click", function (e) {
      Array.from(TABLA.rows).forEach((fila) => {
        fila.classList.remove("destacar");
      });

      e.target.parentNode.classList.add("destacar");
    });
  });
}

function ordenarSegunParametro() {
  let respuesta = prompt("¿Quieres ordenar según Nombre o Equipo?");

  respuesta == "Nombre" ||
  respuesta == "Equipo" ||
  respuesta == "nombre" ||
  respuesta == "equipo"
    ? ordenar(respuesta)
    : (ERROR_MSG.innerHTML = "Has elegido mal el parámetro de ordenación");
}

function filtrarPorNacionalidad() {
  TABLA.innerHTML = "";
  let nacionalidad = prompt("Introduce el país de procedencia de los pilotos");
  let pilotosPorNacionalidad = pilotos.filter(
    (piloto) => piloto.nacionalidad === nacionalidad
  );

  pilotosPorNacionalidad.length == 0
    ? (ERROR_MSG.innerHTML = "No hay ningún piloto con esa nacionalidad")
    : (DATOS_MSG.innerHTML =
        "Los pilotos con nacionalidad " +
        pilotosPorNacionalidad[0].nacionalidad +
        " son:");

  TABLA.innerHTML =
    "<tr><th>Nacionalidad</th><th>Nombre</th><th>Equipo</th><th>Numero</th></tr>";
  pilotosPorNacionalidad.forEach((piloto) => {
    let row = TABLA.insertRow();
    row.insertCell(0).innerHTML = piloto.nacionalidad;
    row.insertCell(1).innerHTML = piloto.nombre;
    row.insertCell(2).innerHTML = piloto.equipo;
    row.insertCell(3).innerHTML = piloto.numero;
  });

  let celdas = document.querySelectorAll("#tablaPilotos td");

  celdas.forEach((celda) => {
    celda.addEventListener("click", function (e) {
      Array.from(TABLA.rows).forEach((fila) => {
        fila.classList.remove("destacar");
      });

      e.target.parentNode.classList.add("destacar");
    });
  });
}

// PAGINACIÓN
function paginarPilotos(pagina) {
  if (pagina < 1) pagina = 1;
  if (pagina > numeroPaginas) pagina = numeroPaginas;

  PAGINAS_PAGINADAS.innerHTML = "";

  for (
    let i = (pagina - 1) * pilotosPorPagina;
    i < pilotosPorPagina * pagina;
    i++
  ) {
    if (i < pilotos.length) {
      PAGINAS_PAGINADAS.innerHTML += pilotos[i].nombre + "<br>";
    } else {
      PAGINAS_PAGINADAS.innerHTML += "";
    }
  }

  NUM_PAGINA.innerHTML = pagina;
  if (pagina == 1) {
    BOTON_ANTERIOR.style.visibility = "hidden";
  } else {
    BOTON_ANTERIOR.style.visibility = "visible";
  }
  if (pagina == numeroPaginas) {
    BOTON_SIGUIENTE.style.visibility = "hidden";
  } else {
    BOTON_SIGUIENTE.style.visibility = "visible";
  }
}

function prevPage() {
  if (paginaActual > 1) {
    paginaActual--;
    paginarPilotos(paginaActual);
  }
}

BOTON_ANTERIOR.addEventListener("click", prevPage, false);

function nextPage() {
  if (paginaActual < numeroPaginas) {
    paginaActual++;
    paginarPilotos(paginaActual);
  }
}

BOTON_SIGUIENTE.addEventListener("click", nextPage, false);

function gestionarOpcion() {
  ERROR_MSG.innerHTML = " ";
  DATOS_MSG.innerHTML = " ";

  switch (OPCION.value) {
    case "1":
      ordenarSegunParametro();
      break;
    case "2":
      filtrarPorNacionalidad();
      break;
    default:
      ERROR_MSG.innerHTML = "Has escrito una opción no válida";
      break;
  }
}

ENVIAR.addEventListener("click", gestionarOpcion, false);
BOTON.addEventListener("click", mostrarTodos, false);

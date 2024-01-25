const SELECCION = document.querySelector("#equiposFutbol");
const DATOS = document.querySelector("#datos");
const OPCIONES = document.querySelectorAll("option");

let equipos = [];

function desplegarDatos(e) {
  let equipoSeleccionado = Number.parseInt(e.target.value);
  let textoDatos = "";

  textoDatos += "<h3>Datos del " + equipos[equipoSeleccionado].nombre + "</h3>";
  textoDatos +=
    "<p>Partidos Jugados " + equipos[equipoSeleccionado].pj + "</p>";
  textoDatos +=
    "<p>Partidos Ganados " + equipos[equipoSeleccionado].pg + "</p>";
  textoDatos +=
    "<p>Partidos Empatados " + equipos[equipoSeleccionado].pe + "</p>";

  DATOS.innerHTML = textoDatos;
}

function obtenerDatosJSON(callback) {
  let xhr = new XMLHttpRequest();

  xhr.responseType = "json";
  xhr.open("GET", "file/equipos.json", true);
  xhr.onload = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      let equiposJSON = xhr.response;
      equipos = [...equiposJSON];
      callback();
    } else {
      console.log("Ha habido un error al cargar el archivo: " + xhr.status);
    }
  };

  xhr.send(null);
}

function gestionOptions() {
  obtenerDatosJSON(() => {
    for (let i = 0; i < equipos.length; i++) {
      // <option value="inter">Inter Milán</option>
      let opcion = document.createElement("option");
      let textoOpcion = document.createTextNode(equipos[i].nombre);

      opcion.value = i;

      opcion.appendChild(textoOpcion);
      SELECCION.appendChild(opcion);

      SELECCION.addEventListener("change", desplegarDatos, false);
    }
  });
}

document.addEventListener("DOMContentLoaded", gestionOptions, false); // https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
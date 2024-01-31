const DATOS = document.querySelector("#datos");
const OPCIONES = document.querySelectorAll("option");
const BODY = document.querySelector("body");

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

async function obtenerDatosJSON() {
  try {
    const response = await fetch("file/equipos.json");
    if (!response.ok) {
      throw new Error(
        "Ha habido un error al cargar el archivo: " + response.status
      );
    }

    const respuestaJSON = await response.json();
    equipos = [...respuestaJSON];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function gestionOptions() {
  await obtenerDatosJSON();

  let select = document.createElement("select");

  for (let i = 0; i < equipos.length; i++) {
    let opcion = document.createElement("option");
    let textoOpcion = document.createTextNode(equipos[i].nombre);

    opcion.value = i;

    opcion.appendChild(textoOpcion);
    select.appendChild(opcion);
  }

  select.addEventListener("change", desplegarDatos, false);

  BODY.appendChild(select);
}

document.addEventListener("DOMContentLoaded", gestionOptions, false);

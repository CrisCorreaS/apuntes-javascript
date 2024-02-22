let personas = [];
let personasOrdenadas;
let numPersonasSeleccionadas = 1;

function gestionarNumeroPersonas(e) {
  numPersonasSeleccionadas = Number.parseInt(e.target.value);
}

function desplegarDatos(e) {
  $("#datos").html("");

  for (let i = 0; i < numPersonasSeleccionadas; i++) {
    let liElement = "<li>";
    let textoDatos = "";

    textoDatos += personasOrdenadas[i].name.first;
    textoDatos += ", ";
    textoDatos += personasOrdenadas[i].location.country;
    textoDatos += ", ";
    textoDatos += personasOrdenadas[i].email;
    textoDatos += ", ";
    textoDatos += personasOrdenadas[i].picture.medium;

    liElement += textoDatos;
    liElement += "</li>";

    $("#datos").append(liElement);
  }
}

async function obtenerDatosJSON() {
  await $.getJSON("file/personas.json", function (result) {
    let respuestaJSON = result;
    personas = [...respuestaJSON.results];

    personasOrdenadas = personas.sort((a, b) =>
      a.location.country.localeCompare(b.location.country)
    );
  });

  try {
    const response = await fetch("file/personas.json");
    if (!response.ok) {
      throw new Error(
        "Ha habido un error al cargar el archivo: " + response.status
      );
    }

    const respuestaJSON = await response.json();
    personas = [...respuestaJSON.results];

    personasOrdenadas = personas.sort((a, b) =>
      a.location.country.localeCompare(b.location.country)
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function gestionOptions() {
  await obtenerDatosJSON();

  // select con options
  let select = "<select>";

  for (let i = 0; i < personas.length; i++) {
    let opcion = "<option ";
    opcion += "value='" + (i + 1) + "'";
    opcion += ">" + (i + 1) + "</option>";

    select += opcion;
  }

  select += "</select>";

  $("body").append(select);

  document
    .querySelector("select")
    .addEventListener("change", gestionarNumeroPersonas, false);

  // <br>
  let br1 = "</br> </br>";
  $("body").append(br1);

  // <button>Ver Usuarios</button>
  let boton = "<button>Ver Usuarios</button>";
  $("body").append(boton);

  document
    .querySelector("button")
    .addEventListener("click", desplegarDatos, false);

  // <br>
  let br2 = "</br> </br>";
  $("body").append(br2);
}

document.addEventListener("DOMContentLoaded", gestionOptions, false);

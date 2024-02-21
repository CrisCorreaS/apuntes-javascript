const DATOS = document.querySelector("#datos"); // ol 
const BODY = document.querySelector("body"); // body

let personas = [];
let personasOrdenadas;
let numPersonasSeleccionadas = 1;

function gestionarNumeroPersonas(e) {
  numPersonasSeleccionadas = Number.parseInt(e.target.value);
}

function desplegarDatos(e) {
  DATOS.innerHTML = "";
  
  for (let i = 0; i < numPersonasSeleccionadas; i++) {
    let liElement = document.createElement("li");
    let textoDatos = "";

    textoDatos += personasOrdenadas[i].name.first;
    textoDatos += ", ";
    textoDatos += personasOrdenadas[i].location.country;
    textoDatos += ", ";
    textoDatos += personasOrdenadas[i].email;
    textoDatos += ", ";
    textoDatos += personasOrdenadas[i].picture.medium;

    let textoLi = document.createTextNode(textoDatos);

    liElement.appendChild(textoLi);

    DATOS.appendChild(liElement);
  }
}

async function obtenerDatosJSON() {
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
  let select = document.createElement("select");

  for (let i = 0; i < personas.length; i++) {
    let opcion = document.createElement("option");
    let textoOpcion = document.createTextNode(i + 1);

    opcion.value = i + 1;

    opcion.appendChild(textoOpcion);
    select.appendChild(opcion);
  }

  select.addEventListener("change", gestionarNumeroPersonas, false);

  BODY.appendChild(select);

  // <br>
  let br1 = document.createElement("br");
  let br2 = document.createElement("br");
  BODY.appendChild(br1);
  BODY.appendChild(br2);

  // <button>Ver Usuarios</button>
  let boton = document.createElement("button");
  let textoBoton = document.createTextNode("Ver Usuarios");

  boton.appendChild(textoBoton);
  boton.addEventListener("click", desplegarDatos, false);

  BODY.appendChild(boton);

  // <br>
  let br3 = document.createElement("br");
  let br4 = document.createElement("br");
  BODY.appendChild(br3);
  BODY.appendChild(br4);
}

document.addEventListener("DOMContentLoaded", gestionOptions, false);

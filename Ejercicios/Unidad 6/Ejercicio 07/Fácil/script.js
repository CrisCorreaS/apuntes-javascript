import { Edificio } from "./edificio.js";
let edificios = [];

window.addEventListener("load", inicio, true);

function inicio() {
  document
    .getElementById("formEdificio")
    .addEventListener("submit", agregarEdificio, true);
  document
    .getElementById("formPropietario")
    .addEventListener("submit", modificarPropietario, true);
  document
    .getElementById("mostrarEdificio")
    .addEventListener("click", mostrarEdificio, true);
}

function agregarEdificio(event) {
  event.preventDefault();
  let calle = document.getElementById("calle").value;
  let numero = document.getElementById("numero").value;
  let codigoPostal = document.getElementById("codigoPostal").value;
  let numPlantas = document.getElementById("plantas").value;
  let numPuertas = document.getElementById("puertas").value;
  let edificio = new Edificio(calle, numero, codigoPostal);
  edificio.agregarPlantasYPuertas(numPlantas, numPuertas);
  edificios.push(edificio);
  actualizarListaEdificios();
}

function actualizarListaEdificios() {
  let listaEdificiosDiv = document.getElementById("listaEdificios");
  listaEdificiosDiv.innerHTML = "";

  edificios.forEach((edificio, index) => {
    let label = document.createElement("label");
    let radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "edificio";
    radioButton.value = index;
    radioButton.id = "edificio" + index;
    label.appendChild(radioButton);

    label.appendChild(
      document.createTextNode(
        edificio.calle + ", " + edificio.numero + ", " + edificio.codigoPostal
      )
    );
    
    listaEdificiosDiv.appendChild(label);
    listaEdificiosDiv.appendChild(document.createElement("br"));
  });

  actualizarListaDirecciones();
}

function actualizarListaDirecciones() {
  let listaDirecciones = document.getElementById("listaDirecciones");
  listaDirecciones.innerHTML = "";

  edificios.forEach((edificio, index) => {
    let opcion = document.createElement("option");
    opcion.value = index;
    opcion.textContent = edificio.calle;
    listaDirecciones.appendChild(opcion);
  });
}

function modificarPropietario(event) {
  event.preventDefault();

  let planta = document.getElementById("planta").value;
  let puerta = document.getElementById("puerta").value;
  let propietario = document.getElementById("propietario").value;
  let radioButtons = document.getElementsByName("edificio");

  let edificioSeleccionado = Array.from(radioButtons).findIndex(
    (rb) => rb.checked
  );

  let edificio = edificios[edificioSeleccionado];

  if (edificio) {
    edificio.agregarPropietario(propietario, planta, puerta);
  }
}

function mostrarEdificio() {
  let edificioSeleccionado = document.getElementById("listaDirecciones").value;
  let edificio = edificios[edificioSeleccionado];

  if (edificio) {
    let tabla = document.getElementById("tablaEdificio");
    tabla.innerHTML = "";

    for (let i = 0; i < edificio.plantas.length; i++) {
      let fila = document.createElement("tr");
      let celdaPlanta = document.createElement("td");

      celdaPlanta.textContent = "Planta " + (i + 1);
      fila.appendChild(celdaPlanta);

      for (let j = 0; j < edificio.plantas[i].length; j++) {
        let celdaPropietario = document.createElement("td");

        celdaPropietario.textContent = edificio.plantas[i][j].propietario;
        celdaPropietario.setAttribute("data-planta", i);
        celdaPropietario.setAttribute("data-puerta", j);

        celdaPropietario.addEventListener("click", editarPropietario, true);

        fila.appendChild(celdaPropietario);
      }
      tabla.appendChild(fila);
    }
  }
}

function editarPropietario(event) {
  event.stopPropagation();

  let celda = event.currentTarget;
  let planta = celda.getAttribute("data-planta");
  let puerta = celda.getAttribute("data-puerta");
  let edificioSeleccionado = document.getElementById("listaDirecciones").value;
  let edificio = edificios[edificioSeleccionado];
  let propietario = edificio.plantas[planta][puerta].propietario;

  celda.innerHTML = "";
  let input = document.createElement("input");

  input.type = "text";
  input.value = propietario;
  celda.appendChild(input);
  input.focus();

  input.addEventListener("keypress", function (e) {
    if (e.which === 13) {
      guardarPropietario(planta, puerta, input.value);
      e.preventDefault();
    }
  });
}

function guardarPropietario(planta, puerta, nuevoPropietario) {
  let edificioSeleccionado = document.getElementById("listaDirecciones").value;
  let edificio = edificios[edificioSeleccionado];

  edificio.plantas[planta][puerta].propietario = nuevoPropietario;
  mostrarEdificio();
}

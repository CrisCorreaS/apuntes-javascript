import Edificio from "./edificio.js";

const EDIFICIO_CALLE = document.querySelector("#calle");
const EDIFICIO_NUMERO = document.querySelector("#numero");
const EDIFICIO_CODIGO_POSTAL = document.querySelector("#cp");
const EDIFICIO_PLANTAS = document.querySelector("#plantas");
const EDIFICIO_PUERTAS = document.querySelector("#puertas");
const EDIFICIO_ENVIAR = document.querySelector("#enviar1");
const ERROR_PRIMER_FORM = document.querySelector("#msgPrimerForm");

const LISTA_EDIFICIOS = document.querySelector("#listaEdificios");

const PROPIETARIO_PLANTA = document.querySelector("#plantasEdificio");
const PROPIETARIO_PUERTA = document.querySelector("#puertasEdificio");
const PROPIETARIO_NOMBRE = document.querySelector("#propietarioEdificio");
const PROPIETARIO_ENVIAR = document.querySelector("#enviar2");
const ERROR_SEGUNDO_FORM = document.querySelector("#msSegundoForm");

const SELECT_OPCIONES = document.querySelector("select");
const MOSTRAR_PROPIETARIO_ENVIAR = document.querySelector("#enviar3");

const TABLA = document.querySelector("table");

let edificios = [];
let letraPuertas = ["A", "B", "C", "D", "E", "F"];
let puertasPorPlanta = 0;
let contadorRadioButton = 0;
let edificioSeleccionado;
let contadorEdificios = 0;

// VALIDACIÓN DE LOS EDIFICIOS:
function validarCalle() {
  if (!EDIFICIO_CALLE.checkValidity()) {
    if (EDIFICIO_CALLE.validity.valueMissing) {
      error(EDIFICIO_CALLE, "Tienes que introducir la calle del edificio");
    }

    if (EDIFICIO_CALLE.validity.patternMismatch) {
      error(
        EDIFICIO_CALLE,
        "El nombre de la calle tiene que tener entre 4 y 80 caracteres"
      );
    }
    return false;
  }

  return true;
}

function validarNumero() {
  if (!EDIFICIO_NUMERO.checkValidity()) {
    if (EDIFICIO_NUMERO.validity.valueMissing) {
      error(EDIFICIO_NUMERO, "Tienes que introducir el número del edificio");
    }

    if (EDIFICIO_NUMERO.validity.rangeOverflow) {
      error(EDIFICIO_NUMERO, "El número del edificio debe de ser menor de 300");
    }

    if (EDIFICIO_NUMERO.validity.rangeUnderflow) {
      error(EDIFICIO_NUMERO, "El número del edificio debe de ser mayor de 1");
    }

    return false;
  }

  return true;
}

function validarCodigoPostal() {
  if (!EDIFICIO_CODIGO_POSTAL.checkValidity()) {
    if (EDIFICIO_CODIGO_POSTAL.validity.valueMissing) {
      error(
        EDIFICIO_CODIGO_POSTAL,
        "Tienes que introducir el código postal del edificio"
      );
    }

    if (EDIFICIO_CODIGO_POSTAL.validity.rangeOverflow) {
      error(
        EDIFICIO_CODIGO_POSTAL,
        "El código postal del edificio debe de ser menor de 52999"
      );
    }

    if (EDIFICIO_CODIGO_POSTAL.validity.rangeUnderflow) {
      error(
        EDIFICIO_CODIGO_POSTAL,
        "El código postal del edificio debe de ser mayor de 1000"
      );
    }

    return false;
  }

  return true;
}

function validarPlantas(elemento) {
  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "Tienes que introducir las plantas del edificio");
    }

    if (elemento.validity.rangeOverflow) {
      error(
        elemento,
        "El número de plantas del edificio debe de ser menor de 50"
      );
    }

    if (elemento.validity.rangeUnderflow) {
      error(elemento, "El edificio al menos debe de tener una planta");
    }

    return false;
  }

  return true;
}

function validarPuertas(elemento, plantas) {
  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "Tienes que introducir las puertas del edificio");
    }

    if (elemento.validity.rangeOverflow) {
      error(
        elemento,
        "El número de puertas del edificio debe de ser menor de 400"
      );
    }

    if (elemento.validity.rangeUnderflow) {
      error(elemento, "El edificio al menos debe de tener una puerta");
    }

    return false;
  }

  if (elemento.id === "puertas") {
    if (elemento.value % plantas.value == 0) {
      puertasPorPlanta = elemento.value / plantas.value;
      return true;
    } else if (plantas.value > elemento.value) {
      error(elemento, "El edificio al menos debe tener una puerta por planta");
      return false;
    } else {
      error(
        elemento,
        "El edificio debe de tener el mismo número de puertas en cada planta"
      );
      return false;
    }
  } else {
    if (puertasPorPlanta > 8) {
      error(elemento, "El edificio no puede tener más de 8 puertas por planta");
      return false;
    }
    return true;
  }
}

function error(elemento, mensaje) {
  switch (elemento.id) {
    case "calle":
    case "numero":
    case "cp":
    case "plantas":
    case "puertas":
      ERROR_PRIMER_FORM.innerHTML = mensaje;
      ERROR_PRIMER_FORM.className = "errorMensaje";
      break;
    case "plantasEdificio":
    case "puertasEdificio":
    case "propietarioEdificio":
      ERROR_SEGUNDO_FORM.innerHTML = mensaje;
      ERROR_SEGUNDO_FORM.className = "errorMensaje";
      break;
  }

  elemento.className = "error";
  elemento.focus();
}

function borrarError() {
  for (let j = 0; j < 3; j++) {
    let formulario = document.forms[j];

    for (let k = 0; k < formulario.elements.length; k++) {
      formulario.elements[k].className = "";
    }
  }

  ERROR_PRIMER_FORM.innerHTML = " ";
  ERROR_SEGUNDO_FORM.innerHTML = " ";
  ERROR_PRIMER_FORM.className = "";
  ERROR_SEGUNDO_FORM.className = "";
}

// Validar la creación de edificio, crear edificio, lista de edificios y las opciones de elegir
function validar(e) {
  e.preventDefault();
  borrarError();

  if (
    validarCalle() &&
    validarNumero() &&
    validarCodigoPostal() &&
    validarPlantas(EDIFICIO_PLANTAS) &&
    validarPuertas(EDIFICIO_PUERTAS, EDIFICIO_PLANTAS)
  ) {
    if (
      !edificios.some(
        // El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
        (edificio) =>
          edificio.calle === EDIFICIO_CALLE.value &&
          edificio.numero === EDIFICIO_NUMERO.value &&
          edificio.codigoPostal === EDIFICIO_CODIGO_POSTAL.value
      )
    ) {
      edificios.push(
        new Edificio(
          EDIFICIO_CALLE.value,
          EDIFICIO_NUMERO.value,
          EDIFICIO_CODIGO_POSTAL.value,
          EDIFICIO_PLANTAS.value,
          EDIFICIO_PUERTAS.value
        )
      );

      edificioSeleccionado = edificios.length - 1;

      edificios[edificioSeleccionado].establecerDatos();

      alert(
        `Se ha registrado el nuevo edificio con dirección: ${EDIFICIO_CALLE.value} nº${EDIFICIO_NUMERO.value}. CP:${EDIFICIO_CODIGO_POSTAL.value}`
      );

      showEdificios();
      crearOptions();
    } else {
      alert(
        `El edificio con dirección: ${EDIFICIO_CALLE.value} nº${EDIFICIO_NUMERO.value}. CP:${EDIFICIO_CODIGO_POSTAL.value} ya había sido creado anteriormente`
      );
    }
  }
}

// MOSTRAR EDIFICIOS:
function showEdificios() {
  let br = document.createElement("br");
  let inputRadioButton = document.createElement("input");
  let textoRadio = document.createTextNode(
    edificios[contadorRadioButton].calle +
      " nº " +
      edificios[contadorRadioButton].numero
  );
  /*
    In JavaScript, properties and methods are accessed differently. When you have getters and setters defined in a class, like in your Edificio class, they act as properties that are accessed using the dot notation without parentheses.
      - The edificio.calle and edificio._calle work as property access because the getter get calle() allows you to access _calle as if it were a public property. The underscore convention (_calle) is used to denote that it is a private property, but JavaScript does not enforce this privacy; it's just by convention.
      - The edificio.calle() syntax does not work because calle is not a method; it's an accessor property. In JavaScript, accessor properties are defined with get and set keywords and are accessed without parentheses.

    -> The get syntax binds an object property to a function that will be called when that property is looked up. So when you access edificio.calle, internally it calls the getter function you defined and returns the value of _calle. This is a way to expose private variables with controlled access, potentially allowing for validation or other logic to run when getting or setting the value.
      - edificio.calle: Correct, accesses the getter method for the _calle property.
      - edificio._calle: Technically works because JavaScript does not enforce private properties, but it goes against the encapsulation principle.
      - edificio.calle(): Incorrect, because calle is not a method, it's an accessor property and should not be called with parentheses.
    */

  inputRadioButton.type = "radio";
  inputRadioButton.name = "opcionEdificio"; // Tienen que tener el mismo "name", pero deben tener diferente "id" y "value"
  inputRadioButton.id = contadorRadioButton;
  inputRadioButton.value = contadorRadioButton;

  LISTA_EDIFICIOS.appendChild(inputRadioButton);
  LISTA_EDIFICIOS.appendChild(textoRadio);
  LISTA_EDIFICIOS.appendChild(br);
  contadorRadioButton++;
}

// CREAR OPCIONES:
function crearOptions() {
  let opcion = document.createElement("option");
  let textoOpcion = document.createTextNode(
    edificios[edificioSeleccionado].calle +
      " nº " +
      edificios[edificioSeleccionado].numero
  );

  opcion.value = contadorEdificios;
  opcion.appendChild(textoOpcion);

  SELECT_OPCIONES.appendChild(opcion);

  contadorEdificios++;
}

EDIFICIO_ENVIAR.addEventListener("click", validar, false);

// Elegimos el edificio seleccionado según su id
function manejarCambioRadioButton(event) {
  // Con `event.target` obtenemos el radio button que fue seleccionado
  const radioSeleccionado = event.target;
  edificioSeleccionado = radioSeleccionado.id;
}

// Gestión de un evento cuando hacemos un cambio en el div que tiene la lista de los edificios (con sus radiobuttons)
LISTA_EDIFICIOS.addEventListener("change", function (event) {
  // Comprobamos que el evento proviene de un input tipo radio
  if (event.target.type === "radio") {
    manejarCambioRadioButton(event);
    document.querySelector("#modificarPropietarios").classList.remove("oculto");
  }
});

// VALIDACIÓN PROPIETARIO
function validarNombre() {
  if (!PROPIETARIO_NOMBRE.checkValidity()) {
    if (PROPIETARIO_NOMBRE.validity.valueMissing) {
      error(
        PROPIETARIO_NOMBRE,
        "Tienes que introducir el nombre del propietario"
      );
    }

    if (PROPIETARIO_NOMBRE.validity.patternMismatch) {
      error(
        PROPIETARIO_NOMBRE,
        "El nombre del propietario tiene que tener entre 4 y 30 caracteres"
      );
    }

    return false;
  }

  return true;
}

// Validación de la existencia de la Puerta
function validarExistenciaPlantaPuerta() {
  if (
    parseInt(PROPIETARIO_PLANTA.value) <=
      parseInt(edificios[edificioSeleccionado].plantas) &&
    parseInt(PROPIETARIO_PUERTA.value) <=
      parseInt(edificios[edificioSeleccionado].puertasPorPlantas)
  ) {
    return true;
  }
  error(
    PROPIETARIO_PUERTA,
    "No existe la puerta " +
      PROPIETARIO_PUERTA.value +
      " en la planta " +
      PROPIETARIO_PLANTA.value +
      " del edificio " +
      edificios[edificioSeleccionado].calle +
      " nº " +
      edificios[edificioSeleccionado].numero +
      ". Este edificio tiene " +
      edificios[edificioSeleccionado].plantas +
      " plantas de " +
      edificios[edificioSeleccionado].puertasPorPlantas +
      " pisos cada una."
  );
  return false;
}

function validarPropietarios(e) {
  e.preventDefault();
  borrarError();

  if (
    validarPlantas(PROPIETARIO_PLANTA) &&
    validarPuertas(PROPIETARIO_PUERTA, PROPIETARIO_PLANTA) &&
    validarNombre() &&
    validarExistenciaPlantaPuerta()
  ) {
    edificios[edificioSeleccionado].modificarDatos(
      PROPIETARIO_PLANTA.value,
      PROPIETARIO_PUERTA.value,
      PROPIETARIO_NOMBRE.value
    );

    alert(
      `Se ha registrado a ${PROPIETARIO_NOMBRE.value} en el piso ${
        PROPIETARIO_PLANTA.value
      }º${edificios[edificioSeleccionado].letraEdificio(
        PROPIETARIO_PUERTA.value
      )} del edificio ${edificios[edificioSeleccionado].calle}`
    );
  }
}

PROPIETARIO_ENVIAR.addEventListener("click", validarPropietarios, false);

// TODO
// CREACIÓN DE LAS TABLAS
function showTable(e) {
  // <tr><th colspan="puertasPorPlantas+1">Edificio X</th></tr>
  TABLA.innerHTML = `<tr>
        <th colspan='${edificios[edificioSeleccionado].puertasPorPlantas + 1}'>
          Edificio: ${edificios[edificioSeleccionado].calle} nº ${
    edificios[edificioSeleccionado].numero
  }
        </th>
      </tr>`;

  /*
    <tr>
      <!-- th -> pisosPorPlantas + 1 -->
      <th></th>
      <th>Piso A</th>
      <th>Piso B</th>
      <th>Piso C</th>
      <th>Piso D</th>
      ...
    </tr>
  */
  let trPuertas = document.createElement("tr");
  let contadorPlantas = 1;

  for (let l = 0; l <= edificios[edificioSeleccionado].puertasPorPlantas; l++) {
    let thPuerta = document.createElement("th");
    let txtTh;
    if (l == 0) {
      txtTh = document.createTextNode(" ");
    } else {
      txtTh = document.createTextNode("Puerta " + letraPuertas[l - 1]);
    }
    thPuerta.appendChild(txtTh);

    trPuertas.appendChild(thPuerta);
  }

  TABLA.appendChild(trPuertas);

  /*
      <!-- tr -> plantas -->
      <tr>
        <!-- th + td -> pisosPorPlantas -->
        <th>Planta 1</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        ...
      </tr>
      <tr>
        <th>Planta 2</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
        ...
      </tr>
      ...
  */
  for (let j = 1; j <= parseInt(edificios[edificioSeleccionado].plantas); j++) {
    let tr = document.createElement("tr");

    for (
      let k = 0;
      k < edificios[edificioSeleccionado].puertasPorPlantas + 1;
      k++
    ) {
      let tdPlantas;
      let txtPlantas;

      if (k == 0) {
        tdPlantas = document.createElement("th");
        txtPlantas = document.createTextNode("Planta " + contadorPlantas);

        contadorPlantas++;
      } else {
        tdPlantas = document.createElement("td");
        let propietarioPiso;

        tdPlantas.setAttribute("data-planta", j);
        tdPlantas.setAttribute("data-puerta", k);

        if (edificios[edificioSeleccionado].showPropietario(j, k) == null) {
          propietarioPiso = " ";
        } else {
          propietarioPiso = edificios[edificioSeleccionado].showPropietario(
            j,
            k
          );
        }

        txtPlantas = document.createTextNode(propietarioPiso);
      }

      tdPlantas.addEventListener("click", editarPropietario, false);

      tdPlantas.appendChild(txtPlantas);
      tr.appendChild(tdPlantas);
    }
    TABLA.appendChild(tr);
    e.preventDefault;
  }
}

function editarPropietario(e) {
  e.stopPropagation();

  let registro = e.currentTarget;
  let planta = registro.getAttribute("data-planta");
  let puerta = registro.getAttribute("data-puerta");
  let propietarioActual = registro.textContent;

  registro.innerHTML = "";
  let input = document.createElement("input");

  input.type = "text";
  input.value = propietarioActual;
  registro.appendChild(input);
  input.focus();

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      edificios[edificioSeleccionado].modificarDatos(
        planta,
        puerta,
        input.value
      );
      registro.innerHTML = input.value;
      registro.removeChild(input);
      e.preventDefault();
    }
  });
}

MOSTRAR_PROPIETARIO_ENVIAR.addEventListener("click", showTable, false);

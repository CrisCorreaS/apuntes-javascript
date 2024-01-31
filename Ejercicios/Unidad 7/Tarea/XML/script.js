const SELECT_FROM = document.querySelector("#from");
const SELECT_TO = document.querySelector("#to");
const CHANGE = document.querySelector("i");
const CONVERTIR = document.querySelector("#submit");
const CANTIDAD = document.querySelector("#importe");
const ERROR_MSG = document.querySelector("#errorMsg");
const RESULTADO = document.querySelector("#resultado");
const INFO = document.querySelector("#info");

let monedas = [];
let opcionFromSeleccionada = "1";
let opcionToSeleccionada = "4";

function error(elemento, mensaje) {
  ERROR_MSG.innerHTML = mensaje;
  ERROR_MSG.className = "errorMensaje";

  elemento.className = "error";
  elemento.focus();
}

function borrarError() {
  let formulario = document.forms[0];

  for (let k = 0; k < formulario.elements.length; k++) {
    formulario.elements[k].className = "";
  }

  ERROR_MSG.innerHTML = " ";
  ERROR_MSG.className = "";
}

function validarCantidad() {
  if (!CANTIDAD.checkValidity()) {
    if (CANTIDAD.validity.valueMissing) {
      error(CANTIDAD, "Tienes que introducir una cantidad");
    }

    if (CANTIDAD.validity.rangeOverflow) {
      error(CANTIDAD, "La cantidad no puede ser mayor de 1.000.000");
    }

    if (CANTIDAD.validity.rangeUnderflow) {
      error(CANTIDAD, "La cantidad no puede ser menor de 0");
    }

    return false;
  }

  return true;
}

function calcularTasaCambio(e) {
  e.preventDefault();
  borrarError();
  if (validarCantidad()) {
    let cantidadACambiar = CANTIDAD.value;

    let tasaCambio =
      monedas[Number.parseInt(opcionFromSeleccionada) - 1].precio /
      monedas[Number.parseInt(opcionToSeleccionada) - 1].precio;

    RESULTADO.innerHTML = `${cantidadACambiar} 
      ${monedas[Number.parseInt(opcionFromSeleccionada) - 1].siglas} son 
      <b>${(cantidadACambiar * tasaCambio).toFixed(4)}</b>
      ${monedas[Number.parseInt(opcionToSeleccionada) - 1].siglas}`;
    
    INFO.innerHTML = `1 
      ${monedas[Number.parseInt(opcionFromSeleccionada) - 1].siglas} =
      ${tasaCambio.toFixed(4)} 
      ${monedas[Number.parseInt(opcionToSeleccionada) - 1].siglas}
      <br/>
      1 
      ${monedas[Number.parseInt(opcionToSeleccionada) - 1].siglas} =
      ${(1/tasaCambio).toFixed(4)} 
      ${monedas[Number.parseInt(opcionFromSeleccionada) - 1].siglas}
      `;
  }
}

CONVERTIR.addEventListener("click", calcularTasaCambio, false);

function crearSelectsOptions() {
  let i = 1;

  monedas.forEach((moneda) => {
    let opcion = document.createElement("option");
    let textoOpcion;

    switch (moneda.siglas) {
      case "USD":
        textoOpcion = document.createTextNode(
          `${moneda.siglas} (Dólares Estadounidenses)`
        );
        break;
      case "AUD":
        textoOpcion = document.createTextNode(
          `${moneda.siglas} (Dólares Australianos)`
        );
        break;
      case "CAD":
        textoOpcion = document.createTextNode(
          `${moneda.siglas} (Dólares Canadienses)`
        );
        break;
      case "EUR":
        textoOpcion = document.createTextNode(`${moneda.siglas} (Euros)`);
        break;
      case "GBP":
        textoOpcion = document.createTextNode(
          `${moneda.siglas} (Libra Esterlina)`
        );
        break;
      case "JPY":
        textoOpcion = document.createTextNode(
          `${moneda.siglas} (Yenes Japoneses)`
        );
        break;
    }

    opcion.value = i;

    opcion.appendChild(textoOpcion);
    SELECT_FROM.appendChild(opcion);

    let copiaOpcion = opcion.cloneNode(true);

    if (i == 4) {
      copiaOpcion.selected = "selected"; // Así hacemos que en el segundo select, los euros sean la opción por defecto
    }
    SELECT_TO.appendChild(copiaOpcion);

    i++;
  });
}

function cargarXML(xml) {
  let documentoXML = xml.responseXML;
  let resultadosXML = documentoXML.getElementsByTagName("Rate");

  for (let i = 0; i < resultadosXML.length; i++) {
    let iTxt = i.toString();

    switch (iTxt) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "6":
      case "7":
        let moneda = {
          siglas: resultadosXML[i].getElementsByTagName("Code")[0].textContent,
          precio: resultadosXML[i].getElementsByTagName("Ask")[0].textContent,
        };

        monedas.push(moneda);
    }
  }

  crearSelectsOptions();
}

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    cargarXML(this);
  }
};
xhr.open(
  "GET",
  "https://api.nbp.pl/api/exchangerates/tables/c/?format=xml", // Cuidado con poner lo del formato xml esprofeso
  true
);
xhr.send();

SELECT_FROM.addEventListener("change", function () {
  opcionFromSeleccionada = this.value;
});

SELECT_TO.addEventListener("change", function () {
  opcionToSeleccionada = this.value;
});


function cambiar() {
  SELECT_FROM.value = opcionToSeleccionada;
  SELECT_TO.value = opcionFromSeleccionada;

  let helper = opcionFromSeleccionada;
  opcionFromSeleccionada = opcionToSeleccionada;
  opcionToSeleccionada = helper;
}

CHANGE.addEventListener("click", cambiar, false);
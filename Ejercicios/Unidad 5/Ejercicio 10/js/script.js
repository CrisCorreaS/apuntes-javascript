import Cliente from "./cliente.js";

document.getElementById("enviar").addEventListener("click", validar, false);

const PARTE1 = document.getElementById("parte1");
const PARTE2 = document.getElementById("parte2");

const OPCIONES = document.getElementsByName("option");
const NUMERO_DOCUMENTO = document.getElementById("number");
const DIA = document.getElementById("day");
const MES = document.getElementById("month");
const ANO = document.getElementById("year");
const RECORDAR = document.getElementById("recordar");

const MENSAJE_DOCUMENTO = document.getElementById("mensajeDocumento");
const MENSAJE_FECHA = document.getElementById("mensajeFecha");

let clientes = [];

// Validaciones
function validarDocumentos() {
  let check = false;
  let validez = false;
  let respuesta = false;

  for (let i = 0; i < OPCIONES.length; i++) {
    if (OPCIONES[i].checked) {
      if (OPCIONES[i].value === "dni") {
        if (validarDNI(NUMERO_DOCUMENTO)) {
          validez = true;
        }
      } else if (OPCIONES[i].value === "pasaporte") {
        if (validarPasaporte(NUMERO_DOCUMENTO)) {
          validez = true;
        }
      }
      check = true;
    }
  }

  if (!check) {
    error(NUMERO_DOCUMENTO, "Tienes que marcar el tipo de documento");
  }

  if (check && validez) {
    respuesta = true;
  }

  return respuesta;
}

function validarPasaporte(elemento) {
  const REGEX = /^[A-Z]{3}[0-9]{6}$/;

  if (REGEX.test(elemento.value)) {
    return true;
  } else {
    error(
      elemento,
      "El pasaporte está mal. Tiene que tener 3 letras en mayúscula y 6 números"
    );
    return false;
  }
}

function validarDNI(elemento) {
  const REGEX = /^[0-9]{8}[a-zA-Z]{1}$/;

  if (REGEX.test(elemento.value)) {
    return true;
  } else {
    error(
      elemento,
      "El dni está mal. Tiene que tener ocho números y una letra"
    );
    return false;
  }
}

function validarFecha() {
  let ahora = new Date();
  let anoActual = ahora.getFullYear();
  let mesActual = ahora.getMonth() + 1;
  let diaActual = ahora.getDate();

  if (!DIA.checkValidity() && !MES.checkValidity() && !ANO.checkValidity()) {
    if (DIA.validity.valueMissing) {
      error(DIA, "Tienes que introducir un día");
    } else if (MES.validity.valueMissing) {
      error(MES, "Tienes que introducir un mes");
    } else {
      error(ANO, "Tienes que introducir un año");
    }

    return false;
  }

  if (ANO.value > anoActual - 18) {
    error(ANO, "No puedes ser menor de edad");
    return false;
  } else if (ANO.value == anoActual - 18 && MES.value > mesActual) {
    error(MES, "No puedes ser menor de edad");
    return false;
  } else if (
    ANO.value == anoActual - 18 &&
    MES.value == mesActual &&
    DIA.value > diaActual
  ) {
    error(DIA, "No puedes ser menor de edad");
    return false;
  }

  if (DIA.value < 1 || MES.value < 1 || ANO.value < 1) {
    error(DIA, "El día, mes o año no pueden ser menores a 1");
    return false;
  }

  if (MES.value > 12) {
    error(MES, "El mes no puede ser mayor a 12");
    return false;
  } else if (MES.value == 2 && DIA.value > 29) {
    error(DIA, "Febrero no puede tener más de 29 días");
    return false;
  } else if (
    (MES.value == 4 || MES.value == 6 || MES.value == 9 || MES.value == 11) &&
    DIA.value > 30
  ) {
    error(
      DIA,
      "Los meses de abril, junio, septiembre y noviembre no pueden tener más de 30 días"
    );
    return false;
  }

  let fecha = new Date(ANO.value + "/" + MES.value + "/" + DIA.value);

  // devuelve true si el argumento no es un número. Como Date en JavaScript se convierte internamente a un número (el número de milisegundos desde el 1 de enero de 1970), si la fecha es inválida, se convertirá a NaN y isNaN() devolverá true
  if (isNaN(fecha.getTime())) {
    error(DIA, "La fecha es inválida");
    return false;
  }

  return true;
}

function error(elemento, mensaje) {
  let idElemento = elemento.id;

  elemento.className = "error";
  elemento.focus();

  switch (idElemento) {
    case "number":
    case "option":
      MENSAJE_DOCUMENTO.innerHTML = mensaje;
      MENSAJE_DOCUMENTO.className = "mensajeError";
      break;
    case "day":
    case "month":
    case "year":
      MENSAJE_FECHA.innerHTML = mensaje;
      MENSAJE_FECHA.className = "mensajeError";
      break;
    case "botones":
      MENSAJE_BOTONES.innerHTML = mensaje;
      MENSAJE_BOTONES.className = "mensajeError";
      break;
      
  }
}

function borrarError() {
  let formulario = document.forms[0];
  let mensajes = [MENSAJE_DOCUMENTO, MENSAJE_FECHA];

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }

  for (let j = 0; j < mensajes.length; j++) {
    mensajes[j].className = "normal";
    mensajes[j].innerHTML = "";
  }
}

function validar(e) {
  borrarError();
  e.preventDefault();

  // Así validamos todo al mismo tiempo en vez de ir uno a uno
  let documento = validarDocumentos();
  let fechaValida = validarFecha();

  if (documento && fechaValida) {
    // Para crear el LocalStorage
    if (RECORDAR.checked) {
      // Para almacenar los datos en LocalStorage
      localStorage.setItem("dni", NUMERO_DOCUMENTO.value);
      localStorage.setItem(
        "fechaNacimiento",
        DIA.value + "/" + MES.value + "/" + ANO.value
      );
    }
    // window.location.href = "./clave.html"; -> Así nos redirigiríamos a una nueva página web

    // Usamos classList en vez de className porque si no, no podemos
    PARTE1.className = "ocultar";
    PARTE2.className = "ensinar";

    // Creación del Cliente
    if (!verificarCliente(NUMERO_DOCUMENTO.value)) {
      cliente = new Cliente(
        NUMERO_DOCUMENTO.value,
        DIA.value + "/" + MES.value + "/" + ANO.value
      );
      clientes.push(cliente);
      alert("Bienvenido por primera vez");
    } else {
      alert("Bienvenido de nuevo");
    }

    // Parte 2
    console.log(buscarClaveCliente(NUMERO_DOCUMENTO.value));
    gestionInicioParte2();

    return true;
  } else {
    return false;
  }
}

// Para recuperar los datos con el LocalStorage
window.addEventListener("DOMContentLoaded", (e) => {
  // Guardamos los valores de dni y fechaNacimiento en las variables
  let dni = localStorage.getItem("dni");
  let fechaNacimiento = localStorage.getItem("fechaNacimiento");

  if (dni && fechaNacimiento) { // Si uno de los valores del LocalStorage está vacío devolverá "null", lo cual lo interpretará como un false
    NUMERO_DOCUMENTO.value = dni;

    let opcionDNI = document.querySelector('input[name="option"][value="dni"]'); // Seleccionamos el botón de "dni" para poder checkearlo
    opcionDNI.checked = true;

    let fechaPartes = fechaNacimiento.split("/");
    DIA.value = fechaPartes[0];
    MES.value = fechaPartes[1];
    ANO.value = fechaPartes[2];
  }
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Creación de Cliente
let cliente;

function verificarCliente(documento) {
  // Busca si un cliente tiene el mismo número de documento con el método find() -> find() devuelve el primer elemento en el array que cumple con la condición proporcionada que en este caso es la función flecha
  let clienteExistente = clientes.find(
    (cliente) => {return cliente.documentacion === documento} // A esta función flecha le tenemos que pasar el cliente como parámetro y este hace una validación ya que llamamos con el getter del atributo _documentación (cliente.documentación -> es el getter no el atributo!!!) al valor que tiene, y miramos si ese valor se corresponde con el que le pasamos (en este caso le pasaríamos NUMERO_DOCUMENTACION.value)
  );

  return clienteExistente ? clienteExistente.clave : null;
}

function buscarClaveCliente(documento) {
  if (cliente.documentacion === documento) {
    return cliente.clave;
  } else {
    return null;
  }
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PARTE 2
const TEXTO_CLAVE = document.getElementById("clave");

let numerosBotones = [];
let numeroClaveCompletar = Math.ceil(Math.random() * 6);

function shuffleBotones() {
  while (numerosBotones.length < 10) {
    let numero = Math.floor(Math.random() * 10);

    if (!numerosBotones.includes(numero)) {
      numerosBotones.push(numero);
    }
  }

  for (let i = 0; i < 10; i++){
    document.getElementById(i).innerHTML = numerosBotones[i];
    document.getElementById(i).value = numerosBotones[i];
  }
}

function gestionInicioParte2() {
  shuffleBotones();

  TEXTO_CLAVE.innerHTML = "Completa las " + numeroClaveCompletar + " posiciones que faltan a tu clave de seguridad";

  if (numeroClaveCompletar != 6) {
    for (let i = 6; i > numeroClaveCompletar; i--){
      document.getElementById("option" + i).disabled = true;
    }
  }
}


const BOTONES = document.getElementById("botones");
const ALL_BOTONES = document.querySelectorAll("#botones button"); // Obtenemos todos los botones -> querySelectorAll() devuelve una lista de nodos del documento que coinciden con el grupo de selectores especificados
const MENSAJE_BOTONES = document.getElementById("claveMensaje");



ALL_BOTONES.forEach(function (boton) { // Hacemos un forEach en donde llamamos a una función anónima con el parámetro "boton" que sería cada document.getElementById("1")...
  boton.addEventListener("click", function () {
    let claveAleatoriaCliente = "";

    claveAleatoriaCliente = buscarClaveCliente(NUMERO_DOCUMENTO.value);

    if(claveAleatoriaCliente){
      for (let i = 0; i < numeroClaveCompletar; i++) {
        if (boton.value == claveAleatoriaCliente[i]) {
          boton.style.visibility = "hidden";
          document.getElementById("option" + (i + 1)).innerHTML = "*";
        } else {
          error(BOTONES, "La clave es incorrecta");
          return false;
        }
      }
      alert("La clave es correcta, tiene acceso a su cuenta");
      return true;
    }
  });
});


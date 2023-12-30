const TEXTO = document.getElementById("texto");
const COLORES = document.getElementById("colores");
const ENVIAR = document.getElementById("enviar");
const MENSAJE_ERROR = document.getElementById("mensajeError");
const DIV_PARRAFOS = document.getElementById("parrafos");

ENVIAR.addEventListener("click", crearParrafo);

function crearParrafo(e) {
  e.preventDefault();

  MENSAJE_ERROR.innerHTML = "";

  let parrafo = document.createElement("p");
  let textoParrafo = document.createTextNode(TEXTO.value);
  
  if (TEXTO.value.trim() == "") {
    MENSAJE_ERROR.innerHTML = "No se ha podido crear el párrafo";
    return;
  } else {
    parrafo.appendChild(textoParrafo);
    parrafo.style.background = COLORES.value;

    DIV_PARRAFOS.appendChild(parrafo);
  }
}
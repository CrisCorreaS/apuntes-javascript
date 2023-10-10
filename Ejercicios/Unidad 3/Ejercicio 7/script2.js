//Cristina Correa

setTimeout(showTime(), 2000);

let intervalID = setInterval(showTimeStop(), 2000);

function showTime() {
  let fechaActual = new Date();
  document.getElementById("reloj1").innerHTML = fechaActual;
}

function showTimeStop() {
  let fechaActual = new Date();
  document.getElementById("reloj2").innerHTML = fechaActual;
  clearInterval(intervalID); // Detenemos el intervalo después de la primera ejecución
}

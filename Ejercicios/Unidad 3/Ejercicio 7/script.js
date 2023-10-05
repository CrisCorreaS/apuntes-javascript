//Cristina Correa

setTimeout(function () {
  let fechaActual = new Date();
  document.getElementById("reloj1").innerHTML = fechaActual;
}, 2000);

let intervalID = setInterval(function () {
  let fechaActual = new Date();
  document.getElementById("reloj2").innerHTML =fechaActual;
  clearInterval(intervalID); // Detenemos el intervalo después de la primera ejecución
}, 2000);

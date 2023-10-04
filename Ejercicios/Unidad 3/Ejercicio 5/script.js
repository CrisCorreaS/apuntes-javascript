//Cristina Correa Segade

let respuesta = prompt("Escribe un número entero");

let respuestaInt = Number.parseInt(respuesta);

let numeroExponencial = respuestaInt.toExponential();
let numeroCuatroDecimales = respuestaInt.toFixed();
let numeroBinario = respuestaInt.toString(2);
let numeroOctal = respuestaInt.toString(8);
let numeroHexadecimal = respuestaInt.toString(16);

alert(respuesta + "\n" + numeroExponencial + "\n" + numeroCuatroDecimales + "\n" + numeroBinario + "\n" + numeroOctal + "\n" + numeroHexadecimal);
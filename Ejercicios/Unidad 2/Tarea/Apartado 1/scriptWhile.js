const multiplicar = 7;
const sumar = 8;
const dividir = 9;

let final1 = false;
let final2 = false;
let final3 = false;
let cont = 0;
let contador = 0;
let i = 9;

document.write("<h2>Tabla de multiplicar del 7:</h2>");
while (!final1) {
  let resultado = cont * multiplicar;
  document.write("<p>7 x " + cont + " = " + resultado + "</p>");
  if (cont == 10) {
    final1 = true;
  }
  cont++;
}

document.write("<h2>Tabla de sumar del 8:</h2>");
while (!final2) {
  let resultado = contador + sumar;
  document.write("<p>8 + " + contador + " = " + resultado + "</p>");
  if (contador == 10) {
    final2 = true;
  }
  contador++;
}

document.write("<h2>Tabla de dividir del 9:</h2>");
while (!final3) {
  let resultado = i / dividir;
  document.write("<p>" + i + " : 9 = " + resultado + "</p>");
  if (i == 90) {
    final3 = true;
  }
  i += 9;
}

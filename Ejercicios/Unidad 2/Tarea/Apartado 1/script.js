const multiplicar = 7;
const sumar = 8;
const dividir = 9;

let final1 = false;
let final2 = false;
let cont = 0;
let contador = 0;

document.write("<h2>Tabla de multiplicar del 7:</h2>");
do {
  let resultado = contador * multiplicar;
  document.write("<p>7 x " + contador + " = " + resultado + "</p>");
  if (contador == 10) {
    final1 = true;
  }
  contador++;
} while (!final1);

document.write("<h2>Tabla de sumar del 8:</h2>");
while (!final2) {
  let resultado = cont + sumar;
  document.write("<p>8 + " + cont + " = " + resultado + "</p>");
  if (cont == 10) {
    final2 = true;
  }
  cont++;
}

document.write("<h2>Tabla de dividir del 9:</h2>");
for (let i = 9; i <= 90; i += 9) {
  let resultado = i / dividir;
  document.write("<p>" + i + " : 9 = " + resultado + "</p>");
}

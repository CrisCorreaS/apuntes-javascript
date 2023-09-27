const multiplicar = 7;
const sumar = 8;
const dividir = 9;

document.write("<h2>Tabla de multiplicar del 7:</h2>");
for (let cont = 0; cont <= 10; cont++) {
  let resultado = cont * multiplicar;
  document.write("<p>7 x " + cont + " = " + resultado + "</p>");
}

document.write("<h2>Tabla de sumar del 8:</h2>");
for (let contador = 0; contador <= 10; contador++) {
  let resultado = contador + sumar;
  document.write("<p>8 + " + contador + " = " + resultado + "</p>");
}

document.write("<h2>Tabla de dividir del 9:</h2>");
for (let i = 9; i <= 90; i += 9) {
  let resultado = i / dividir;
  document.write("<p>" + i + " : 9 = " + resultado + "</p>");
}

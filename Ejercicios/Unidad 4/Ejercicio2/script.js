// Cristina Correa

let letrasDNI = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];
let dnis = [];

window.addEventListener("load", inicio, true);

function inicio() {
  document.getElementById("salida");

  document.getElementById("boton").addEventListener("click", ejecuta, true);
}

function ejecuta() {
  let letra = document.getElementById("letra").value;
  let salida = document.getElementById("salida");

  let posicion = letrasDNI.indexOf(letra);

  for (let cont = 1; cont <= 999; cont++) {
    if (Number.parseInt(cont) % 23 == posicion) {
      if (cont < 10) {
        dnis.push("00" + cont);
      } else if (cont < 100) {
        dnis.push("0" + cont);
      } else {
        dnis.push(cont);
      }
    }
  }

  salida.innerHTML = "Los dnis con la letra " + letra + " : " + dnis.toString();
}

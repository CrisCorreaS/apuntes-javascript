//Cristina Correa Segade

let diaCumpleaños = prompt("Escribe el día de tu cumpleaños");
let mesCumpleaños = prompt("Escribe el mes de tu cumpleaños");

let numericoMesCumpleaños;
let texto = "Los años en los que tu cumpleaños cae en domingo son: ";

switch (mesCumpleaños) {
  case "Enero":
  case "enero":
    numericoMesCumpleaños = 0;
    break;
  case "Febrero":
  case "febrero":
    numericoMesCumpleaños = 1;
    break;
  case "Enero":
  case "enero":
    numericoMesCumpleaños = 2;
    break;
  case "Marzo":
  case "marzo":
    numericoMesCumpleaños = 3;
    break;
  case "Abril":
  case "abril":
    numericoMesCumpleaños = 4;
    break;
  case "Mayo":
  case "mayo":
    numericoMesCumpleaños = 5;
    break;
  case "Junio":
  case "junio":
    numericoMesCumpleaños = 6;
    break;
  case "Julio":
  case "julio":
    numericoMesCumpleaños = 7;
    break;
  case "Agosto":
  case "agosto":
    numericoMesCumpleaños = 8;
    break;
  case "Septiembre":
  case "septiembre":
    numericoMesCumpleaños = 8;
    break;
  case "Octubre":
  case "octubre":
    numericoMesCumpleaños = 9;
    break;
  case "Noviembre":
  case "noviembre":
    numericoMesCumpleaños = 10;
    break;
  case "Diciembre":
  case "diciembre":
    numericoMesCumpleaños = 11;
    break;
  default:
    numericoMesCumpleaños = -1;
    break;
}

if (numericoMesCumpleaños != -1) {
  let fechaTexto = "2023," + (numericoMesCumpleaños + 1) + "," + diaCumpleaños;
  let fecha = new Date(fechaTexto);
  let diaSemana = fecha.getDay();
  if (diaSemana == 0) {
    texto += fecha.getFullYear() + ", ";
  }
  for (let cont = 2024; cont <= 2100; cont++) {
    fecha.setFullYear(fecha.getFullYear() + 1);
    diaSemana = fecha.getDay();
    if (diaSemana == 0) {
      texto += fecha.getFullYear() + ", ";
    }
  }
  alert(texto);
} else {
  alert("Has escrito mal el mes");
}

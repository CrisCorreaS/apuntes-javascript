let edad = prompt("Por favor, introduce tu edad");
let generacion;

if (edad < 0) {
  alert("Es un número menor de 0 y no es válido");
} else if (edad >= 0 && edad <= 12) {
  generacion = 0;
} else if (edad >= 13 && edad <= 26) {
  generacion = 1;
} else if (edad >= 27 && edad <= 60) {
  generacion = 2;
} else {
  generacion = 3;
}

switch (generacion) {
  case 0:
    alert("Niño");
    break;
  case 1:
    alert("Joven");
    break;
  case 2:
    alert("Adulto");
    break;
  case 3:
    alert("Jubilado");
    break;
}

let edad = prompt("Por favor, introduce tu edad");

if (edad < 0) {
  alert("Es un número menor de 0 y no es válido");
} else if (edad >= 0 && edad <= 12) {
  alert("Niño");
} else if (edad >= 13 && edad <= 26) {
  alert("Joven");
} else if (edad >= 27 && edad <= 60) {
  alert("Adulto");
} else {
  alert("Jubilado");
}

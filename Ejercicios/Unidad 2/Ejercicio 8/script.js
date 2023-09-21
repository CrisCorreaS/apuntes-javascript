let respuestaUsuario = prompt("¿Cuál fue el primer presidente de la democracia española?");

const respuestaCorrecta = "Adolfo Suárez";

while (respuestaUsuario != respuestaCorrecta) {
  if (respuestaUsuario == "Adolfo") {
    alert("Te falta el apellido");
  } else if (respuestaUsuario == "Suárez") {
    alert("Te falta el nombre");
  } else {
    alert("ERROR. Inténtelo de nuevo.");
  }
  respuestaUsuario = prompt("¿Cuál fue el primer presidente de la democracia española?");
}

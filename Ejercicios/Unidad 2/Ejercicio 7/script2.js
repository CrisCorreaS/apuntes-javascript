const respuestaCorrecta = "Suárez";

let respuestaUsuario = prompt("¿Cuál es el apellido del primer presidente de la democracia española?");

while (respuestaUsuario != respuestaCorrecta) {
  alert("La respuesta es incorrecta. Intente de nuevo.");
  respuestaUsuario = prompt("¿Cuál es el apellido del primer presidente de la democracia española?");
}

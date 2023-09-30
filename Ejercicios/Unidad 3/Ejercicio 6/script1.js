//Cristina Correa
let respuestaUsuario = prompt("Escribe tu nombre completo (nombre y apellidos):");

//Apartado 1: El tamaño del nombre más los apellidos (sin contar espacios).
let tamañoNombreUsuario = respuestaUsuario.replace(/ /g, "").length; //uso una expresión regular que busca todos los espacios globales de la cadena (la "g" hace que sean globales) y los reemplaza por "" que quiere decir que los borra
document.write("<p>El tamaño del nombre más los apellidos (sin contar espacios) es: " + tamañoNombreUsuario + "</p>");

//Apartado 2: La cadena en minúsculas y en mayúsculas.
let cadenaMinusculas = respuestaUsuario.toLowerCase();
let cadenaMayusculas = respuestaUsuario.toUpperCase();

document.write(
  "<p>Tu nombre y apellidos en minúsculas = " + cadenaMinusculas + "</p>"
);

document.write(
  "<p>Tu nombre y apellidos en mayúsculas = " + cadenaMayusculas + "</p>"
);

//Apartado 3: Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga
let partes = respuestaUsuario.split(" "); // Hago que la cadena, si hay un espacio, se divida y cada parte se almacene en un array llamado partes
document.write(
  "<p>Nombre: " + partes[0] + "</p><p>Apellido 1: " + partes[1] + "</p><p><p>Apellido 2: " + partes[2] + "</p>"
);

//Apartado 4: Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido.  Ej. Para Marcos Prado Fernández sería mpradof
let propuesta1 =
  partes[0].charAt(0).toLowerCase() +
  partes[1].toLowerCase() +
  partes[2].charAt(0).toLowerCase();
document.write("<p>Nombre de Usuario 2: " + propuesta1 + "</p>");

//Apartado 5: Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: ej. MarPraFer
let propuesta2 =
  (partes[0].charAt(0).toUpperCase() + partes[0].slice(1, 3).toLowerCase()) +
  (partes[1].charAt(0).toUpperCase() + partes[1].slice(1, 3).toLowerCase()) +
  (partes[2].charAt(0).toUpperCase() + partes[2].slice(1, 3).toLowerCase());
  document.write("<p>Nombre de Usuario 2: " + propuesta2 + "</p>");
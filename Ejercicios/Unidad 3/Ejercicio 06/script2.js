//Cristina Correa

let respuestaNombre = prompt("Escribe tu nombre");
let respuestaApellido1 = prompt("Escribe tu primer apellido");
let respuestaApellido2 = prompt("Escribe tu segundo apellido");

//Apartado 1: El tamaño del nombre más los apellidos (sin contar espacios).
let nombre = respuestaNombre.trim();
let apellido1 = respuestaApellido1.trim();
let apellido2 = respuestaApellido2.trim();

let nombreApellidos = nombre.concat(apellido1.concat(apellido2));

document.write(
  "<p>Tu nombre y apellidos, sin contar espacios, tienen: " +
    nombreApellidos.length +
    " caracteres</p>"
);

//Apartado 2: La cadena en minúsculas y en mayúsculas.
let cadenaMinusculas = nombre.toLowerCase() + " " + apellido1.toLowerCase() + " " + apellido2.toLowerCase();
let cadenaMayusculas =  nombre.toUpperCase() + " " +  apellido1.toUpperCase() + " " +  apellido2.toUpperCase();

document.write(
  "<p>Tu nombre y apellidos en minúsculas = " + cadenaMinusculas + "</p>"
);

document.write(
  "<p>Tu nombre y apellidos en mayúsculas = " + cadenaMayusculas + "</p>"
);

//Apartado 3: Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga
document.write(
  "<p>Nombre = " + nombre + "</p><p>Apellido 1 = " + apellido1 + "</p><p>Apellido 2 = " + apellido2 + "</p>"
);

//Apartado 4: Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido.  Ej. Para Marcos Prado Fernández sería mpradof
document.write(
    "<p>Nombre de Usuario 1: " + nombre.toLowerCase().slice(0,1) + apellido1.toLowerCase() + apellido2.toLowerCase().slice(0,1) + "</p>"
);

//Apartado 5: Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: ej. MarPraFer
document.write(
  "<p>Nombre de Usuario 2: "
    + (nombre.toUpperCase().slice(0, 1) + nombre.toLowerCase().slice(1, 3)) 
    + (apellido1.toUpperCase().slice(0,1) + apellido1.toLowerCase().slice(1,3)) 
    + (apellido2.toUpperCase().slice(0,1) + apellido2.toLowerCase().slice(1,3)) + "</p>"
);
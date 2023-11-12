/*
WEB STORAGE
  - Permite almacenar datos localmente en el navegador del usuario
  - Es más seguro y almacena más información que las cookies
  - El web storage se almacena por origen (dominio y protocolo): todas las páginas del mismo origen pueden acceder a los mismos datos
  - Para muchos es mejor que las cookies

  Tenemos el localStorage y el sessionStorage
*/

// Comprobación de que el navegador soporta webStorage
if (typeof (Storage) !== "undefined") {
  alert("El navegador soporta webStorage"); // Sí que lo soporta en mi caso -> El código después del bloque de este if-else debería de estar dentro del if(), pero como cada vez hay menos navegadores que no lo soportan, lo vamos a hacer después del bloque if-else-> https://caniuse.com/?search=webStorage
} else {
    alert("El navegador NO soporta webStorage");
}


// LOCALSTORAGE
// window.localStorage -> almacena datos SIN fecha de expiración. window no es necesario porque se sobreentiende, es como el alert()
// Crear un elemento con localStorage -> SIEMRPE son cadenas!!!
// Dos formas de hacerlo
localStorage.setItem("nombre", "Ada"); // Mejor porque la otra forma sí que no es soportada por todos los navegadores, pero esta sí
localStorage.apellido = "Lovelace"; // NO es recomendada


// Consultar un elemento
alert(localStorage.getItem("nombre")); // Ada -> MEJOR
alert(localStorage.apellido); // Lovelace -> PEOR


// Borrar un elemento
localStorage.removeItem("apellido");
alert(localStorage.getItem("nombre") + " " + localStorage.getItem("apellido")); // Ada null -> null es el valor que ahora ha tomado el webStorage de apellido al eliminarlo


// Borrartodos los elementos
localStorage.clear();
alert(localStorage.getItem("nombre") + " " + localStorage.getItem("apellido")); // null null -> Borra todos los localStorage




// SESIONSTORAGE
// window.sessionStorage -> almacena los datos durante una sesión (si se cierra la ventana o el navegador, desaparecen)
// es igual que localStorage pero tiene la diferencia de que el tiempo de vida es diferente ya que no dura para siempre, solo hasta que se cierra la ventana/navegador
sessionStorage.setItem("nombre", "Ada");
sessionStorage.apellido = "Lovelace";


// Consultar un elemento
alert(sessionStorage.getItem("nombre")); // Ada
alert(sessionStorage.apellido); // Lovelace


// Borrar un elemento
sessionStorage.removeItem("apellido");
alert(sessionStorage.getItem("nombre") + " " + sessionStorage.getItem("apellido")); // Ada null


// Borrar todos los elementos
sessionStorage.clear();
alert(sessionStorage.getItem("nombre") + " " + sessionStorage.getItem("apellido")); // null null

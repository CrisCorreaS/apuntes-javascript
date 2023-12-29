/*
En esta lección vamos a ver los cuadros de diálogo, que son tres métodos más del objeto window que utilizaremos muchísimo para interactuar con el usuario. Son tres:
  - alert() -> muestra un mensaje a un usuario, pero no recoge ningún valor.
  - prompt() -> muestra un mensaje a un usuario y, además, permite que el usuario introduzca un valor en su interior. Este valor quedará recogido en la variable a la que asignemos el prompt.
  - confirm() -> muestra un mensaje al usuario y dos botones. Si el usuario pulsa “Aceptar”, devuelve true y si pulsa “Cancelar” o cierra la ventana, devuelve false. Tanto true como false se almacenarán en la variable a la que asignemos el confirm.
*/
//MÉTODOS QUE CREAN CUADROS DE DIÁLOGO:
//alert(<mensaje>) -> Muestra un mensaje al usuario y no devuelve ningún valor
alert("Hola caracola");

//prompt(<mensaje>[,<texto por defecto>]) -> Muestra un mensaje al usuario y un campo que puede contener o no texto por defecto (el texto por defecto es como un padding)
//Lo que introduzca el usuario se almacenará en una variable a la que se asigna
var respuesta1 = prompt("¿Cuál es tu nombre", "Introduce un nombre");
alert("Hola, " + respuesta1);

//confirm(<mensaje>) -> muestra un mensaje al usuario y dos botones. Si el usuario pulsa "Aceptar" devuelve true; si pulsa "Cancelar" o cierra la ventana, devuelve false
var respuesta2 = confirm("¿Te gusta JavaScript?");
if (respuesta2) {
    alert("Me alegro!")
} else {
    alert("Pues es una pena")
}

//Se puede hacer ese if-else con un operador ternario
alert((respuesta2) ? "Me alegro!" : "Pues es una pena");
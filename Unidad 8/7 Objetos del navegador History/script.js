/*
Con History podemos manipular el historial de sesión del navegador con facilidad: es decir, podemos consultar las URL de las páginas que ha visitado un usuario en el navegador.
Concretamente vamos a hablar de una propiedad de este objeto:
    -length, que como os podéis imaginar, almacena el número de páginas que contiene nuestro historial.

Y, por supuesto, los métodos, que pueden ser de gran utilidad:
    -back: carga la URL anterior del historial (es decir, sería como hacer “atrás” en el navegador).
    -forward: lo inverso al caso anterior: carga la URL siguiente del historial (si la hay).
    -go: va a una página en concreto del historial que pasamos por parámetro.

    Como veis, de History veremos una propiedad y tres métodos nada más, pero nos van a servir para movernos por el historial utilizando Javascript sin necesidad de interactuar con el propio navegador.
*/

/*CARACTERÍSTICAS
    -Guarda información de las URLs visitadas por el usuario dentro de una ventana del explorador. No nos estamos refiriendo al historial completo de todo el navegador, sino al de la página que nos encontramos en ese momento 
    -No hay un estándar público pero la mayoría de los navegadores soportan este objeto
*/

//PROPIEDADES DEL OBJETO HISTORY
//length -> devuelve el número de URLs en el historial de la página
alert("URLs del historial: " + history.length);

//MÉTODOS DEL OBJETO HISTORY
//back() -> carga la url anterior en el historial
function atras() {
    history.back();
}

//forward() -> carga la url siguiente en el historial
function adelante() {
  history.forward();
}

//go(<número | url>) -> va a una página concreta del historial. Si indicamos un número positivo va hacia delante un número de páginas; si indicamos un número negativo, va hacia atrás un número de páginas; si indicamos una url o parte de ella va a la url en concreto
function ir() {
  var numero = prompt("Indica un número para moverte en el historial");
  history.go(numero);
}

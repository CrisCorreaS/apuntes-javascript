/*
Es muy importante aprender a trabajar con los métodos del objeto window, que son los que veremos en profundidad en el siguiente vídeo con ejemplos de uso:
    -open(): permite abrir una nueva ventana, pudiendo indicar qué url se va a cargar en ella y qué características va a tener.
    -close(): en este caso permite cerrar la ventana que ha llamado al método.
    -resizeBy() y resizeTo(): redimensiona la ventana a un número de píxeles en relación con el tamaño que tiene actualmente, o al número de píxeles indicamos, respectivamente.
    -moveBy() y moveTo(): al igual que los anteriores, mueve la ventana un número de píxeles respecto a la posición actual, o a una posición indicada, respectivamente.
    -scrollBy() y scrollTo(): mueve el scroll de la ventana un número de píxeles con respecto al scroll actual o a un número indicado, respectivamente.
    -focus(): pone el foco en la ventana que llama al método.
    -print(): imprime la ventana en la que nos encontramos o bien la que llama al método.
    -stop(): detiene la carga de la página.
*/

//MÉTODOS DE WINDOW MÁS IMPORTANTES
var miVentana; //Crear fuera de las funciones para poder acceder a ella

//open(<URL>, <name>, <especificaciones>)
/* 
En el parámetro URL puede haber una dirección de la web o una de una carpeta interna, pero hay que tener
cuidado y si queremos poner una de una web, tenemos que poner el protocolo delante (http:// o cualquier otro)

En el parámetro de name hay varios valores que se pueden cubrir:
    -blank -> Se crea dentro de una nueva ventana
    -parent -> Se crea dentro del mismo frame en donde nos encontramos
    -self -> Va a sustituir la página en donde nos encontramos
    -top -> Va a sustituir todos los grupos de frames que se van a cargar dentro de la página
    -name -> Este puede ser cualquier valor y sirve para ponerle el nombre a la página, no es el title de la página

En el parámetro de especificaciones también se pueden poner un monton de ellas:
    -fullscreen = yes/no -> para que ocupe toda la pantalla
    -width = pixels -> para que ocupen un ancho determinado
    -height = pixels -> para que ocupen un alto determinado
    -resizable = yes/no -> si queremos que se le pueda cambiar el tamaño
    -menubar = yes/no -> si queremos que aparezca la barra de menú
    ...
*/

function crearVentana1() {
  miVentana = window.open("http://www.google.com", "", "");
  //El botón al pulsarlo, crea una nueva ventana que nos lleva directamente a Google
}

function crearVentana2() {
  miVentana = window.open("", "", "width = 500, height = 200");
  //El botón al pulsarlo, crea una nueva ventana con las especificaciones de alto y ancho de tipo about:blank
}

function crearVentana3() {
  miVentana = window.open("", "", "width = 500, height = 200");
  miVentana.document.write("<h1>Mi ventana</h1>");
}


//close() -> cierra una ventana en concreto
function cerrarVentana() {
    miVentana.close();
    //Cierra la última ventana que hemos creado con miVentana, ya que es la referencia que tiene, si abrimos las tres, solo cerrará la tercera
}


//resizeBy(<numero pixeles ancho>, <numero pixeles alto>) -> redimensiona una ventana un número de píxeles respecto a su tamaño real (aumenta el tamaño si son números positivos y lo disminuye si son números negativos)
function aumentarVentana() {
    miVentana.resizeBy(10, 10);
}

function disminuirVentana() {
    miVentana.resizeBy(-10, -10);
}


//resizeTo(<numero pixeles ancho>, <numero pixeles alto>) -> redimensiona una ventana al número de píxeles
function redimensionarVentana() {
    miVentana.resizeTo(200, 500);
}


//moveBy(<numero pixeles ancho>, <numero pixeles alto>) -> mueve una ventana un número de píxeles respecto a su posición actual (aumenta el tamaño si son números positivos y lo disminuye si son números negativos)
function moverVentanaHaciaAbajo() {
    miVentana.moveBy(0, 100);
}

function moverVentanaHaciaArriba() {
    miVentana.moveBy(0, -100);
}

function moverVentanaHaciaDerecha() {
    miVentana.moveBy(100, 0)
}

function moverVentanaHaciaIzquierda() {
    miVentana.moveBy(-100, 0);
}


//moveTo(<numero pixeles ancho>, <numero pixeles alto>) -> mueve una ventana a una posición en concreto
//scrollBy(<numero pixeles ancho>, <numero pixeles alto>) -> mueve las barras de scroll de una ventana un número de píxeles respecto a su posición actual (aumenta el tamaño si son números positivos y lo disminuye si son números negativos)
//scrollTo(<numero pixeles ancho>, <numero pixeles alto>) -> mueve las barras de scroll de una ventana a una posición en concreto

//focus() -> pone el foco en la ventana indicada, la superpone a cualquier otra
function enfocar() {
    miVentana.focus();
}


//print() -> imprime la ventana indicada
function imprimir() {
    print(); //Aparece la función de imprimir en la ventana actual
    miVentana.print(); //Aparece la función de imprimir en la ventana creada
}

//stop() -> detener la carga de una página
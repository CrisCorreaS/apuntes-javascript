/*
Un nuevo objeto de navegador: Screen.

Nuevamente tiene un nombre muy intuitivo: representa una referencia al objeto screen (pantalla) asociado a la ventana que está siendo visualizada. 
Y al igual que los objetos anteriores, no es necesario poner window.screen: si utilizamos screen directamente nos estaremos refiriendo a lo mismo.

En esta lección vamos a ver cuáles son las propiedades más importantes de este objeto:
    -width: representa el ancho de la pantalla.
    -height: representa el alto de la pantalla.
    -availWidth: representa el ancho de la pantalla sin la barra de tareas.
    -availHeight: representa el alto de la pantalla sin la barra de tareas.
    -colorDepth: indica la profundidad de color que estamos utilizando en nuestra pantalla.
Como véis, no son muchas y son bastante intuitivas. En el vídeo veréis cómo varían los resultados al utilizar unas u otras.
*/

/* CARACTERÍSTICAS:
    -Conteiene la información de la ventana del visitante
    -No hay un estándar público pero la mayoría de los navegadores soportan Screen
    -No tiene métodos, solo atributos
*/

//PROPIEDADES DEL OBJETO SCREEN:

var texto = "";

//Tamaño de pantalla del usuario
texto += "<br/> Ancho: " + screen.width;
texto += "<br/> Alto: " + screen.height;

//Tamaño de la pantalla sin la barra de tareas
texto += "<br/> Ancho sin barra: " + screen.availWidth;
texto += "<br/> Alto sin barra: " + screen.availHeight;

//Prefundidad de color de la pantalla
texto += "<br/> Profundidad: " + screen.colorDepth;

//Resolución de color en bits por píxel
texto += "<br/> Resolución: " + screen.pixelDepth;

document.getElementById("pantalla").innerHTML = texto;

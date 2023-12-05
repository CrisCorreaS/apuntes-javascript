/* */
/*
DOM -> Es un estandar que define cómo acceder a documentos XML, HTML...
Mediate JS podemos acceder y actualizar el contenido de un HTML dinámicamente cambiando, creando o borrando elementos; modificando atributos, etc

Hay que saber distinguir lo que es un elemento, un atributo y el texto:
Ej:
    <p id="parrafo1">Este es el párrafo 1</p>
    "p" -> Es el elemento
    "id" -> Es el atributo del elemento
    "Este es el párrafo 1" -> Es el texto que va dentro del elemento
*/ 

/*
Si no usamos en la etiqueta de script de html el defer (<script src="script.js" defer></script>) tenemos que hacer:
window.load = inicio;
window.addEventListener("load", inicio, fase);
*/

// function incicio(){
document.getElementById("cambiarTextos").addEventListener("click", cambiarTextos, false);
document.getElementById("cambiarClases").addEventListener("click", cambiarClases, false);
document.getElementById("quitarClases").addEventListener("click", quitarClases, false);
//}

function cambiarTextos(){}
function cambiarClases() {}
function quitarClases() {}
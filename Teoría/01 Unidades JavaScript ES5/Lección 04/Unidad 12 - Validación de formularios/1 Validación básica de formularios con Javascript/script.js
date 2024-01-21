/*
Nos adentramos en una de las partes más interesantes y más útiles de la programación con Javascript: la validación de formularios desde el lado del cliente (navegador).

En primer lugar hay que tener en cuenta que la validación con Javascript no garantiza que los datos enviados son correctos. Es, simplemente, una cuestión de experiencia de usuario que evita mandar datos erróneos al servidor y hacer operaciones innecesarias. Pero es posible deshabilitar el Javascript del navegador o utilizar la consola del desarrollador para cambiar estos datos, por lo que no se puede asegurar su validez.

Por eso, la seguridad en la validación de un formulario debe realizarse en el lado del servidor y en la base de datos.

Y dicho esto, hay que tener en cuenta que es posible validar un formulario del lado del cliente de varias maneras.

En este vídeo veremos un formulario con nombre, teléfono, fecha de nacimiento, sexo y un checkbox “Mayor de 18” y validaremos su información únicamente utilizando Javascript y sin tener en cuenta las características de los campos de los formularios de HTML5.
*/

/*
PASOS PARA VALIDAR UN FORMULARIO:
  - Paso 1: Crear el form en HTML -> index.html
  - Paso 2: Seleccionar el nombre del formulario (el "id" de la etiqueta "form") -> script.js
  - Paso 3: Saber cómo seleccionar elementos del formulario -> script.js
  - Paso 4: Hacer la función iniciar() al enviar un formulario -> script.js
  - Paso 5: Hacer la validación del "nombre" -> script.js
  - Paso 6: Hacer la validación del "teléfono" -> script.js
  - Paso 7: Hacer la validación de la "fecha de nacimiento" -> script.js
  - Paso 8: Hacer la validación del "mayor de 18" -> script.js
  - Paso 9: Aunar todas las validaciones en una función -> script.js
  - Paso 10: Crear la clase css "error" -> style.css
  - Paso 11: Desarrollar la función error -> script.js
  - Paso 12: Desarrollar la función limpiarError -> script.js
  - Paso 13: Usar la clase error
  - Paso 14:
  - Paso 15:
  - Paso 16:


* En los métodos, si están en singular, nos devuelve un elemento, si están en plural, nos
devuelven un array. 
Ej: .getElementById("id") -> devuelve un elemento
Ej: .getElementsByTagName("etiqueta") -> devuelve un array de etiquetas
*/


// Paso 2:
// SELECCIÓN DEL FORMULARIO

// Conociendo el "id"
var formulario = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"]; // forms -> es un array de formularios (de todos los que haya en nuestra página), al que hay que pasarle el nombre del "id" (este caso) o la posición del formulario en la página

// Conociendo el número de formulario que es en la página
var formulario3 = document.getElementsByTagName("form")[0]; // getElementsByTagName() -> coge todos los elementos que tengan una etiqueta con el parámetro que se le pase, en este caso <form>, y los guarda como un array. Si queremos el primer formulario, tenemos que coger el primer elemento del array, así que haríamos un getElementsByTagName("form")[0]
var formulario2 = document.forms[0]; // forms -> es un array de formularios (de todos los que haya en nuestra página), al que hay que pasarle el nombre del "id" o la posición del formulario en la página (este caso)



// Paso 3:
// SABER COMO SELECCIONAR ELEMENTOS DEL FORMULARIO

/* Hay varias formas:
  - getElementById("idElemento") -> devuelve un elemento con un "id" determinado ->es la forma más fácil y rápida porque solo puede haber un elemento que tenga un id (pero no todos los elementos tienen id, eso depende de cómo se haga el html). 
  - .elements[] -> devuelve un arraylist de todos los "input" del formulario
  - getElementsByTagName("etiqueta")[posición_array] -> devuelve un array con elementos de un tipo de etiqueta ("input", "select", ...) -> luego hay que indicar la posición que queremos
  - getElementsByName("nombre_elemento")[posición_array] -> devuelve un array con elementos que tienen el mismo "name" -> se puede usar para los elementos que tengan el mismo "name" como son los "<input type="radio" />" que tienen el mismo "name" pero diferente "value" porque son opciones diferentes que se pueden elegir
*/


// Paso 4:
// HACER LA FUNCIÓN INICIAR:
// Para que una vez que se haya creado la página, podamos ejecutar el código de validación tenemos que:
window.onload = iniciar; // iniciar es una función pero no le tenemos que poner paréntesis aquí porque si ponemos paréntesis, se ejecutaría nada más leer la línea; pero nosotros tenemos que esperar a que se cargue la página y luego comience la función iniciar

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false); // Hacemos un evento que valide todos los campos del formulario al hacer click en el elemento "enviar" del formulario (<input type="submit" value="Enviar" id="enviar" />)
}


// Paso 5:
// HACER LA VALIDACIÓN DEL NOMBRE
function validarNombre() {
  // Vamos a validar que el nombre no esté vacío
  var elemento = document.getElementById("nombre");

  // Paso 13
  limpiarError(elemento); // Tenemos que coger "elemento" (document.getElementById("nombre")) en vez de "elemento.value" (document.getElementById("nombre").value)

  if (elemento.value == "") {
    alert("El campo 'nombre' no puede estar vacío");

    // Paso 13
    error(elemento); // Tenemos que coger "elemento" (document.getElementById("nombre")) en vez de "elemento.value" (document.getElementById("nombre").value)

    return false;
  } else {
    return true;
  }
}
    
    
// Paso 6:
// HACER LA VALIDACIÓN DEL TELEFONO
function validarTelefono() { // No nos importa que esté vacío pero queremos que lo que esté cubierto sea un número
    var elemento = document.getElementById("telefono");

    if (isNaN(elemento.value)) {
        alert("El teléfono tiene que ser numérico");
        return false;
    } else {
        return true;
    }
}


// Paso 7:
// HACER LA VALIDACIÓN DE LA FECHA DE NACIMIENTO
function validarFecha() { // Queremos validar que la fecha sea correcta
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var fecha = new Date(ano + "/" + mes + "/" + dia); // Esta es una forma de crear una fecha: YYYY/MM/DD

    // Si fecha devuelve un número, significa que es correcta, si no, es incorrecta
    if (isNaN(fecha)) {
        alert("Los campos de la fecha son incorrectos")
        return false;
    } else {
        alert("La fecha es " + fecha);
        return true;
    }
}


// Paso 8:
// HACER LA VALIDACIÓN DE MÁS DE 18
function validarCheck() {
    var campoCheck = document.getElementById("mayor");

    if (!campoCheck.checked) { // Si el campo no está con check
        alert("Debes ser mayor de edad");
        return false;
    } else {
        return true;
    }
}



// Paso 9
// AUNAR TODAS LAS VALIDACIONES EN UNA FUNCIÓN -> Tiene que comprobar que todas las funciones de validación anteriores han devuelto "true"
function validar(e) {
    if (validarNombre() && validarTelefono() && validarFecha() && validarCheck() && confirm("Pusa aceptar si deseas enviar el formulario")) { // comprobamos que todas las validaciones devuelvan "true" y que también devuelva "true" un confirm() (si da "Aceptar" es "true" y si da "Cancelar" es "false");
        return true;
    } else {
        e.preventDefault(); // esto hace que se evite el evento por defecto asociado a la acción (en nuestro caso, al hacer click al enviar el formulario, no se enviarían los datos a procesar.php (<form action="procesar.php" ...>))
        return false;
    }
}


// Paso 11
// DESARROLLAR LA FUNCIÓN ERROR
function error(elemento) {
    elemento.className = "error"; // Vamos a cambiarle al elemento que sea, la "class" a "error"
    elemento.focus();
}


// Paso 12
// DESARROLLAR LA FUNCIÓN LIMPIARERROR
function limpiarError(elemento) {
    elemento.className = ""; // Así quitamos cualquier "class" ya que no lo estamos usando en ninguna etiqueta, es el atributo que decide si hay o no errores
}
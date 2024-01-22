/*
Al igual que en la lección anterior cargábamos archivos de texto de manera asíncrona utilizando AJAX, podemos hacer lo mismo trabajando con XML.

Para ello, usamos los mismos métodos que vimos en la lección anterior y que son los siguientes:
  - open (method, url, async): especifica el tipo de la petición, donde:
    - method: puede ser GET o POST.
    - url: la localización del archivo, en este caso, XML.
    - async: que a su vez es true (asíncrono) o false (síncrono).

  - send(): envía la petición al servidor (utilizado para GET).

  - send(cadena): envía la petición al servidor (utilizado para POST).

Veamos a continuación cómo procesar un archivo XML y cargarlo asíncronamente con AJAX.
*/

const BOTON = document.querySelector("#cargaCatalogo");
const TABLA = document.querySelector("#demo");

function cargarXML(xhr) {
  // 1º Capturamos la respuesta que nos va a devolver el servidor
  let documentoXML = xhr.responseXML; // En el anterior poníamos "responseText" porque nos devolvía un formato texto y ahora ponemos "responseXML" porque devuelve XML

  // Empezamos a crear el html de la tabla
  let tabla = "<tr><th>Artista</th><th>Título</th></tr>"; // Esta es la cabecera

  // Sacamos los datos del XML como si estuviéramos con el DOM, en vez de usar "document.getElementById()" u otros, tenemos que usar "documentoXML.getElementById()" y otros
  let discos = documentoXML.getElementsByTagName("CD"); // devuelve un array de todos los discos (elementos con la etiqueta CD)

  for (let i = 0; i < discos.length; i++) {
    tabla += "<tr><td>";
    tabla += discos[i].getElementsByTagName("ARTIST")[0].textContent;
    /* 
    discos[i].getElementsByTagName("ARTIST") -> dame el artista de cada uno de los discos.

    -> Como solo hay una etiqueta "ARTIST" en cada etiqueta "CD" hay que poner [0] para que de únicamente el primer valor de "ARTIST" (que es el único)
    -> Tampoco queremos toda la etiqueta, solo queremos su contenido de texto por lo que tenemos que poner ".textContent"
    
    discos[i].getElementsByTagName("ARTIST")[0].textContent
    */

    tabla += "</td><td>";
    tabla += discos[i].getElementsByTagName("TITLE")[0].textContent;
    tabla += "</td></tr>";
  }

  TABLA.innerHTML = tabla;
}

function cargarCatalogo() {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Cargamos el XML
      cargarXML(this);
    }
  };

  xhr.open("GET", "catalogo.xml", true);

  xhr.send();
}

BOTON.addEventListener("click", cargarCatalogo, false);

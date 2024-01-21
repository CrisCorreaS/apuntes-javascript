/*
Mediante AJAX es posible cargar contenido de un archivo de texto de manera asíncrona utilizando una serie de métodos que debemos conocer y que son propios del objeto XMLHttpRequest 

Estos métodos son los siguientes:
  -> open (method, url, async): especifica el tipo de la petición, donde:
    - method: puede ser GET o POST.
    - url: la localización del archivo.
    - async: que a su vez es true (asíncrono) o false (síncrono).

  -> send(): envía la petición al servidor (utilizado para GET).

  -> send(cadena): envía la petición al servidor (utilizado para POST).
*/

const BOTON_CAMBIO = document.querySelector("button");
const TEXTO = document.querySelector("#texto");

function cambiaContenido() {
  let xhr = new XMLHttpRequest();

  // Ahora definimos qué función va a ser llamada cuando cambie la propiedad "readyStateChange". Solo se necesitan instrucciones en esta función, da igual el nombre hasta el punto de que puede ser una función anónima
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      TEXTO.innerHTML = this.responseText; // ponemos "this.responseText" porque va a extraer texto de un documento de texto, si fuera extraer un XML tendríamos que poner "this.responseXML"
    }
  };

  // Una vez cerrada la función, tenemos que especificar la solicitud con el método open()
  /*
  open(<tipo-envio>, <archivo>, <método-envio>) -> Especifica la solicitud

  -> En la solicitud tenemos que poner los siguientes parámetros:
    - GET/POST: Especificamos el tipo de envio 
        - GET: es más rápido, tiene un límite de caracteres de 2000 y el envío se realiza a través de la URL. Las contraseñas y los datos aparecen sin cifrar en la URL
        - POST: es más lento, introduce los parámetros en la solicitud HTTP para el servidor. Por ello, no quedan visibles para el usuario. Además, la capacidad del método POST es ilimitada.
    - Archivo: Tenemos que especificar el archivo que vamos a enviar (txt, php, xml, json...)
    - true/false: Método de envío:
      - true: método asíncrono
      - false: método síncrono
  */
  xhr.open("GET", "holaMundo.txt", true);

  /* 
  Por último tenemos que realizar el envío de la solicitud al servidor con el método send()

  -> Cuando mandemos los datos los datos con "POST"m tenemos que pasar como parámetros los datos
     entre paréntesis. Si usamos "GET" no lo tenemos que hacer.
  */
  xhr.send();
}

BOTON_CAMBIO.addEventListener("click", cambiaContenido);
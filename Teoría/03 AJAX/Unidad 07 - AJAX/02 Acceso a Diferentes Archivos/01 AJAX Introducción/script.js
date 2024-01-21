/*
AJAX es el acrónimo de Asynchronous JavaScript And XML (JavaScript asíncrono y XML), una técnica de desarrollo web que nos permite crear aplicaciones interactivas que se ejecutan en el lado del cliente (navegador) mientras se realiza una comunicación con el servidor en segundo plano.
El resultado es una petición al servidor con una obtención de datos sin necesidad de que la página se recargue, es decir, los datos se cargan en una parte de la página mientras que el resto de información se mantiene invariable, de modo que esa carga no interfiere en la visualización ni comportamiento de la página.
  - Las ventajas de utilizar AJAX son muchas: se reduce la velocidad de carga, se mejora la interactividad y, sobre todo, la usabilidad de las aplicaciones web.
  - Para trabajar con AJAX necesitamos, evidentemente, utilizar Javascript, que es el lenguaje que realiza las llamadas AJAX mientras que el acceso a los datos se realiza a través de un objeto llamado XMLHttpRequest. Sin embargo, y aunque el nombre pueda despistar, los datos no tienen por qué estar formateados en XML; podemos utilizar también archivos de texto, archivos JSON, etc.

Cuando trabajamos con AJAX la base de la programación es el objeto XMLHttpRequest, el cual nos va a permitir solicitar datos al servidor y procesarlos.
Con AJAX podemos actualizar las páginas de manera asíncrona (intercambiando datos en el servidor pero en un segundo plano). 

-> Lo normal cuando estamos trabajando con un servidor (sin usar un mecanismo como AJAX) es que cada vez que enviamos datos al servidor, la página se recargue. 
-> Con AJAX, el procesamiento se da mientras estamos tabajando con la página (el cliente no se da cuenta de que esto se ha producido. En ningun momento se ve que se pierda la conexión o que se recargue la página)
*/

/*
El objeto XMLHttpRequest lo podemos crear directamente definiéndolo en una variable utilizando "new XMLHttpRequest()". Ej:

  let xhr = new XMLHttpRequest();

  * Antiguamente para navegadores muy viejos, se hacía de la siguiente manera: let variable = new ActiveXObject("Microsoft.XMLHTTP"); pero ahora esto es legacy


PROPIEDADES DEL OBJETO XMLHttpRequest:
1- Cada vez que nosotros hacemos una petición al servidor, lo que hacemos es un pequeño proceso (readyState) que pasa por cinco pasos:
    - 0 -> La solicitud aún no ha sido inicializada
    - 1 -> Se establece la conexión con el servidor
    - 2 -> Se recibe la solicitud
    - 3 -> Se procesa la solicitud
    - 4 -> La solicitud ha sido finalizada y la respuesta está lista

  -> A nosotros nos van a llegar los datos una vez que hayamos al paso 4 (readyState == 4)

2- Las peticiones del servidor también tienen el número de estado de una solicitud (status):
    - 200 -> Todo bien, el procesamiento ha sido correcto
    - 403 -> Prohibido
    - 404 -> No encontrado


MÉTODOS DEL OBJETO XMLHttpRequest:
-> open(metodo, url, async, user, psw)
-> send()
*/
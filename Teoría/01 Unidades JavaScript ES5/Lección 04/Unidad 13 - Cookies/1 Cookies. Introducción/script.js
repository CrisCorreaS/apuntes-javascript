/*
Estamos cansados de aceptar toooooodas las cookies en aquellos sitios webs que visitamos. Pero, ¿qué son las cookies y cómo podemos crear las nuestras propias utilizando Javascript?

Las cookies son datos almacenados en pequeños ficheros de texto dentro de nuestro equipo. Es importante tener esto en cuenta porque si cambiamos de equipo y ejecutamos el mismo código (accedemos a la misma página web) las cookies no se mantienen.

Imagina que accedes a un sitio web a través de un navegador al que le indicas ciertos datos (por ejempo, tu nombre, tu idioma o tu ubicación). Tras cerrar el navegador, el sitio perdería la información relacionada con tu visita y cada vez que entraras volvería a requerirla.

Para solucionar esa “pérdida”, surgieron las cookies que, en este caso, tendrían almacenado tu nombre, idioma y ubicación: si trataras de volver a acceder a la web, estos datos ya aparecerían almacenados sin necesidad de volver a introducirlos, ofreciéndote una experiencia “personalizada”.

Las cookies se guardan en pares de tipo nombre-valor. Por ejemplo: nombre = Ada. Cuando un navegador solicita una página web de un servidor, todas aquellas cookies que pertenecen a la página son asociadas a la petición. De este modo, el servidor obtiene los datos necesarios para recordar la información de los usuarios.

Aunque hay una serie de cuestiones a tener en cuenta, la sintaxis de las cookies, a grandes rasgos, es la siguiente:

  todasLasCookies = document.cookie; //Mostrar todas las cookies
  document.cookie = nuevaCookie; //Escribir una cookie
*/

/*
Las cookies son:
  - Datos almacenados en nuestro ordenador en pequeños archivos de texto
  - Recueran la información de un usuario aunque se cierre el navegador (son independientes de cada uno de los navegadores que tengamos en nuestro equipo) o se desconecte del servidor
  - Podemos guardar el nombre de un visitante de la página, el núero de veces que ha entrado, etc
  - Se guardan en formato de pares "nombre = valor". Ej: usuario = Ada Lovelace
  - Tienen una fecha de expiración: 
      - Si no le decimos ninguna fecha de expiración en el código, se interpreta como el momento en donde se cierra el navegador.
      - Si le decimos la fecha de expiración, aunque cerremos el navegador o el equipo, podremos volver a consultar la información guardada en la cookie durante el tiempo que esta esté activa
  - Tienen una localización en donde guardarse, normalmente se indica con una barra en la ruta del navegador, pero podemos indicarla como nosotras queramos al igual que el dominio
*/

/*
CREAR UNA COOKIE:
  - Paso 1: Empezamos por el nombre y el valor (como mínimo hay que poner el nombre, luego se pueden poner otros parámetros)
  - Paso 2: Ponemos un punto y coma (;) para enumerar otros pares "nombre = valor"
  - Paso 3: Saber qué parámetros podemos poner:
    nombre; fecha de experacion (formato UTC); edad máxima; ruta; dominio

Las cookies están asociadas al objeto "document", por lo que siempre tendremos que hacer un "document.cookie"

Si luego modificamos la cookie, siempre va a tener que tener como mínimo el nombre de los pares "nombre = valor" igual, si no, se va a considerar una cookie diferente porque los parámetros son como la firma de la cookie.
  - Es un poco como las funciones que no es lo mismo una función: function hola(){alert("Hola");} que una funcion: function hola(a){alert("Hola");}

Si tenemos más de una cookie, al hacer un alert(document.cookie) nos devolverá todas las cookies que tengamos, separadas por (;)
*/

//Creación de varias cookies: no tienen los mismos parámetros llamados con el mismo nombre, así que son cookies diferentes
document.cookie = "usuario = ADA LOVELACE; expires = Thu, 16 Nov 2023 12:00:00 UTC; path = /;"; // "expires" es la fecha de expiración y "path" es la ruta -> Esta cookie dura hasta el 16 de Noviembre
document.cookie = "usuario = Ada Lovelace;"; // esta cookie durará hasta que cerremos el navegador -> Como mínimo a una cookie hay que ponerle el nombre
document.cookie = "sexo = mujer;";


//Leer una cookie
var miCookie = document.cookie;
alert(miCookie); // usuario=Ada Lovelace; sexo=mujer -> También podríamos poner alert(document.cookie)


// Modificar una cookie -> hay que sobreescribir su valor, no su nombre
document.cookie = "sexo = hombre;";
alert(document.cookie); // usuario=Ada Lovelace; sexo=hombre -> Es mejor poner document.cookie que la variable


// Borrar una cookie = poner una fecha de expiración anterior a la que nos encontramos y quitar todos los valores que no sean el de ese parámetro
document.cookie = "usuario = ; expires = Thu, 01 Jan 1970, 00:00:01 GMT";
document.cookie = "sexo = ; expires = Thu, 01 Jan 1970, 00:00:01 GMT";
alert(document.cookie); // No muestra ya las dos cookies

// Las cookies también se pueden borrar de forma manual
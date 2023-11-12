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
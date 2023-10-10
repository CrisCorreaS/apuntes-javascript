/*
 Esta vez hablaremos del objeto de navegador Location.

Podemos decir que representa la ubicación, o URL, del objeto al que está vinculado. En otras palabras, básicamente almacena la información de la URL (o dirección de Internet) de la página que se está ejecutando en el momento.

Las propiedades de Location que veremos en esta lección son las siguientes:

    -href: que indica cuál es el HREF (URL) de la página.
    -hostname: almacena el host de la página.
    -pathname: almacena la ruta (lo que hay despúes del hostname) de la página.
    -protocol: indica cuál es el protocolo de la página (http, https, etc.)
    -hash: en caso de que haya un hash o ancla de página, la muestra (Ej. #quienes-somos)
    -host: a diferencia de hostname, en este caso almacena el nombre del hostname y el puerto.
    -origin: incluye el nombre del protocolo, el hostname y el puerto.
    -search: almacena el querystring de la página (Ej. www.web.com/index.html?user=ada).

Además, veremos tres métodos del objeto Location:
    -assign(<url>): permite asignar un nuevo documento a la página.
    -reload(): recarga la página (como si pulsáramos F5 o las flechas circulares).
    -replace(<url>): sustituye una página por otra haciendo desaparecer su historial.
*/

/* CARACTERÍSTICAS:
    - Guarda información de la URL actual
    - No hay un estándar público pero la mayoría de los navegadores soportan este objeto
*/

//PROPIEDADES DEL OBJETO LOCATION
var texto = "";

//href -> HREF (URL) de la página
texto += "<br/> HREF: " + location.href;

//hostname -> nombre del host de la página
texto += "<br/> Hostname: " + location.hostname;

//pathname -> pathname de la página
texto += "<br/> Pathname: " + location.pathname;

//protocol -> protocolo de la página
texto += "<br/> Protocolo: " + location.protocol;

//hash -> hash o ancla de la página. Nos permite indicar una posición de esa página y movernos a través de ella (Ej: www.web.com/index.html#indice -> #indice es el hash)
texto += "<br/> Hash: " + location.hash;

//host -> nombre del hostname y del puerto de la página
texto += "<br/> Host: " + location.host;

//origin -> nombre del protocolo, hostname y puerto de la página
texto += "<br/> Origin: " + location.origin;

//search -> querystring de la página de la página (Ej: www.web.com/index.html?user=ada -> ?user=ada es la querystring)
texto += "<br/> Search: " + location.search;

document.getElementById("location").innerHTML = texto;


//MÉTODOS DEL OBJETO LOCATION:
//assign(<url>) -> asigna un nuevo documento a la página
function nuevoDocumento() {
    location.assign("http://google.com");
}

//reload() -> recarga la página
function recarga() {
    location.reload();
}

//replace(<url>) -> sustitiye la página por otra como assign(), pero DESAPARECE SU HISTORIAL, por lo que ya no se puede volver a la página inicial
function sustituye() {
    location.replace("http://google.com");
}
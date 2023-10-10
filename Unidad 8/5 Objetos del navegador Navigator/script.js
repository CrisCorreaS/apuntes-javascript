/*
Este objeto almacena información sobre el navegador que está ejecutando nuestra aplicación. Esta información puede ser muy valiosa para 
saber ciertas cosas antes de ejecutar una u otra instrucción, como saber si están activadas las cookies, si estamos ejecutando la aplicación de manera online u offline, cuál es el idioma del navegador, etc.

Concretamente veremos las propiedades más importantes, que son:
    -codeName: devuelve el nombre código interno del navegador actual.
        -> La propiedad appCodeName está obsoleta y no se recomienda su uso, ya que siempre devuelve "Mozilla" en cualquier navegador.
        -> Si necesitas determinar el navegador que el usuario está utilizando, puedes hacerlo analizando la propiedad userAgent del objeto navigator
    -appName: devuelve el nombre oficial del navegador.
        -> La propiedad appName está obsoleta y no se recomienda su uso, ya que siempre devuelve "Netscape"
    -appVersion: devuelve la versión del navegador.
    -product: casualmente, por cuestiones de compatibilidad, siempre devuelve Gecko.
    -platform: devuelve una cadena de texto que representa la plataforma del navegador
    -onLine: nos indica si el navegador está actualmente online u offline.
    -language: muestra el idioma elegido por el usuario para la interfaz del navegador.
    -cookieEnabled: devuelve un booleano que indica si el navegador tiene activadas las cookies.
    -userAgent: devuelve la cadena de agente usuario del navegador actual.
    -geolocation: devuelve un objeto geolocation que puede servir para conocer la ubicación del dispositivo que ejecuta la aplicación.

Así como uno de los métodos más importantes: javaEnabled(), que nos permite saber si el navegador tiene o no habilitado JavaScript.
*/

/*
CARACTERÍSTICAS:
    -Guarda información sobre el navegador
    -No hay un estándar público pero la mayoría de los navegadores soportan este objeto
*/

//PROPIEDADES  DEL OBJETO NAVIGATOR
/* 
Hay dos propiedades deprecadas:
    -appCodeName
    -appName
*/

var texto = "";

// Código obsoleto
//appCodeName -> codeName del navegador (el nombre)
texto += "<br/> Codename deprecado: " + navigator.appCodeName; //Siempre devuelve Mozilla

//appName -> appName del navegador
texto += "<br/> Name deprecado: " + navigator.appName; //Siempre devuelve Netscape

//appVersion -> versión del navegador
texto += "<br/> Version deprecada: " + navigator.appVersion; 

//product -> motor del navegador
texto += "<br/> Product deprecado: " + navigator.product; 

//platform -> plataforma del navegador
texto += "<br/> Platform deprecado: " + navigator.platform;

//onLine -> si el navegador está online o no (boolean)
texto += "<br/> Online: " + navigator.onLine;  

//language -> idioma del navegador
texto += "<br/> Language: " + navigator.language; 

//cookieEnabled -> si las cookies están activadas (boolean)
texto += "<br/> CookieEnabled: " + navigator.cookieEnabled; 

//userAgent -> cabecera del user alert devuelto por el navegador
texto += "<br/> UserAgent cabecera: " + navigator.userAgent; 


//geolocation -> devuelve un objeto geolocation que puede servir para localizar la posición del usuario
texto += "<br/> Geolocation: " + navigator.geolocation; //Nos devuelve un objeto del que podemos sacar sus propiedades


//MÉTODO DEL OBJETO NAVEGADOR
//javaEnaled() -> devuelve true o false si está activado Java
alert("Método deprecado Java activado: " + navigator.javaEnabled());// false

document.getElementById("navegador").innerHTML = texto;

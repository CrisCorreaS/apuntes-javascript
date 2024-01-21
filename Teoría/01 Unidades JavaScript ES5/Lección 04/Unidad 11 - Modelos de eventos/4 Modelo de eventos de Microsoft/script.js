/*
En la lección anterior trabajamos con el modelo de eventos del W3C, actualmente vigente y funcional en todos los navegadores modernos.

Sin embargo, en las versiones de Internet Explorer anteriores a IE9 la versión de addEventListener no funciona y es necesario utilizar attachEvent.

La sintaxis es similar, tal y como podemos ver en el siguiente ejemplo:

    document.getElementById("parrafo").attachEvent("click", hazEsto);
    
Si sientes curiosidad por saber cómo había que hacerlo o quieres garantizar el funcionamiento de tu código en navegadores tan antiguos como los anteriores a IE9, aquí tienes un vídeo donde aprenderás cómo añadir y borrar eventos utilizando este modelo de eventos de Microsoft.
*/

/*
Este tipo de modelo de eventos de Microsoft se utilizaba antes para el Edge y el IE,
pero ahora el EventListener es soportado por todos los navegadores excepto un IE super
antiguo con el que es muy muy difícil encontrarse. Por lo que hoy en día, lo mejor
es utilizar el modelo de eventos de W3C

Más info del modelo de eventos del W3C: https://caniuse.com/?search=addeventlistener
Más info del modelo de eventos de Microsoft: https://caniuse.com/?search=attachEvent


* En mi caso he seguido el tutorial de Didacticode pero no lo he podido probar porque
tanto con Chrome, Firefox como Edge, ya no reconocen este modelo de eventos. Sirve como
referencia para tener en cuenta cómo se hacía anteriormente por si alguna vez trabajando
lo veo.
*/

/*
SINTAXIS:
elemento.attachEvent("<evento_con_on>", funcion);
*/

document.getElementById("ms").attachEvent("onclick", saludarUnaVez);
document.getElementById("ms").attachEvent("onclick", colorearse);
document.getElementById("ms").attachEvent("onmouseover", fondo);


function saludarUnaVez() {
    alert("¡Hola, caracola!");
    document.getElementById("ms").detachEvent("onclick", saludarUnaVez); // Así solo se ejecuta una vez
}

function colorearse() {
    document.getElementById("ms").style.color = "red";
}

function fondo() {
    document.getElementById("ms").style.backgroundColor = "blue";
}


// Funciones anónimas
// elemento.attachEvent("<evento_con_on>", function(){...});
document.getElementById("msAnonima").attachEvent("onclick", function () {
    this.style.backgroundColor = "#C0C0C0";
});

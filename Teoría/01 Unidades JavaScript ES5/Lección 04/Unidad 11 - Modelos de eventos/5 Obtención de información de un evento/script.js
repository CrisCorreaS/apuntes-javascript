/*
En las lecciones anteriores aprendimos cómo asociar “escuchadores” o listeners a elementos para que, cuando se produzca un evento (click, mouseover, blur, etc.) se ejecute una función.

Pero la mayor parte de las veces esto no es suficiente porque necesitamos saber información del evento que se ha producido: ¿qué tipo de evento ha sido? ¿sobre qué elemento se ha producido?

Y para eso utilizamos magia. ¡Sí, como lo oyes! Porque en la función que ejecutamos cuando se produce el evento tiene un parámetro que podríamos decir que se genera “mágicamente” y contiene toda la información del evento que necesitamos.

En el siguiente vídeo aprenderás cómo capturar toda esa información utilizando tanto navegadores modernos como el ya obsoleto Internet Explorer.

Recuerda que, si no quieres hacer la comprobación con el modelo de eventos de Microsoft, únicamente debes eliminar la siguiente línea:

    if (!e) e = window.event;
*/

/*
Utilizamos el modelo de eventos del W3C ya que es el más extendido.

Vamos a hacer lo siguiente:
  - Paso 1: le vamos a asignar dos eventos diferentes al mismo elemento, pero con la misma función.
  - Paso 2: creamos la función común a ambos eventos -> va a tener un parámetro, pero en la sintaxis del control de eventos no se le indica de ninguna forma porque la función no se pone con paréntesis. En esta función vamos a obtener información sobre el tipo de evento
  - Paso 3: vamos a asignar el mismo evento con la misma función a los dos elementos con id = "parrafo$"
  - Paso 4: creamos la función común a ambos elementos -> vuelve a tener un parámetro de evento como la anterior función. En esta función vamos a obtener información sobre el tipo de elemento
*/

// Paso 1
document.getElementById("eventos").addEventListener("mouseover", manejador);
document.getElementById("eventos").addEventListener("mouseout", manejador);

//Paso 2
function manejador(e) { // e -> es el parámetro el cual también es un objeto de tipo evento, que crea el navegador, y que almacena el tipo de evento que se ha producido (mouseouver, mouseout...)
    if (!e) { // Vamos a controlar si el evento "e" no existe porque, antiguamente, si estábamos navegando con un navegador de Microsoft, este no lo soportaba
        e = window.event; // Ya vemos que esto está deprecado porque ahora los navegadores de Microsoft sí que soportan el evento 
    }

    switch (e.type) { // e.type -> nos indica gracias al atributo "type", qué tipo de evento es
        case "mouseover":
            this.style.color = "purple";
            break;
        case "mouseout":
            this.style.color = "yellow";
            break;
    }
}



//Paso 3
document.getElementById("parrafo1").addEventListener("click", saludo);
document.getElementById("parrafo2").addEventListener("click", saludo);

//Paso 4
function saludo(e) {
    if (!e) {
        e = window.event; // Volvemos a hacer este control aunque actualmente no es necesario
    }

    if (e.target.id == "parrafo1") { // e.target -> nos dice a qué etiqueta html hace referencia este evento (pero lo interpreta como un objeto "HTMLHeadingElement" el cual tiene una serie de propiedades como "id")
        alert("Has pulsado el primer párrafo de " + e.target + " de " + e.target.id); // Has pulsado el primer párrafo de [object HTMLHeadingElement] de parrafo1
    } else if (e.target.id == "parrafo2") {
        alert("Has pulsado el segundo párrafo de " + e.target + " de " + e.target.id); // Has pulsado el segundo párrafo de [object HTMLHeadingElement] de parrafo2
    }

    alert("Has pulsado el " + e.target.id); 
}
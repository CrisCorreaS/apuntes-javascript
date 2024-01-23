// Vamos a realizar el mismo procesamiento pero haciendo una petición con POST. La diferencia con el caso anterior es que necesitamos añadir una cabecera HTTP mediante el método setRequestHeader() y especificar los datos a enviar en el método send().

const TEXTO = document.querySelector("#nombre");
const SUGERENCIA = document.querySelector("#sugerencia");

function mostrarNombre(e) {
  let cadena = e.target.value; // Coge el valor del texto que estemos escribiendo en el input, es igual que decir: TEXTO.value

  if (cadena.length == 0) { // Si al levantar la tecla no hay nada (Ej: al "suprimir")
    SUGERENCIA.innerHTML = "";
    return;
  } else {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      /*
      Cada vez que se envía una solicitud al servidor, en ese procesamiento hay cinco fases y cada 
      una de ellas va a llamar a esta función. En cada cambio de una fase a otra, la función se va
      a ejecutar. 
      */

      if (this.readyState == 4 && this.status == 200) {
        // Cuando la solicitud ha sido prcesada y el estado y el status son correctos se hace lo siguiente
        SUGERENCIA.innerHTML = this.responseText; // php nos va a devolver un texto, por eso es "responseText", si fuera un xml sería un "responseXML"
      }
    };

    // Con GET: xhr.open("GET", "arrayNombres.php?nombre=" + cadena, true);
    xhr.open("POST", "arrayNombres.php", true);

    /* 
    En la función open(), al usar "POST", los datos no van por url, por lo que solo se pone el 
    archivo php que nos devolverá los datos (arrayNombres.php)


    1- Ahora en vez de usar una función send() sin parámetros como usábamos con GET, tenemos que usar
    primero el método "setRequestHeader()" ya que debemos incluír obligatoriamente una cabecera:

      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    En esta cabecera le decimos de qué tipo van a ser los parámetros que le vamos a pasar. (en nuestro
    caso van a ser parámetros UTF-8)
    

    2- Ahora usamos el método "send()" pero con parámetros (los parámetros que poníamos en la url
    del  get)

      xhr.send("nombre=" + cadena);
    */

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("nombre=" + cadena);
  }
}

TEXTO.addEventListener("keyup", mostrarNombre, false) // El evento "keyup" se activa cuando se suelta una tecla. Los eventos "keydown" y "keyup" brindan un código que indica qué tecla se presiona, mientras que keypress indica qué carácter se ingresó -> https://developer.mozilla.org/es/docs/Web/API/Element/keyup_event
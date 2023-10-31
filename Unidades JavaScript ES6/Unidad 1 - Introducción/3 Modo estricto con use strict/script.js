/*
El modo estricto, expresado como “use strict”, es una expresión literal que se puede utilizar desde la versión de ES6 y que, entre otras cosas, no permite utilizar variables no declaradas.

Podríamos decir que, hasta ahora, hemos utilizado Javascript en modo “poco riguroso”, o “sloppy mode”. Es más, ahora podemos utilizar el modo estricto y el modo poco riguroso en el mismo programa, e incluso ir progresivamente cambiando nuestros programas de modo poco riguroso a estricto.

La expresión literal del modo estricto se define de la siguiente manera al comienzo de un script o una función:
"use strict";

function javascript(){ alert ("esto es una prueba"); }

Si se declara dentro de una función tendrá ámbito local (solo el código que está dentro de la función estará en modo estricto); si se declara al principio de un script tendrá ámbito global (todo el código del script se ejecutará en modo estricto).

Si no recuerdas cómo funcionaba el ámbito de las variables en Javascript, echa un ojo a la "Unidad JavaScript ES5" > "Unidad 4 - Funciones" > "4 Ámbito de variables", en la que trabajamos ámbitos locales y globales.
*/

/*
USE STRICT O MODO ESTRICTO

"use strict" es una línea que indica que el código debe ser usado "en modo estricto", es decir, no se pueden utilizar variables no declaradas
Fuera de una función tiene ámbito global; dentro de ella, local (el de la función)

SINTASIS: "use strict";
*/

// "use strict";

let persona1; 
let nacimiento1;

function informacion1() {
    persona1 = "Ada";
    nacimiento1 = 1815;
    console.log(persona1 + " nació en " + nacimiento1);
}

informacion1(); //Ada nació en 1815 -> No nos está afectando el "use strict" por ahora, por lo que da igual tenerlo o no, en este caso


let persona2;
//let nacimiento2; -> Si comentamos esto, no declaramos la variable pero sí la usamos dentro de la función

function informacion2() {
  persona2 = "Ada";
  nacimiento2 = 1815;
  console.log(persona2 + " nació en " + nacimiento2);
}

informacion2(); //Si no usamos el "use strict", nos devuelve "Ada nació en 1815". Si usamos "use strict" global nos devuelve un error(Uncaught ReferenceError: nacimiento2 is not defined \n at informacion2(script.js: 44: 15) \n at script.js: 48: 1))
                

persona3 = "Charles"; // Haciendo esto, le estamos pasando un valor a una variable no declarada
//let nacimiento3; -> Si comentamos esto, no declaramos la variable pero sí la usamos dentro de la función, sin declarar

function informacion3() {
  let persona3 = "Ada";
  nacimiento3 = 1815;
  console.log(persona3 + " nació en " + nacimiento3);
}

informacion3(); 
/*
Si no usamos el "use strict", nos devuelve "Ada nació en 1815"
  
Si usamos el "use strict" local en la función informacion3() nos da un error por la variable nacimiento3 (Uncaught ReferenceError: nacimiento3 is not defined \n at informacion3 (script.js:57:15) \n at script.js:61:1))
pero no salta ni da error con persona3 sin declararla fuera de la función
*/
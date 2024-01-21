/*
En la primera lección de este curso, aprendimos la diferencia entre declarar variables con let y con var. El uso de const es similar al de let, con la diferencia de que el valor de una constante no puede cambiarse utilizando reasignación. Es decir, las constantes no se pueden redeclarar.
Al igual que let, const permite declarar constantes limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.

La sintaxis de la declaración de variables con const es la siguiente:

const varname1 = value1 [, varname2 = value2 [, varname3 = value3 [, ... [, varnameN = valueN]]]];
*/

/*
DECLARAR CONSTANTES CON CONST

Las variables constantes en Javascript tienen ámbito de bloque al igual que las variables definidas utilizando let
Es importante tener en cuenta que el valor de una constante no puede variar (reasignar), por tanto, se asignan en el momento en que se declaran
Para diferenciarlo de las variables conviene utilizar todo mayúsculas
*/

//EJEMPLO 1:

//Ejemplo usando let
function saludar1(){
    "use strict";

    let saludo = "Hola, caracola";
    saludo = "Agur, yogur";
    console.log(saludo);
}

saludar1(); // Agur, yogur -> Se comporta como siempre

//Ejemplo usando const
function saludar2(){
    "use strict";

    const SALUDO = "Hola, caracola"; //El standar a la hora de usar contantes, es usar mayúsculas (es como final en java)
    SALUDO = "Agur, yogur";
    console.log(SALUDO);
}

saludar2(); // Nos da un error: script.js:36 Uncaught TypeError: Assignment to constant variable. \n at saludar2 (script.js:36:12) \n at script.js:40:1


//Ejemplo usando const
function saludar3(){
    "use strict";

    const SALUDO = "Hola, caracola"; 
    // SALUDO = "Agur, yogur"; -> Al poner esto así, no hacemos la reasignación y funciona
    console.log(SALUDO);
}

saludar3(); // Hola, caracola


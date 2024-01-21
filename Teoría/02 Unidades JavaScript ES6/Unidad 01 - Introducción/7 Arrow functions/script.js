/*
En el curso de Javascript I aprendimos varios conceptos sobre funciones, como la introducción a las funciones en este lenguaje de programación, o el concepto de funciones anónimas, muy relacionado con las funciones flecha o arrow functions que veremos en esta lección.

Las funciones flecha permiten definir de manera compacta una función convencional. Si la función tiene solamente una sentencia que devuelve un valor, el uso de funciones flecha nos permite eliminar las llaves y la palabra return. Incluso utilizando parámetros también podemos ver mucho más reducido el código.

La sintaxis básica de las funciones flecha o arrow functions sin parámetros es la siguiente:
() => { sentencias }

En una función con un solo parámetro podríamos prescindir de paréntesis:
(singleParam) => { sentencias } singleParam => { sentencias }

Y una función con más de un parámetro podríamos representarla como:
(param1, param2, …, paramN) => { sentencias }
(param1, param2, …, paramN) => expresion
*/

/*
ARROW FUNCTIONS O FUNCIONES FLECHA
Las funciones flecha son una alternativa compacta a una función convencional
No son adecuadas para ser utilizadas como métodos, y no pueden ser usadas como constructores
Son parecidas a las funciones anónimas
El return se puede sustituír por una expresión

SINTAXIS: 
    (param1, param2, ..., paramN) => {sentencias}
    (param1, param2, ..., paramN) => {return loQueSea}
    (param1, param2, ..., paramN) => expresión
    () => {return expresión}

Si solo hay un parámetro -> No hace falta poner un paréntesis, si hay más de un parámetro, sí
    (parámetro) => {sentencias}
    parámetro => {sentencias}

Si no hay parámetros -> Los paréntesis son obligatorios
    () => {sentencias}
*/

//Como declarábamos una función anónima en JavaScriptES5
var miFuncion1 = function () {
    return new Date();
}

//Como declaramos ahora una función flecha
var miFuncion2 = () => { new Date(); }

/*
PASOS PARA CONVERTIR UNA FUNCIÓN ANÓNIMA EN UNA FUNCIÓN FLECHA:
    1- Quitamos el "function"
        var miFuncion1 = () {
            return new Date();
        }
    
    2- Ponemos entre los paréntesis y la apertura de llaves, la flecha -> Esto ya es una función flecha
        var miFuncion1 = () => {
            return new Date();
        }
    
    3- Acomodamos todo el código -> Esto es una función flecha (es una de las sintaxis permitidas)
        var miFuncion1 = () => { return new Date(); }

    4- Nos acordamos que el "return" se puede sustituir por una expresión -> Esto es una función flecha (es una de las sintaxis permitidas)
        var miFuncion1 = () => { new Date(); }

    5- También podemos quitar las llaves si la expresión es de una línea ->  Esto es una función flecha (es una de las sintaxis permitidas)
        var miFuncion1 = () => new Date();
}
*/

//Función clásica
var arraysConcatenados1 = function (array1, array2) {
    return array1.concat(array2);
}
console.log(arraysConcatenados1([1, 2], [3, 4, 5])); // (5) [1, 2, 3, 4, 5]

//Arrow function
var arraysConcatenados2 = (array1, array2) => { return array1.concat(array2); }
console.log(arraysConcatenados2([1, 2], [3, 4, 5])); // (5) [1, 2, 3, 4, 5]


//Arrow function sin parámetros:
var arrowFunctionSinParametros = () => { return "Hola"; }

//Arrow function con un parámetro:
var arrowFunctionUnParametro = (saludo) => { return saludo; }
var arrowFunctionUnParametro = saludo => { return saludo; }

//Arrow function con varios parámetros:
var arrowFunctionDosParametros = (num1, num2) => { return num1 + num2; }
var arrowFunctionTresParametros = (num1, num2, num3) => { return num1 * (num3 - num2); }

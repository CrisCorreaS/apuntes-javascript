/*
Recordamos en la lección anterior, que en el curso de Javascript I aprendimos la diferencia entre parámetros y argumentos,y que lo habitual es definir una función con tantos parámetros como vayamos a utilizar. Sin embargo, el uso de parámetros por defecto y el uso de parámetros REST son una excepción desde la versión ES6.
Los parámetros REST nos permiten representar un número indefinido de argumentos en forma de array, y para representar ese array debemos precederlo por tres puntos:

Así pues, la sintaxis de una función con parámetros REST quedaría de la siguiente manera:
    function(a, b, ...arrayOtrosArgumentos) {
        // ...
    }
*/

/*
La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array
No tenemos que tener en cuenta en número de argumentos que se le pasan a una función porque todos los que haya a partir de un número, se almacenan en un array
Esto funciona como "Arguments", que ya existía desde ES5, pero "Arguments" no es un array, es un iterable

SINTAXIS:
    function (a, b, ... theArgs){
        //...
    }
*/


//JavaScript ES5:
function miLista1(a, b) {
    alert("ARGUMENTS:");
    alert("a = " + a);
    alert("b = " + b);
    alert("Resto de elementos de la lista: " + arguments);
    alert("Tamaño: " + arguments.length);
    alert("arguments[2] = " + arguments[2]);
}

miLista1(2, 4); /* ARGUMENTS:
                    a = 2
                    b = 4
                    Resto de elementos de la lista: [object Arguments]
                    Tamaño: 2
                    arguments[2] = undefined
*/

miLista1("pera", "manzana", "zanahoria", "melón", "limón", "lima"); /* ARGUMENTS:
                            a = pera
                            b = manzana
                            Resto de elementos de la lista: [object Arguments]
                            Tamaño: 6
                            arguments[2] = zanahoria
*/

//Es la misma función pero con console.log() conseguimos que se muestren los valores de arguments y no solo su definición como objeto.
function miLista2(a, b) {
    console.log("ARGUMENTS:");
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("Resto de elementos de la lista: ", arguments); //Aquí ponemos una coma en vez de un "+", si no, no nos aparece el valor de los arguments y solo nos da como en los alert()
    console.log("Tamaño: " + arguments.length);
    console.log("arguments[2] = " + arguments[2]);
}

//Podemos ver que el valor de Arguments va en pares clave-valor (clave: "valor") a diferencia de los arrays, por lo que se puede ver que es un objeto iterable.
//Arguments se puede mostrar de dos formas, como objeto iterable o con sus pares clave-valor
miLista2(2, 4); /* ARGUMENTS:
                    a = 2 
                    b = 4 
                    Resto de elementos de la lista: Arguments(2) [2, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ] -> Resto de elementos de la lista: Arguments(2) (0: 2, 1: 4)
                    Tamaño: 2
                    arguments[2] = undefined
*/

miLista2("pera", "manzana", "zanahoria", "melón", "limón", "lima"); /* ARGUMENTS:
                            a = pera
                            b = manzana
                            Resto de elementos de la lista: Arguments(6) ['pera', 'manzana', 'zanahoria', 'melón', 'limón', 'lima', callee: ƒ, Symbol(Symbol.iterator): ƒ] -> Resto de elementos de la lista: Arguments(6) (0: "pera", 1: "manzana", 2: "zanahoria", 3: "melón", 4: "limón", 5: "lima")
                            Tamaño: 6
                            arguments[2] = zanahoria
*/


//JavaScript ES6:
function miLista3(a, b, ...otrosElementos) { //En el último parámetro hemos puesto los tres puntos (que son el operador REST) y a continuación el nombre de un parámetro
  console.log("REST:");
  console.log("a = " + a);
  console.log("b = " + b);
  //Sustituímos en los siguientes campos el arguments por el nombre del último parámetro  
  console.log("Resto de elementos de la lista: ", otrosElementos); //Aquí ponemos el nombre del último parámetro (no se ponen los tres puntos, porque los tres puntos muestran que es un parámetro REST)
  console.log("Tamaño: " + otrosElementos.length);
  console.log("arguments[2] = " + otrosElementos[2]);
}

miLista3("pera", "manzana", "zanahoria", "melón", "limón", "lima"); /* ARGUMENTS:
                            a = pera
                            b = manzana
                            Resto de elementos de la lista: (4) [ "zanahoria", "melón", "limón", "lima" ]
                            Tamaño: 4
                            arguments[2] = limón
*/

//Ahora podemos ver que en el resto de elementos de la lista cuenta los que no son ni "a" ni "b", ya que no los incluye
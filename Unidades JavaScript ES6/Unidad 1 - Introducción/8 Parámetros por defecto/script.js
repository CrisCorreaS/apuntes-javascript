/*
En el curso de Javascript I aprendimos la diferencia entre parámetros y argumentos. Lo habitual es definir una función con tantos parámetros como vayamos a utilizar… ¡pero no siempre es así! De hecho, desde la versión de ES6, es posible definir parámetros por defecto en una función.
Los parámetros por defecto permiten que los parámetros formales (los que ponemos en la definición de la función) sean inicializados con valores por defecto en caso de que, cuando llamemos a la función, no le pasemos esos valores o éstos sean no definidos (undefined).

La sintaxis de una función con parámetros por defecto es muy sencilla: solo hay que indicar el valor del parámetro entre paréntesis, como vemos a continuación:

    function [nombre]([param1[ = valorPorDefecto1 ][, ..., paramN[ = valorPorDefectoN ]]]) {
        sentencias;
    }
*/

/*
PARÁMETROS POR DEFECTO
Los parámetros por defecto se una función permiten que los parámetros formales sean inicializados con valores por defecto si no se pasan valores o los valores pasados son undefined (por defecto lo son)

SINTAXIS
    function [nombreFuncion] ([param1 [= valorPorFefecto1], ..., paramN [= valorPorFefectoN]]){
        declaraciones
    }
*/

//En JavaScript ES5:
function multiplicacion1(a, b) {
    //Si no le pasamos uno de los parámetros (a o b), podemos decirle que tome el valor que nosotros queramos de las siguientes dos formas:
        //Forma 1: con un if
        if (typeof b === 'undefined') {
            b = 1;
        }
        
        //Forma 2: con un operador ternario
        b = typeof b !== 'undefined' ? b : 1;

    return a * b;
}

alert("El resultado de multiplicacion1(1, 8) = " + multiplicacion1(1, 8)); //8
alert("El resultado de multiplicacion1(8) = " + multiplicacion1(8)); //8
alert("El resultado de multiplicacion1(1) = " + multiplicacion1(1)); //1


//En JavaScript ES6:
function multiplicacion2(a, b = 1) { //Ahora se puede poner así directamente con el valor por defecto si no se le pone ninguno
    return a * b;
}

alert("El resultado de multiplicacion2(1, 8) = " + multiplicacion2(1, 8)); //8
alert("El resultado de multiplicacion2(8) = " + multiplicacion2(8)); //8
alert("El resultado de multiplicacion2(1) = " + multiplicacion2(1)); //1
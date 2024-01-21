/*
    En esta lección vamos a hacer una pequeña introducción a todos los tipos de datos que nos podemos encontrar en este lenguaje de programación. Y por ello, es importante diferenciar los datos primitivos de los objetos en Javascript.
    Los datos primitivos hasta la versión ES5 eran cinco:
        -Cadena.
        -Número.
        -Booleano.
        -Nulo o null.
        -No definido o undefined.

    Pero lo que nos incumbe en esta lección son los objetos, el otro tipo de datos que debemos sumar a los seis anteriores.
    Podemos hablar de dos tipos de objetos en Javascript:
        -Los objetos nativos, que no dependen del navegador.
        -Los objetos de alto nivel, que dependen del navegador.

    Además, no podemos dejar de hablar de los objetos definidos por el usuario.
*/

//DATOS PRIMITIVOS:
var cadena = "Hola";
var pi = 3.14;
var boolean = true;
var noDefinida = undefined;
var nula = null;

//OBJETOS NATIVOS: no dependen del navegador
/* 
    - String
    - Number
    - Boolean
    - Data
    - Math
    - RegExp (Expresiones regulares)
    - Array
    - Function
    - Object

    *No se suelen usar estos objetos para declarar datos ni es recomendado:
        - String
        - Number
        - Boolean
    Ya existen los datos primitivos que nos permiten trabajar con este tipo de datos como vimos arriba
*/

//OBJETOS DE ALTO NIVEL: dependen del navegador
/* 
    Modelo de objetos del navegador: van a hacer referencia al navegador y vamos a poder trabajar con cosas como el historial, de qué tipo es el navegador, qué tamaño tienen las ventanas
        - Window
        - Screen
        - Navigator
        - Location
        - History
    
    Modelo de objetos de documento: podemos trabajar con los elementos HTML que tenemos dentro de nuestro documento
        - Document
*/

//DEFINICIÓN DE OBJETO (si no utilizamos Object):
var programadora1 = { nombre: "Ada", apellido: "Lovelace", ano: 1815 };

/*
    Un objeto tiene: 
    - Propiedades -> se definen en modo "nombre: valor". En el ejemplo anterior las propiedades serían nombre, apellido y año
    - Métodos -> acciones que se pueden ejecutar sobre un objeto

    Las variables en JS contienen valores y normalmente contienen un único valor para cada variable. 
    En el caso de los objetos, pueden contener uno o varios valores, pudiendo ser datos primitivos, otros objetos o incluso funciones
    */
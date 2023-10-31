/*
Esta es la primera lección del minicurso de Javascript Moderno en la que veremos una introducción a cuáles son las características básicas de Javascript como lenguaje de programación y las nuevas mejoras que incorpora ES6 con respecto a la versión anterior, ES5

Como ya vimos en la primera lección del curso de Javascript I, Javascript – #0. Introducción, Javascript tiene una serie de características esenciales que lo hacen diferente (y parecido) a otros lenguajes de programación

Es un lenguaje de programación del lado del cliente.
Es ¿interpretado? ¿O compilado? Hay diferencia de opiniones sobre esto… ¡Ya hablaremos de este tema más adelante!
Es imperativo y estructurado.
Es objetual, con tipificación débil y dinámica.
Es orientado a objetos y basado en prototipos.
Además, es importante conocer la importancia de un organismo de estandarización como ECMA y su relevancia en la especificación ECMAScript.
*/

/*
CARACTERÍSTICAS
    - En el lado del cliente -> se ejecuta únicamente en el navegador del cliente
    - Interpretado -> el navegador va leyendo instrucción a instrucción y ejecutándolo. No necesita hacerse una compilación
    - Orientado a objetos basado en prototipos -> no está basado en clases como java o C++, aunque cada vez se acerca más a eso
    - Imperativo y estructurado -> Imperativo: hay que decirle explícitamente la instrucción que tiene que ejecutar. Estructurado: está basado en tres estructuras básicas: la secuencia (una instrucción va detrás de otra), la selección (las estructuras de control condicionales) y la iteracción (las estructuras de control repetitivas)
    - Objetual, con tipificación débil y dinámica -> no hay obligación de decir de qué tipo son las variables y la variable puede cambiar de tipo a lo largo del programa (no hay int numero, hay let numero que luego puede ser un array de Strings)

ECMA Internacional -> Organización internacional que desarrolla los estándares de JS, los hace públicos y promueve su uso correcto
ECMAScript (ES) -> Son los estándares de JS que crea ECMA.
    - ECMAScript 3 -> soportado por navegadores antiguos
    - ECMAScript 5.1 (ES5) -> soportado por navegadores modernos
    - ECMAScript 6 (ES6) -> agregó cambios muy significativos en la sintaxis de JS
    - ECMAScript 7 -> en desarrollo, dedicada a seguir reformando el lenguaje
    - ECMAScript 8 -> incluye constructores async/await que funcionan con generadores y promesas
    - ECMAScript 9 -> incluye operadores rest/spread, iteración asíncrona, etc
    - ECMAScript 10 -> incluye Array.flat(), Array.flatMap(), errores en bloque catch, etc

ES.Next -> Cualquier próxima versión en desarrollo. Sus características son propuestas aún sin especificar
*/

/*
Javascript ES6 incluye:
    - let y const -> declarar variables y constantes de forma diferente
    - Literal templates -> crear plantillas que luego se van a poder utilizar dentro del código
    - Funciones flecha -> crear funciones de una manera mucho más corta
    - Definición de clases -> ahora ya hay la palabra class en vez de tener que usar function con las clases
    - Desestructuración 
    - Manejo de parámetros extendidos -> operadores rest...
    - Nuevos métodos integrados en objetos
    etc
*/
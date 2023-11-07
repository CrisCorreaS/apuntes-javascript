/*
Las plantillas de cadena de texto (template strings) son literales de texto que hablilitan el uso de:
  - Expresiones incrustadas (${expresion})
  - Cadenas de texto de más de una línea
  - Interpolación expresiones
  - Plantillas con una función de preprocesado (las veremos más adelante)

  - NOTA: para escapar una comilla dentro de una plantilla se usa \ 
*/

/*
SINTAXIS:

`cadena de texto`

`línea1 de la cadena de texto
 línea2 de la cadena de texto`

`cadenas de texto ${expresión} texto`

tag `cadena de texto ${expresión} texto`
*/

// CADENAS DE MÁS DE UNA LÍNEA
// En JavaScript ES5:
console.log("Hola, \ncaracola"); // Se hace un salto de línea con el caracter de escape

// En JavaScript ES6:
console.log(`Agur,
yogur`); // Se hace un salto de línea con el intro

// INTERPOLAR EXPRESIONES
let num1 = 2;
let num2 = 4;

// En JavaScript ES5:
console.log(
  "La suma es: " + (num1 + num2) + "\ny la resta es: " + (num1 - num2)
);

// En JavaScript ES6:
console.log(`La suma es: ${num1 + num2} 
y la resta es: ${num1 - num2}`); // Usamos expresiones incrustadas y es lo mismo

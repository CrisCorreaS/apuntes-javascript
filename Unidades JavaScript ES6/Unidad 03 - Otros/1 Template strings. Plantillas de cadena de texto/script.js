/*
Dejamos las clases atrás y cambiamos de tercio para adentrarnos en una de las particularidades más interesantes de Javascript: las plantillas de cadena de texto (template strings).
Este tipo de plantillas literales se delimitan con el carácter de comillas o tildes invertidas (acento grave (` `), en lugar de las habituales comillas sencillas o dobles.
Su uso más habitual es que pueden contener marcadores o expresiones incrustadas, que se identifican por el símbolo del dólar y a continuación la expresión entre llaves (${expresión}) y cadenas de texto de más de una línea.

Las distintas sintaxis básicas de las template strings son las siguiente:

  `cadena de texto` //Literal
  `línea 1 de la cadena de texto
  línea 2 de la cadena de texto` //Cadena de texto de más de una línea
  `cadena de texto ${expresión} texto` //Expresiones 
  tag `cadena de texto ${expresión} texto` //Plantillas etiquetadas

Las plantillas de cadena de texto (template strings) son literales de texto que hablilitan el uso de:
  - Expresiones incrustadas (${expresion})
  - Cadenas de texto de más de una línea
  - Interpolación expresiones
  - Plantillas con una función de preprocesado (las veremos más adelante)

  -> NOTA: para escapar una comilla dentro de una plantilla se usa \ 
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

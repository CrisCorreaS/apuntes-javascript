/*
Callback -> Es como una llamada de vuelta. Es mandar de vuelta la llamada con la información
que se ha calculado.

- En este ejemplo, el método "op()" es un callback, midu a "op", prefiere llamarle "done"
- El callback siempre es el último parámetro de la función que lo llama
*/

const operation = (numero1, numero2, op) => {
  return op(numero1, numero2);
};

operation(1, 3, (a, b) => a + b); // 4
operation(1, 3, (a, b) => a * b); // 3
operation(1, 3, (a, b) => a - b); // -2

// Ahora lo hacemos asíncrono:
const operationAsin = (numero1, numero2, callback) => {
  return setTimeout(() => {
    callback(numero1, numero2);
  }, 500);
};

operationAsin(1, 3, (a, b) => {
  console.log(a + b);
}); // 4
operationAsin(1, 3, (a, b) => {
  console.log(a * b);
}); // 3
operationAsin(1, 3, (a, b) => {
  console.log(a - b);
}); // -2

// Otro ejemplo de callback asíncrona:
const doAsyncStuffWithCallback = (numero1, numero2, callback) => {
  const resultado = numero1 + numero2;

  return setTimeout(() => {
    callback(resultado);
  }, 500);
};

doAsyncStuffWithCallback(1, 3, (result) => {
  // 4
  console.log(result);
});

/*
Las promesas son lo que se utilizan hoy en día, es muy difícil ver callbacks excepto en Node.js

- Al hacer la función inicial, ya no se le pasa el callback (la otra función)
- Si udamos el constructor de una promesa (new Promise()), tenemos que saber que lo que recibe
  ese constructor es una función que tiene como parámetros "resolve" y "reject"

    new Promise((<resolve>, [<reject>]) => {cuerpo de la función})


  - Al "resolve" lo llamamos cuando hayamos resuelto bien la promesa
  - Al "reject" lo llamamos cuando haya habido algún error o problema -> es opcional

Es una forma más difícil y larga de crear la implementación, pero es la forma más correcta
y tiene muchas más ventajas a la hora de consumir la función
*/

const doAsyncStuffWithPromises = (numero1, numero2) => {
  const resultado = numero1 + numero2;

  // Devolvemos una promesa creándola directamente
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultado);
    }, 500);
  });
};

doAsyncStuffWithPromises(1, 3).then(result => console.log(resultado));
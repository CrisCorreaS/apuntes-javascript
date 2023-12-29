/*
El trabajo con arrays nos ofrece infinidad de opciones que conviene conocer, y por eso vamos a ver los métodos más importantes que podemos encontrar:

Métodos para añadir, extraer o borrar elementos:
    -pop() y shift() -> extraen el último y primer elemento del array, respectivamente.
    -delete() -> elimina el elemento (pero mantiene la posición).
    -push() y unshift() -> añaden elementos al final y al principio, respectivamente.
    -splice() -> permite insertar y borrar elementos en diferentes posiciones.
    -slice() -> permite extraer un subarray.
    -concat() -> une un array con otro.
    -copyWhithin() -> copia elemenetos de un array y los sustituye por otros elementos del array.
    -fill() -> sustituye los elementos del array por uno indicado.

Métodos para buscar:
    -indexOf() y lastIndexOf() -> devuelve la primera o última posición de un elemento respectivamente.

Métodos para ordenar e invertir el orden:
    -reverse() -> invierte el orden de un array.
    -sort() -> ordena el array.
*/
var animales = ["Perro", "Gato", "Pez", "Hamster"];

//MÉTODOS DE ARRAYS:
//Array.isArray(<nombre del array>) -> devuelve true si es un objeto del tipo Array. Si ponemos typeOf(<nombre del Array>) solo nos devuelve Object pero no especifica qué tipo de objeto es
document.write("<p>¿Es un array? " + Array.isArray(animales) + "</p>"); //true

//<nombre del array> instanceof Array -> devuelve true si es un Array 
var esArray = animales instanceof Array;
document.write("<p>¿Estás seguro versión 1? " + esArray + "</p>"); //true
document.write("<p>¿Estás seguro versión 2? " + (animales instanceof Array) + "</p>"); //true



//MÉTODOS PARA MOSTRAR UN ARRAY
//toString() -> Es el más recomendado y convierte el array en cadena
document.write("<p>El array con toString() es: " + animales.toString() + "</p>"); //Perro,Gato,Pez,Hamster



//join(<separador>) -> convierte el array a cadena separado por un separador, indicado por el parámetro
document.write("<p>El array con join() es: " + animales.join(" * ") + "</p>"); //Perro * Gato * Pez * Hamster


//MÉTODOS PARA AÑADIR, EXTRAER O BORRAR ELEMENTOS
//shift() -> Extrae el primer elemento del array pero ya no hay hueco
var primero = animales.shift();
document.write("<p>El primer elemento del array es: " + primero + "</p>"); //Perro
document.write("<p>Ahora el array es: " + animales.toString() + "</p>"); //Gato,Pez,Hamster

//pop() -> Extrae el último elemento del array pero ya no hay hueco
document.write("<p>El último elemento del array es: " + animales.pop() + "</p>"); //Hamster
document.write("<p>Ahora el array es: " + animales.toString() + "</p>"); //Gato,Pez

//delete <nombre del Array>[<indice>] -> Elimina un elemento del array pero ahora hay un hueco undefined
delete animales[0]; 
document.write("<p>El array ahora es: " + animales.toString() + "</p>"); // ,Pez

//unshift(<elemento>) -> Añade un elemento al primcipio del array, es lo contrario al método shift()
animales.unshift("Conejo");
document.write("<p>Añadimos 'Conejo' al principio del array: " + animales.toString() + "</p>"); //Conejo,,Pez

//push(<elemento>) -> Añade un elemento al final del array, es lo contrario al método pop()
animales.push("Periquito");
document.write("<p>Añadimos 'Periquito' al final del array: " + animales.toString() + "</p>"); //Conejo,,Pez,Periquito

/*
Nota: Podemos añadir elementos de la siguiente manera:
    nombreArrar [<indice>] = <elemento>

Pero hay que tener cuidado de no sobreescribir o dejar huecos
Ahora el array animales está así:
Conejo,,Pez,Periquito
0     ,1,2 ,    3   

Así que veamos qué sucede cuando ponemos índice 1, 3, 5 y luego 4
*/

animales[1] = "Hurón";
document.write("<p>Añadimos 'Hurón' a la posición 1 del array: " + animales.toString() + "</p>"); //Conejo,Hurón,Pez,Periquito

animales[3] = "Loro";
document.write("<p>Añadimos 'Loro' a la posición 3 del array: " + animales.toString() + "</p>"); //Conejo,Hurón,Pez,Loro -> Sobreescribimos Periquito con Loro

animales[5] = "Iguana";
document.write("<p>Añadimos 'Iguana' a la posición 5 del array: " + animales.toString() + "</p>"); //Conejo,Hurón,Pez,Loro,,Iguana -> La posición 4 está vacía y hemos puesto Iguana en la 5

animales[4] = "Cobaya";
document.write("<p>Añadimos 'Cobaya' a la posición 4 del array: " + animales.toString() + "</p>"); //Conejo,Hurón,Pez,Loro,Cobaya,Iguana


/*
splice(<posicion a insertar/borrar>, <elementos a borrar[, <elementos a añadir separados por comas>])
Nos permite introducir o borrar elementos en la misma instrucción
*/

animales.splice(2, 1, "Vaca", "Toro");//Va a borrar el elemento 2 del array y va a meter dos nuevos elementos:0,1    ,2   ,3   ,4   ,5     ,6
document.write("<p>Usamos splice(2, 1, 'Vaca', 'Toro') en el array: " + animales.toString() + "</p>"); //Conejo,Hurón,Vaca,Toro,Loro,Cobaya,Iguana

animales.splice(1, 3, "Medusa");//Va a borrar tres elementos empezando por la posición 1 y mete otro:   0,1     ,2   ,3     ,4
document.write("<p>Usamos splice(1, 3, 'Medusa') en el array: " + animales.toString() + "</p>"); //Conejo,Medusa,Loro,Cobaya,Iguana

animales.splice(2, 1); //Elimina el elemento 2                                                 0,1     ,2     ,3
document.write("<p>Usamos splice(2, 1,) en el array: " + animales.toString() + "</p>"); //Conejo,Medusa,Cobaya,Iguana


//slice(<inicio>[,<fin>]) -> Devuelve un subarray desde la posición inidcada hasta (sin incluir) la final (el final no es obligatorio,pero si se pone, no se añade al array)
var subarray1 = animales.slice(1, 3);
var subarray2 = animales.slice(1);
document.write("<p>Esta es la subarray animales.slice(1, 3): " + subarray1.toString() + "</p>"); //Medusa,Cobaya
document.write("<p>Esta es la subarray animales.slice(1): " + subarray2.toString() + "</p>"); //Medusa,Cobaya,Iguana


//concat(<lista de arrays separados por comas>) -> Concatena el array inicial con todos los demás:
var animalesFavoritos = ["Tiburon Ballena", "Nutria"];
var todosLosAnimales = animales.concat(animalesFavoritos);
document.write("<p>Concatenamos animales y animalesFavoritos: " + todosLosAnimales.toString() + "</p>"); //Conejo,Medusa,Cobaya,Iguana,Tiburon Ballena,Nutria


//copyWithin(<indice posición>, <comienzo>, [<final>]) -> copia elementos del array y los sustituye por otros elementos. Si no se pone final, se hace hasta el final del array respetando la longitud
var animalesExoticos = ["Tapir", "Pangolín", "Ajolote", "Dragón de Mar", "Ligre", "Delfín rosado"];

animalesExoticos.copyWithin(1, 0); //-> copiamos los elementos desde el índice 0 hasta el final en la posición 1
document.write("<p>Hacemos animalesExoticos.copyWithin(1, 0): " + animalesExoticos.toString() + "</p>"); //Tapir,Tapir,Pangolín,Ajolote,Dragón de Mar,Ligre

animalesExoticos.copyWithin(2, 3, 5); //-> copiamos los elementos desde el 3 inclusive hasta el 5 exclusive, en la posición 2
document.write("<p>Hacemos animalesExoticos.copyWithin(2, 3, 5): " + animalesExoticos.toString() + "</p>"); //Tapir,Tapir,Ajolote,Dragón de Mar,Dragón de Mar,Ligre


//fill(<elemento>, [<comienzo>, <final>]) -> sustitiye todos los elementos del array por el elemento indicado
var animalesCrustaceos = ["Cangrejo", "Langosta", "Necora", "Camaron", "Pateiro", "Bogavante"];

animalesCrustaceos.fill("Percebe", 3, 5); //->Sustituye los elementos del array entre 3 inclusive y 5 exclusive, por "Percebe"
document.write("<p>Hacemos animalesCrustaceos.fill('Percebe', 3, 5)): " + animalesCrustaceos.toString() + "</p>"); //Cangrejo,Langosta,Necora,Percebe,Percebe,Bogavante

animalesCrustaceos.fill("Cigala"); // -> Sustituye todos los valores del array por "Cigala"
document.write("<p>Hacemos animalesCrustaceos.fill('Cigala'): " + animalesCrustaceos.toString() + "</p>"); //Cigala,Cigala,Cigala,Cigala,Cigala,Cigala


//MÉTODOS PARA BUSCAR
//indexOf(<elemento>[,<posicion>]) -> Devuelve el primer índice que encuentre el elemento. Podemos pasarle el valor de la posición donde va a empezar a buscar
document.write("<p>La primera posición de 'Cigala' es: " + animalesCrustaceos.indexOf("Cigala") + "</p>"); //0
document.write("<p>La primera posición de 'Cigala' empezando por la 2 es: " + animalesCrustaceos.indexOf("Cigala", 2) + "</p>"); //2

//lastIndexOf(<elemento>[,<posicion>]) -> Devuelve el último índice que encuentre el elemento. Podemos pasarle el valor de la posición donde va a empezar a buscar
document.write("<p>La última posición de 'Cigala' es: " + animalesCrustaceos.lastIndexOf("Cigala") + "</p>"); //5


//MÉTODOS PARA ORDENAR E INVERTIR EL ORDEN DEL ARRAY
//reverse() -> Invierte el orden de un array
document.write("<p>Animales del derecho: " + animales.toString() + "</p>"); //Conejo,Medusa,Cobaya,Iguana

animales.reverse();
document.write("<p>Animales del revés: " + animales.toString() + "</p>"); //Iguana,Cobaya,Medusa,Conejo

//sort() -> ordena el array alfabéticamente si son cadenas. Los números almacenados como cadenas o incluso como números se comparan caracter a caracter, no como cifras
animales.sort();
document.write("<p>Animales ordenados: " + animales.toString() + "</p>"); //Cobaya,Conejo,Iguana,Medusa

var numeros = [1234, 9874, 12, 0, 6524, 43];
numeros.sort();
document.write("<p>Numeros ordenados: " + numeros.toString() + "</p>"); //0,12,1234,43,6524,9874

var numerosCadena = ["1234", "9874", "12", "0", "6524", "43"];
numerosCadena.sort();
document.write("<p>Numeros cadena ordenados: " + numerosCadena.toString() + "</p>"); //0,12,1234,43,6524,9874


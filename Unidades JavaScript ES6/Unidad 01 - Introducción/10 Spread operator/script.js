/*
En esta lección vamos a hablar del operador spread u operador de propagación, también conocido como sintaxis extendida o spread sintax para los amigos de Shakespeare.
Esta sintaxis permite, en función de sobre qué se aplique:

    - A elementos iterables (array, cadena…) ser expandidos donde se esperan cero o más argumentos (para llamadas de función) o elementos (para Arrays literales).
    - A un objeto ser expandido en lugares donde se esperan cero o más pares de valores clave (para literales de tipo Objeto).
    
La sintaxis de cada caso sería la siguiente:

    Para arrays literales o cadenas
        [...objetoIterable, 'a', "caracola", 7];

    Para llamadas a funciones
        miFuncion(...objetoIterable);

    Para literales de tipo Object
        let clon = {...obj};
*/

/*
La sintaxis extendida o spread sintax permite:
    - A elementos iterables (array, cadena...) ser expandidos donde se esperan cero o más argumentos (para llamadas de función) o elementos (para Array literales)
    - A un objeto ser expandido en lugares donde se esperan cero o más pares de valores clave (para literales Tipo Objeto)

SINTAXIS:
    -Para arrays literales o cadenas
        [...objetoIterable, param1, param2, param3];
    
    - Para llamadas a funciones
        nombreFuncion(...objetoIterable);
    
    -Para leterales de tipo Object
        let nombreObjeto = {...obj};
*/

// ARRAYS:
console.log(Math.max(3, 1, 7)); // 7 -> Nos devuelve el máximo de estos tres valores que es 7

let array1 = [3, 1, 7];
console.log(Math.max(array1)); // NaN -> No se puede usar el array directamente en esta función

console.log(Math.max(...array1)); // 7 -> Con el operador extendido es como si le pasásemos los valores del array uno a uno


let array2 = [2, 6, 8];
console.log(Math.max(...array1, ...array2, 5, -1)); // 8 -> Se pueden usar varios arrays con el operador extendido y combinados con números sin problemas


//Concatenar dos arrays en uno con el spread operator
let arrayResultanteSinOperador = [array1, array2];
let arrayResultanteConOperador = [...array1, ...array2];

console.log("El array resultante sin operador: " + arrayResultanteSinOperador); //El array resultante sin operador: 3,1,7,2,6,8
console.log("El array resultante con operador: " + arrayResultanteConOperador); //El array resultante con operador: 3,1,7,2,6,8 -> Es mejor usar esta forma

//Copiar un array en otro array
let arrayCopiaSinOperador = array2;
let arrayCopiaSinOperadorParentesis = [array2];
let arrayCopiaConOperador = [...array2];

console.log("El resultado de let arrayCopiaSinOperador = array2: " + arrayCopiaSinOperador); // 2,6,8 -> Hacemos un paso por valor
console.log("El resultado de let arrayCopiaSinOperadorParéntesis = [array2]: " + arrayCopiaSinOperadorParentesis); // 2,6,8 -> Hacemos un paso por valor
console.log("El resultado de let arrayCopiaConOperador = [...array2]: " + arrayCopiaConOperador); // 2,6,8 -> Es la opción correcta


//CADENAS:
let saludo = "Hola, caracola";

console.log(saludo); //Hola, caracola -> Devuelve la cadena
console.log(...saludo); //H o l a ,  c a r a c o l a -> Esto está mal hecho
console.log([...saludo]); //(14) ['H', 'o', 'l', 'a', ',', ' ', 'c', 'a', 'r', 'a', 'c', 'o', 'l', 'a'] -> Devuelve un array donde cada letra es un par clave-valor


//FUNCIONES:
function suma(a, b, c) {
    return a + b + c;
}

const valores = [1, 3, 20];

console.log(suma(valores)); // 1,3,20undefinedundefined -> no funciona
console.log(suma(...valores)); // 24 -> Devuelve la suma de los valores del array


//OBJETOS:
let persona1 = { nombre: "Ada", nacimiento: 1815 };
let persona2 = { nombre: "Charles", nacimiento: 1791 };
let persona3 = { nombre: "Cristina", apellido: "Correa" };
let persona4 = { nombre2: "Elisa", nacimiento2: 1965 };

//Si queremos copiar un objeto en otro:
let clonAda = { ...persona1 }; // Esta es la manera correcta de hacer una copia de un objeto
console.log(clonAda); // {nombre: 'Ada', nacimiento: 1815}

//Si queremos juntar dos o más objetos:
let adaCharles = { ...persona1, ...persona2 };
console.log(adaCharles); // {nombre: 'Charles', nacimiento: 1791} -> Está sobreescribiendo los atributos del objeto persona2 sobre los de persona1 porque comparten todos

let charlesCristinaAda = { ...persona2, ...persona3, ...persona1 };
console.log(charlesCristinaAda); // {nombre: 'Ada', nacimiento: 1815, apellido: 'Correa'}

let adaElisa = { ...persona1, ...persona4 };
console.log(adaElisa); // {nombre: 'Ada', nacimiento: 1815, nombre2: 'Elisa', nacimiento2: 1965}
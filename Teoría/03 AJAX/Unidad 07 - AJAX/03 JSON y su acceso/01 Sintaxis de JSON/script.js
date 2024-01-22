/*
JSON es el acrónimo de Javascript Object Notation, es decir, es texto escrito en notación de objetos de Javascript. En comparación con XML, es mucho más corto, más rápido de leer y escribir y puede integrar arrays, por lo que se ha convertido en el candidato para sustituir a su antecesor.

Las reglas a seguir para escribir con JSON son las siguientes:

  - Hay dos tipos de elementos:
    - Arrays: listas de valores entre corchetes y separadas por comas.
       [“hola”, 3, “Ada Lovecode”, 1.234]
    - Objetos: listas de parejas nombre:valor separados por dos puntos y a su vez cada pareja por comas. Los objetos se escriben entre llaves y los nombres de las parejas siempre entre comillas dobles.
       {“nombre”: “Ada Lovecode”, “nacimiento”: 1815 }

  - Un documento JSON únicamente contiene un elemento (objeto o array).
  
  - El último elemento de objetos y arrays no puede ir seguido de coma.
  
  - Los espacios en blanco y saltos de línea son irrelevantes.
  
  - Los valores en objetos y arrays pueden ser:- 
    - números: enteros, decimales, exponencial, etc.
    - cadenas: entre comillas dobles.
    - valores true, false y null (sin comillas).
    - objetos y arrays: pueden contener a su vez más objetos y matrices sin límite de anidamiento.
  
  - No pueden contener comentarios.

Veremos cómo trabajar con JSON para realizar las siguientes operaciones:
  - Definición de un objeto en JSON.
  - Acceso a objetos: utilizando la notación punto o corchetes. También veremos cómo acceder a un objeto dentro de otro objeto.
  - Recorrer los nombres de un objeto: utilizando for… in.
  - Definición de un array mediante el nombre y sus valores entre corchetes.
  - Acceso a los elementos de un array: utilizando for…in y for.
  - Borrar elementos de un objeto.
*/

/*
SINTAXIS:
  Datos: pares nombre valor -> "nombre": valor
    - Valor:
    - Sin comillas: número, boolean y null
    - Con comillas: Strings
    - Entre llaves: Objetos
    - Entre corchetes: Arrays
    - NO SE PUEDEN ENVIAR: funciones, fechas o undefined -> Para esto se deben mandar como un String y luego parsearlo al formato que queramos

Ejemplo:
let ada = {"nombre": "Ada", "nacimiento": 1815, "pais": "Reino Unido"};
*/

// DEFINICIÓN:
// Objetos -> nombre del objeto y entre llaves, par nombre:valor
let objeto1 = { nombre: "Ada", nacimiento: 1815, pais: "Reino Unido" };


// ACCESO: usamos la notación punto
alert(objeto1.nombre + " : " + objeto1.nacimiento + " : " + objeto1.pais);
alert(
  objeto1["nombre"] + " : " + objeto1["nacimiento"] + " : " + objeto1["pais"]
);


// RECORRER LOS NOMBRES DE UN OBJETO:
// for(<variable> in <objeto>) {} -> El nombre del objeto es la "variable" y "objeto"["variable"] devuelve el valor
const DIV = document.getElementById("demo");

for (let x in objeto1) {
  DIV.innerHTML += x + " : " + objeto1[x] + "</br>";
}


// OBJETOS ANIDADOS
// Objetos que contienen otros objetos
let objeto2 = {
  nombre: "Ada",
  nacimiento: 1815,
  pais: "Reino Unido",
  hijos: {
    hijo1: "Anne Blunt",
    hijo2: "Byron King-Noel",
    hijo3: "Ralph King-Milbanke"
  }
};

// Acceso a un objeto dentro de otro objeto
let y = objeto2.hijos.hijo1; // objeto2.hijos["hijo1"] -> Se puede hacer de ambas formas
alert("Su primer hijo fue " + y);



// ARRAYS:
let arrays = { hijos: ["Anne Blunt", "Byron King-Noel", "Ralph King-Milbanke",] };

let objeto3 = {
  nombre: "Ada",
  nacimiento: 1815,
  pais: "Reino Unido",
  hijos: ["Anne Blunt", "Byron King-Noel", "Ralph King-Milbanke"]
};

// Acceso a los diferentes valores de un Array en un Objeto:
let z = objeto3.hijos[1];
alert("El segundo hijo fue " + z);

// Recorrer los elementos de un array
let hijosAda1 = "";

for (let i in objeto3.hijos) { // recorremos los hijos
  hijosAda1 += objeto3.hijos[i] + ", "
}

DIV.innerHTML += "Todos los hijos: " + hijosAda1 + "</br>";

// Otra forma de recorrer
let hijosAda2 = "";

for (let i = 0; i < objeto3.hijos.length; i++){
  hijosAda2 += objeto3.hijos[i] + " ;"; 
}

DIV.innerHTML += "Todos los hijos (otra forma): " + hijosAda2 + "</br>";


//Si queremos borrar elementos de un objeto utilizamos "delete"
delete objeto1.nacimiento;

// Borrar un objeto dentro de otro
delete objeto2.hijos.hijo2;

// Borramos uno de los valores del array dentro de un objeto:
// Para borrar al primer elemento podemos usar:
objeto3.hijos.shift(); // delete objeto3.hijos[0]; -> También sirve

//Para borrar al segundo elemento
delete objeto3.hijos[1]; // forma simple y a continuación forma compleja:

let index = objeto3.hijos.indexOf("Byron King-Noel");

if (index > -1) {
  objeto3.hijos.splice(index, 1);
}

// Para borrar al último elemento
objeto3.hijos.splice(2, 1); // delete objeto3.hijos[2]; -> También sirve
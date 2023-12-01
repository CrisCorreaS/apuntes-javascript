/*
Las clases en Javascript se introdujeron en esta versión (ECMAScript2015 o ES6) y supusieron una mejora significativa en la herencia basada en prototipos de Javascript a la que estábamos acostumbrados. Estas clases nos dan una sintaxis más clara y simple para crear objetos y trabajar con herencia.

A diferencia de la versión anterior de Javascript en la que utilizábamos la palabra reservada function para definir una “clase” (entre comillas), en esta versión se utiliza class; además, las propiedades se deben indicar dentro de un método constructor. La sintaxis sería la siguiente:

    class NombreClase {
    constructor(parametro1 [,parametro 2...]) {
        this.propiedad1 = parametro1;
        [this.propiedad2 = parametro2;]
    }
    }

Y cómo no, para definir un objeto de la clase, utilizamos la palabra reservada new.
    
    let|const nombreObjeto = new NombreClase (argumentos);

Las clases son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript
    - Ofrecen una sintaxis más simple para crear objetos
    - No utiliza la palabra function, no la palabra "class"
    - Las propiedades (atributos) se asignan en un método constructor(), no en la clase en sí
    - Solo pueden tener un constructor

SINTAXIS:
    class NombreDeLaClaseEnMayúsculas {
        constructor (atributo1, atributo2, ...){
            this.atributo1 = atributo1;
            this.atributo2 = atributo2;
            ...
        }
    }
*/

//Como se creaban las clases antes con JavaScript ES5:
function Persona1(nombre, apellido, edad, nacionalidad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
}

//Como se creaban las instancias de objetos antes:
let persona1 = new Persona1("Cristina", "Correa", 23, "Española");
console.log("Se llama " + persona1.nombre + " " + persona1.apellido + ", es " + persona1.nacionalidad + " y tiene " + persona1.edad + " años"); //Se llama Cristina Correa, es Española y tiene 23 años


//Como se crean las clases con JavaScript ES6:
class Persona2{
    constructor(nombre, apellido, edad, nacionalidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }
}

//Como se crean las instancias de objetos ahora:
let persona2 = new Persona2("Sushma", "Padín", 22, "Española");
console.log("Se llama " + persona2.nombre + " " + persona2.apellido + ", es " + persona2.nacionalidad + " y tiene " + persona2.edad + " años"); //Se llama Sushma Padín, es Española y tiene 22 años



//Otros ejemplos de clases de JavaScript ES6:
class Telefono {
    constructor(mar, mod) {
        this.marca = mar;
        this.modelo = mod;
    }
}

//Creación del objeto
let miTelefono = new Telefono("Google", "Pixel");
console.log("Mi teléfono es un " + miTelefono.marca + " " + miTelefono.modelo); //Mi teléfono es un Google Pixel
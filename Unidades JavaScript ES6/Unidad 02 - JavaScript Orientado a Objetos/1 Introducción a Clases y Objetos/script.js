/*
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
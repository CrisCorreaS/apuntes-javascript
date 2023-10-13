/*
Los prototipos es algo que… os trae de cabeza. Como lo leéis. Lo sé, es algo raro de entender entre la programación orientada a objetos, las clases, los objetos que hemos visto hasta ahora…
Básicamente, podríamos decir que es un modo que nos permite que los objetos de Javascript hereden características entre sí.

En esta lección vamos a aprender a diferenciar un objeto y un prototipo y a ver cómo añadir y borrar propiedades y métodos a un objeto y a un prototipo.
Por supuesto, se puede profundizar muchísimo más en el trabajo con prototipos como veremos a continuación
*/

/*
PROTOTIPOS:
    -Todos los objetos tienen un prototipo que a su vez es un objeto

SINTAXIS DE CREACIÓN DE UN PROTOTIPO DE UN OBJETO USANDO LA FUNCIÓN CONSTRUCTOR:

    function NombreObjecto(atri1, atri2, atri3){
        //ATRIBUTOS
        this.atributo1 = atri1;
        this.atributo2 = atri2;
        this.atributo3 = atri3;

        //MÉTODOS
        this.nombreMetodo = function (){
            //Código
        }
    }
*/
function Persona(nom, ape, ed) {
  this.nombre = nom;
  this.apellido = ape;
  this.edad = ed;

  this.nombreCompleto = function () {
      return this.nombre + " " + this.apellido;
  };
}

var persona1 = new Persona("Cristina", "Correa", 23);
var persona2 = new Persona("Sushma", "Padin", 22);

//Añadir un atributo a un objeto
persona1.nacionalidad = "Española";

alert(persona1.nacionalidad); //Española
alert(persona2.nacionalidad); //Undefined -> Ahora el objeto también tiene el atributo nacionalidad pero esta clase llamada persona2, aún no le ha puesto un valor. Nacionalidad está en persona1 pero no en persona2, así que tampoco está en el prototipo de persona2

//Añadir un método a un objeto
persona1.edadActual = function() {
    return "Tiene " + this.edad + " años";
}

alert(persona1.edadActual()); //Tiene 23 años
alert(persona1.edadActual); //function() { return "Tiene " + this.edad + " años"; }
// alert(persona2.edadActual()); //Da un error -> nos dice que no funciona porque persona2.edadActual no es una función
alert(persona2.edadActual); //undefined

/*
Añadir un atributo al prototipo:
    1.- Añadirlo ya en la propia definición del objeto
    2.- Escribir la siguiente instrucción:

        <NombreObjeto>.prototype.<nombreAtributoNuevo>;
*/
Persona.prototype.ciudad = "A Coruña"; //Ahora, por defecto, Persona van a tener "A Coruña" como ciudad por defecto
alert(persona1.ciudad); //A Coruña
alert(persona2.ciudad); //A Coruña

persona2.ciudad = "Narón";
alert(persona1.ciudad); //A Coruña
alert(persona2.ciudad); //Narón

Persona.prototype.segundoApellido = "Segade";
/*
Añadir un método al prototipo:
    1.- Añadirlo ya en la propia definición del objeto
    2.- Escribir la siguiente instrucción:

        <NombreObjeto>.prototype.<nombreMétodoNuevo> = function(){ //Código };
*/

Persona.prototype.apellidos = function(){
    return this.apellido + " " + this.segundoApellido;
}

alert(persona1.apellidos()); //Correa Segade
alert(persona1.apellidos);//function(){ return this.apellido + " " + this.segundoApellido; }
alert(persona2.apellidos());//Padin Segade
alert(persona1.apellidos);//function(){ return this.apellido + " " + this.segundoApellido; }

persona2.segundoApellido = "Ramos";
alert(persona2.apellidos()); //Padin Ramos
alert(persona2.apellidos); //function(){ return this.apellido + " " + this.segundoApellido; }
alert(persona1.apellidos()); //Correa Segade


var persona3 = new Persona("José Manuel", "Carrera", 23 );

for (x in persona3) {
  alert(persona3[x]); //José Manuel / Carrera / 23 / function () { return this.nombre + " " + this.apellido; }; / A Coruña / Segade / function(){ return this.apellido + " " + this.segundoApellido; } 
}

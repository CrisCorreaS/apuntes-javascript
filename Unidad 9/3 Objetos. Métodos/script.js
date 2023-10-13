/*
Al igual que vimos en la lección anterior, en los lenguajes de programación con objetos, además de atributos éstos tienen lo que se denominan métodos de un objeto, que son funciones asociadas o, podría decirse, atributos en forma de función.

Para definir un método (en ES5) la sintaxis es la siguiente:
    nombre_método: function () {
        // Instrucciones
    }

Igualmente, el modo de acceder a los métodos de un objeto lo vemos a continuación:
    nombre_objeto.nombre_método();

*/

/*
SINTAXIS DE CREACIÓN DE MÉTODOS DE UN OBJETO

    <nombreMétodo> : function(){
        //Instrucciones
    }

SINTAXIS DE ACCESO MÉTODOS DE UN OBJETO:

    <nombreObjeto>.<nombreMétodo>();

SINTAXIS PARA CONSULTAR UN MÉTODO DE UN OBJETO:

    <nombreObjeto>.<nombreMétodo>;
*/

var persona1 = {
    nombre: "Cristina",
    apellido: "Correa",
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
};

alert(persona1.nombre); //Cristina
alert(persona1.apellido); //Correa
alert(persona1.nombreCompleto()); //Cristina Correa
alert(persona1.nombreCompleto); // nombreCompleto: function () { return this.nombre + " " + this.apellido; }


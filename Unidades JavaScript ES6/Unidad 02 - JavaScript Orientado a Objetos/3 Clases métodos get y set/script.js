/*
Continuamos con clases en Javascript y en esta lección vamos a ver cómo crear métodos get y set (o también llamados getters y setters) que incluir en nuestras clases.
Estos métodos nos permiten extraer (get) y modificar (set) las propiedades de un objeto. De este modo, nosotros podemos elegir exactamente, mediante estos métodos, qué propiedades pueden ser accedidas y modificadas y cuáles no.
De hecho, los getters y setters determinan el fundamento del principio de encapsulación de la programación orientada a objetos. ¿Pero qué es esto de la encapsulación? Te lo explico de una manera muy sencilla como si un objeto fuera una nave espacial.
Lo habitual en otros lenguajes de programación es definir los getters y setters con la palabra get o set seguida del nombre de la propiedad. Pero Javascript es un caso especial, y los getters y setters se escriben con la palabra get o set, separadas por un espacio del nombre de la propiedad, con una particularidad: ¡no podemos poner el mismo nombre al método que a la propiedad porque entraríamos en un bucle! Por eso muchos desarrolladores utilizan el guion bajo para nombrar la propiedad.
Los métodos get() y set() se utilizan para asignar y extraer atributos de un objeto.

Es muy importante tener en cuenta que el nombre de los guetters y de los setters no puede ser el mismo que el de la propiedad porque se produciría un bucle infinito:
    Al acceder a la propiedad invocaríamos al método que a su vez accede a la propiedad que invoca al método... y así sucesivamente, creando un bucle infinito
Por esto, muchos desarrolladores utilizan el guión bajo para nombrear la propiedad
*/

window.addEventListener("load", function(){
    class Telefono{
        constructor(marca){
            this._marca = marca; // Ahora ponemos en el this. la propiedad con un guión bajo
        }

        //Getter:
        get marca() {
            return this._marca;
        }

        //Setter:
        set marca(marcaPropiedad){
            this._marca = marcaPropiedad;
        }
    }

    //Objetos:
    let miTelefono = new Telefono("Google");

    //Getter y Setter
    miTelefono.marca = "iPhone"; //Usamos un setter aquí
    this.alert("Mi teléfono es un " + miTelefono.marca); //Mi teléfono es un iPhone -> Usamos 
    
}, true);
/*
Seguimos trabajando con clases en Javascript y en esta lección vamos a ver cómo trabajar con la herencia. Al igual que en otros lenguajes de programación, definimos la relación entre una clase padre y una clase hijo utilizando la palabra reservada extends, que definiría la relación de esta segunda clase con la primera. Además, para hacer referencia a los atributos de la clase padre utilizamos la palabra super.

Brevemente, la sintaxis para definir una cabecera de una clase hijo sería la siguiente:

  class ClaseHijo extends ClasePadre

Para crear herencia de clases hay que utilizar la palabra "extends"
Una clase hija creada con herencia, hereda todos los métodos de la clase padre
*/

//Hasta que no se ejecuta el código de html no se ejecuta lo siguiente:
window.addEventListener(
  "load",
  function () {
    //Clase padre
    class Telefono {
      constructor(marca) {
        this.marca = marca;
      }

      anuncio() {
        return "Ha llegado el nuevo teléfono de " + this.marca;
      }
    }

    //Clase hija
    class Modelo extends Telefono {
      constructor(marca, modelo) {
        super(marca); //Decimos que queremos heredar "marca" de la clase padre
        this.modelo = modelo;
      }

      anuncioCompleto() {
        return this.anuncio() + ": el modelo " + this.modelo; //Usamos el método anterior y le concatenamos también más código
      }
    }

    //Instanciamos la clase con un objeto
    let miTelefono = new Modelo("Google", "Pixel");

    mensaje.innerHTML = miTelefono.anuncioCompleto(); //Ha llegado el nuevo teléfono de Google: el modelo Pixel
    alert(miTelefono.anuncio()); //Ha llegado el nuevo teléfono de Google
    alert(miTelefono.marca); //Google
    alert(miTelefono.modelo); //Pixel
  },
  true
);

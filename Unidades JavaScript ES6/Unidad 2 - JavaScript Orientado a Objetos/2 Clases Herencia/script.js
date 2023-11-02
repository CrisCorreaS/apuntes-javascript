/*
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

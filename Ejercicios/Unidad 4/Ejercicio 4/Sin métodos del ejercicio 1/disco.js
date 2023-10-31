export default class Disco {
  constructor(nombre, grupo, year, tipo) {
    this.nombre = nombre;
    this.grupo = grupo;
    this.year = year;
    this.tipo = tipo;
    this.localizacion = 0;
    this.prestado = false;
    this.caratula = "imagen.png";
  }

  cambiarLocalizacion(nuevaLocalizacion) {
    this.localizacion = nuevaLocalizacion;
  }

  cambiarPrestado(nuevoPrestado) {
    this.prestado = nuevoPrestado;
  }

  mostrarInfo() {
    let localizacionMostrar = this.localizacion || 0; //Si pongo el OR (||), cuando hay valores en localización que son null, undefined, NaN, 0, una cadena vacía (""), o false, me pone el valor por defecto.
    let prestadoMostrar = this.prestado || false;
    let caratulaMostrar = this.caratula || "imagen.png";
  
    return `Nombre: ${this.nombre}, Grupo: ${this.grupo}, Año: ${this.year}, Tipo: ${this.tipo}, Localizacion: ${localizacionMostrar}, Prestado: ${prestadoMostrar}, Carátula: ${caratulaMostrar}`;  
  }
}
export {Disco}
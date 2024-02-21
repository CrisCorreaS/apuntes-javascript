export default class Persona {
  constructor(nombre, apellido, email) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._email = email;
    this._contrasinal = "";
  }

  // Getters:
  get nombre() {
    return this._nombre;
  }

  get apellido() {
    return this._apellido;
  }

  get email() {
    return this._email;
  }

  get contrasinal() {
    return this._contrasinal;
  }

  // Setters:
  set nombre(nombre) {
    this._nombre = nombre;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  set email(email) {
    this._email = email;
  }

  set contrasinal(contrasinal) {
    this._contrasinal = contrasinal;
  }
}


export { Persona };

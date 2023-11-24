export default class Cliente {
  // Constructor
  constructor(documentacion, fecha_nacimiento) {
    this._documentacion = documentacion;
    this._fecha_nacimiento = fecha_nacimiento;
    this._clave = crearClave();
  }

  // Getters:
  get documentacion() {
    return this.documentacion;
  }

  get fecha_nacimiento() {
    return this._fecha_nacimiento;
  }

  get clave() {
    return this._clave;
  }

  // Setters:
  set documentacion(documentacion) {
    this._documentacion = documentacion;
  }

  set fecha_nacimiento(fecha_nacimiento) {
    this._fecha_nacimiento = fecha_nacimiento;
  }

  set clave(clave) {
    this._clave = clave;
  }
}


function crearClave() {
  let numero;
  let clave = "";
  
  for(let i = 0; i < 6; i++){
    numero = Math.floor(Math.random() * 10);
    clave += numero;
  }
  
  return clave;
}

export { Cliente };
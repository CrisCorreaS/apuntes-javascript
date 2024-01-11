export default class Edificio {
  constructor(calle, numero, codigoPostal, plantas, puertas) {
    this._calle = calle;
    this._numero = numero;
    this._codigoPostal = codigoPostal;
    this._plantas = plantas;
    this._puertas = puertas;

    console.log(
      `Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal}. Con ${this.plantas} plantas y ${puertas} puertas`
    );
  }

  get calle() {
    return this._calle;
  }

  set calle(calle) {
    this._calle = calle;
  }

  get numero() {
    return this._numero;
  }

  set numero(numero) {
    this._numero = numero;
  }

  get codigoPostal() {
    return this._codigoPostal;
  }

  set codigoPostal(codigoPostal) {
    this._codigoPostal = codigoPostal;
  }

  get plantas() {
    return this._plantas;
  }

  set plantas(plantas) {
    this._plantas = plantas;
  }

  get puertas() {
    return this._puertas;
  }

  set puertas(puertas) {
    this._puertas = puertas;
  }
}

export { Edificio };

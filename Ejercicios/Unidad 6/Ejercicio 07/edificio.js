export default class Edificio {
  constructor(calle, numero, codigoPostal, plantas, puertas) {
    this._calle = calle;
    this._numero = numero;
    this._codigoPostal = codigoPostal;
    this._plantas = plantas;
    this._puertas = puertas;
    this._datos = [];

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

  letraEdificio(puerta) {
    let letras = ["A", "B", "C", "D", "E", "F"];
    let numero;

    if (
      parseInt(this.puertas) % 4 == 0 &&
      parseInt(this.puertas) % parseInt(this.plantas == 0)
    ) {
      if (puerta > 4) {
        numero = puerta / 4;
      } else {
        numero = puerta;
      }
      return letras[numero - 1];
    } else if (
      parseInt(this.puertas) % 6 == 0 &&
      parseInt(this.puertas) % parseInt(this.plantas) == 0
    ) {
      if (puerta > 6) {
        numero = puerta / 6;
      } else {
        numero = puerta;
      }
      return letras[numero - 1];
    }

    return -1;
  }

  addDatos(planta, puerta, nombre) {
    let letraPuerta = this.letraEdificio(puerta);

    this._datos = [
      {
        propietario: nombre,
        piso: planta,
        numeroPiso: letraPuerta,
      },
    ];
  }

  showDatos() {
    return this._datos;
  }
}

export { Edificio };

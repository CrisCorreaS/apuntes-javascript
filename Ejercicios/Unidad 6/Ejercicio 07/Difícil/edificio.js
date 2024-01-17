export default class Edificio {
  constructor(calle, numero, codigoPostal, plantas, puertas) {
    this._calle = calle;
    this._numero = numero;
    this._codigoPostal = codigoPostal;
    this._plantas = plantas;
    this._puertas = puertas;

    this._puertasPorPlantas = parseInt(this.puertas) / parseInt(this.plantas);

    this._datos = [];
    
    this._letraPiso;

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

  get puertasPorPlantas() {
    return parseInt(this.puertas) / parseInt(this.plantas);
  }

  letraEdificio(puerta) {
    let letras = ["A", "B", "C", "D", "E", "F", "H", "I"];
    let numero;

    if (puerta > 0) {
      while (puerta > this._puertasPorPlantas) {
        puerta - this._puertasPorPlantas;
      }

      numero = puerta;
      return letras[numero - 1];
    } else {
      return -1;
    }
  }

  establecerDatos() {
    for (let i = 0; i < this._plantas; i++) {
      for (let j = 0; j < this._puertasPorPlantas; j++) {
        let hogar = { planta: i + 1, puerta: j + 1, propietario: null };
        this._datos.push(hogar);
      }
    }
  }

  modificarDatos(numPlanta, numPuerta, nombrePropietario) {
    let indiceHogar = this._datos.findIndex(
      (hogar) => hogar.planta == numPlanta && hogar.puerta == numPuerta
    );

    let copiaDatos = [...this._datos];

    if (copiaDatos[indiceHogar].propietario !== nombrePropietario) {
      copiaDatos[indiceHogar].propietario = nombrePropietario;
    }

    this._datos = copiaDatos;
  }

  showDatos() {
    return this._datos;
  }

  showPropietario(numPlanta, numPuerta) {
    let indiceHogar = this._datos.findIndex(
      (hogar) => hogar.planta === numPlanta && hogar.puerta === numPuerta
    );

    return this._datos[indiceHogar].propietario;
  }
}

export { Edificio };

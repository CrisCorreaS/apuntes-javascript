class Edificio {
  constructor(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.plantas = [];
    alert(
      "Construido nuevo edificio en calle: " +
        calle +
        ", nº" +
        numero +
        " CP: " +
        codigoPostal
    );
  }

  agregarPlantasYPuertas(numPlantas, puertas) {
    for (let i = 0; i < numPlantas; i++) {
      let planta = [];
      for (let j = 0; j < puertas; j++) {
        planta.push({ propietario: null });
      }
      this.plantas.push(planta);
    }
  }

  modificarNumero(numero) {
    this.numero = numero;
  }

  modificarCalle(calle) {
    this.calle = calle;
  }

  modificarCodigoPostal(codigo) {
    this.codigoPostal = codigo;
  }

  imprimeCalle() {
    return this.calle;
  }

  imprimeNumero() {
    return this.numero;
  }

  imprimeCodigoPostal() {
    return this.codigoPostal;
  }

  agregarPropietario(nombre, planta, puerta) {
    this.plantas[planta - 1][puerta - 1].propietario = nombre;
    alert(
      nombre +
        " es ahora el propietario de la puerta " +
        puerta +
        " de la planta " +
        planta
    );
  }
  
  imprimePlantas() {
    let info = "";
    this.plantas.forEach((planta, indexPlanta) => {
      info += `Planta ${indexPlanta + 1}: <br>`;
      planta.forEach((puerta, indexPuerta) => {
        info += `Puerta ${indexPuerta + 1}: ${puerta.propietario} <br>`;
      });
      info += "<br>";
    });
    return info;
  }
}

export { Edificio };

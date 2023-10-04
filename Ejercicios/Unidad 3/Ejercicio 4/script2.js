//Cristina Correa

function ejecutar() {
  let radio = document.getElementById("radio").value;

  let diametro = 2 * radio;
  let circunferencia = 2 * Math.PI * radio;
  let areaCirculo = Math.PI * Math.pow(radio, 2);
  let areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
  let volumenEsfera = (4 / 3) * Math.PI * Math.pow(radio, 3);

  alert(
    radio + "cm \n" +
    diametro.toFixed(2) + "cm \n" +
    circunferencia.toFixed(2) + " cm \n" +
    areaCirculo.toFixed(2) + "cm2 \n" +
    areaEsfera.toFixed(2) + "cm2 \n" +
    volumenEsfera.toFixed(2) + "cm3"
  );
}

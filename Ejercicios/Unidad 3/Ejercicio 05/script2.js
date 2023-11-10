//Cristina Correa

function calcular(){
    let respuesta = document.getElementById("numero").value;

    let respuestaInt = Number.parseInt(respuesta);

    let numeroExponencial = respuestaInt.toExponential();
    let numeroCuatroDecimales = respuestaInt.toFixed(4);
    let numeroBinario = respuestaInt.toString(2);
    let numeroOctal = respuestaInt.toString(8);
    let numeroHexadecimal = respuestaInt.toString(16);

    alert(respuesta + "\n" + numeroExponencial + "\n" + numeroCuatroDecimales + "\n" + numeroBinario + "\n" + numeroOctal + "\n" + numeroHexadecimal);
}
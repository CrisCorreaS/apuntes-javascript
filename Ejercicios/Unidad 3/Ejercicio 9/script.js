//Cristina Correa

function devolverDatosDni() {
  let dni = document.getElementById("dniRespuesta").value;
  if (dni.length == 8) {
    let dniNumerico = Number(dni);
    let resto = dniNumerico % 23;
    let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letraDNI = letrasDNI.charAt(resto);
    alert(
      "Tu letra de DNI es: " +
        letraDNI +
        "\nTu DNI completo es: " +
        dni +
        letraDNI
    );
  } else {
    alert("No has escrito bien el DNI");
  }
}

function devolverDatosNie() {
  let nie = document.getElementById("nieRespuesta").value;
  if (nie.length == 8) {
    if (
      nie.charAt(0).toLowerCase() == "x" ||
      nie.charAt(0).toLowerCase() == "y" ||
      nie.charAt(0).toLowerCase() == "z"
    ) {
      switch (nie.charAt(0).toLowerCase()) {
        case "x":
          nie = nie.replace(/x/, "0");
          break;
        case "y":
          nie = nie.replace(/y/, "1");
          break;
        case "z":
          nie = nie.replace(/z/, "2");
      }
      let nieNumerico = Number(nie);
      let resto = nieNumerico % 23;
      let letrasNIE = "TRWAGMYFPDXBNJZSQVHLCKE";
      let letraNIE = letrasNIE.charAt(resto);
      alert(
        "Tu letra de NIE es: " +
          letraNIE +
          "\nTu NIE completo es: " +
          nie +
          letraNIE
      );
    }
  } else {
    alert("No has escrito bien el NIE");
  }
}

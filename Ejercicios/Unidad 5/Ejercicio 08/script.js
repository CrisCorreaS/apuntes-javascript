document.getElementById("enviar").addEventListener("click", validar, false);

function correccion() {
  let pregunta1 = document.querySelector('input[name="pregunta1"]:checked'); // Usamos querySelector() para obtener los atributos "name" de las etiquetas input, en vez de getElementById() para obtener los atributos "id", por buena práctica
  let pregunta2 = document.querySelector('input[name="pregunta2"]:checked'); // Elige la opción marcada (chequed) de la pregunta 2
  let pregunta3 = document.querySelector('input[name="pregunta3"]:checked');
  let pregunta4 = document.querySelector('input[name="pregunta4"]:checked');

  let correctas = 0;

  if (pregunta1.value === "c") {
    pregunta1.parentElement.parentElement.className = "pregunta-correcta"; // Añade un atributo 'name="pregunta-correcta"' a la etiqueta padre de la etiqueta padre de la etiqueta con el atributo 'class="pregunta1"' -> la etiqueta <input> está dentro de la etiqueta <label> la cual es su parentElement. El parentElement de <input> es <li> por lo tanto, es la etiqueta <li> a la que se le añade el 'class="pregunta-correcta"'
    correctas++;
  } else {
    pregunta1.parentElement.parentElement.className = "pregunta-incorrecta";
  }

  if (pregunta2.value === "a") {
    pregunta2.parentElement.parentElement.className = "pregunta-correcta";
    correctas++;
  } else {
    pregunta2.parentElement.parentElement.className = "pregunta-incorrecta";
  }

  if (pregunta3.value === "c") {
    pregunta3.parentElement.parentElement.className = "pregunta-correcta";
    correctas++;
  } else {
    pregunta3.parentElement.parentElement.className = "pregunta-incorrecta";
  }

  if (pregunta4.value === "c") {
    pregunta4.parentElement.parentElement.className = "pregunta-correcta";
    correctas++;
  } else {
    pregunta4.parentElement.parentElement.className = "pregunta-incorrecta";
  }

  let incorrectas = 4 - correctas;

  document.getElementById("respuesta").innerHTML =
    "Has acertado <span id='correctas'>" +
    correctas +
    "</span> preguntas y has fallado <span id='incorrectas'>" +
    incorrectas +
    "</span> preguntas";
}

function limpiar() {
  let formulario = document.forms[0];
  let preguntas = ["p1", "p2", "p3", "p4"];

  // Ponemos la respuesta como siempre
  document.getElementById("respuesta").className = "normal";
  document.getElementById("respuesta").innerHTML = "";

  // Limpiamos los atributos "class"
  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }

  // Le quitamos cualquier fondo rojo que tengan los elementos <li> que engloban las preguntas sin respuesta
  for (let j = 0; j < 3; j++) {
    document.getElementById(preguntas[j]).className = "normal";
    document.getElementById("span" + (1 + j)).className = "pregunta-icono";
  }
}

function validarPreguntas() {
  let preguntas = ["p1", "p2", "p3", "p4"];
  let todasRespondidas = true;

  for (let i = 0; i < preguntas.length; i++) {
    let opciones = document.getElementsByName("pregunta" + (i + 1));
    let seleccionado = false;

    for (let j = 0; j < opciones.length; j++) {
      if (opciones[j].checked) {
        seleccionado = true;
        break;
      }
    }

    if (!seleccionado) {
      document.getElementById(preguntas[i]).className = "no-select";
      document.getElementById("respuesta").innerHTML = "No has respondido a todas las preguntas";
      document.getElementById("respuesta").className = "error";
      todasRespondidas = false;
    }
  }
  return todasRespondidas;
}

function validar(e) {
  limpiar();
  e.preventDefault();

  if (validarPreguntas()) {
    correccion();
    return true;
  } else {
    return false;
  }
}

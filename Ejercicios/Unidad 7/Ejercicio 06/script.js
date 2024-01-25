const INPUT = document.getElementById("tarea");
const SUBMIT = document.getElementById("submit");
const TEXTO = document.getElementById("texto");

let tareas = [];
let numCheckbox = 1;
let i;

function pintarPrimerasTareas() {
  for (let j = 0; j < tareas.length; j++){
    let checkbox = document.createElement("input");
    let li = document.createElement("li");

    let tareaTexto = tareas[j].texto;
    let texto = document.createTextNode(tareaTexto);

    checkbox.type = "checkbox";
    checkbox.id = numCheckbox.toString();

    li.appendChild(checkbox);
    li.appendChild(texto);

    // Le ponemos el addEventListener() al label
    li.addEventListener(
      "click",
      () => {
        li.classList.toggle("incorrecto");
      },
      false
    );

    // Ponemos el label dentro del div
    TEXTO.appendChild(li);

    numCheckbox++;
  }
  i = tareas.length;
}

function obtenerDatosJSON() {
  let xhr = new XMLHttpRequest();

  xhr.responseType = "json";
  xhr.open("GET", "file/tareas.json", true);
  xhr.onload = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      tareas = [...xhr.response];
      pintarPrimerasTareas();
    } else {
      console.log("Ha habido un error al cargar el archivo: " + xhr.status);
    }
  }
  xhr.send();
}

document.addEventListener("DOMContentLoaded", obtenerDatosJSON, false);

SUBMIT.addEventListener("click", addTarea, false);

function addTarea(e) {
  let textoCheckbox = INPUT.value;

  const nuevaTarea = { texto: textoCheckbox, realizada: false };

  tareas.push(nuevaTarea);

  INPUT.value = "";

  e.preventDefault();

  showTarea();
}

function showTarea() {
  // Creamos los elementos y los nodos
  let checkbox = document.createElement("input");
  let li = document.createElement("li");

  let tareaTexto = tareas[i].texto;
  let texto = document.createTextNode(tareaTexto);

  checkbox.type = "checkbox";
  checkbox.id = numCheckbox.toString();

  li.appendChild(checkbox);
  li.appendChild(texto);

  // Le ponemos el addEventListener() al label
  li.addEventListener(
    "click",
    () => {
      li.classList.toggle("incorrecto");
    },
    false
  );

  // Ponemos el label dentro del div
  TEXTO.appendChild(li);

  numCheckbox++;
  i++;
}

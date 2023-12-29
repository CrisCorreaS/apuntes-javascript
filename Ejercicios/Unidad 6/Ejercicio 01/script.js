const FORMULARIO = document.getElementById("formulario");
const INPUT = document.getElementById("tarea");
const SUBMIT = document.getElementById("submit");
const TEXTO = document.getElementById("texto");
const LABELS = document.querySelectorAll("label");

let tareas = [];
let numCheckbox = 1;
let i = 0;

SUBMIT.addEventListener("click", addTarea, false);

function addTarea(e) {
  let textoCheckbox = document.createTextNode(INPUT.value);

  const nuevaTarea = { texto: textoCheckbox, realizada: false };

  tareas.push(nuevaTarea);

  e.preventDefault();

  showTarea();
}

function showTarea() {
  // Creamos los elementos y los nodos
  let checkbox = document.createElement("input");
  let label = document.createElement("label");
  let br = document.createElement("br");

  // Creamos los atributos del input para que sea algo tipo: <input type="checkbox" id="1">
  checkbox.type = "checkbox";
  checkbox.id = numCheckbox.toString();

  // Creamos los atributos del label y le añadimos todo lo necesario
  label.for = numCheckbox.toString();

  label.appendChild(checkbox);
  label.appendChild(tareas[i].texto);
  label.appendChild(br);

  // Le ponemos el addEventListener() al label
  label.addEventListener(
    "click", () => {
      label.classList.toggle("incorrecto");
    },
    false
  );

  // Ponemos el label dentro del div
  TEXTO.appendChild(label);

  numCheckbox++;
  i++;
}

  

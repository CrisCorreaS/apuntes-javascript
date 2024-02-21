const INPUT = document.getElementById("tarea");
const SUBMIT = document.getElementById("submit");
const TEXTO = document.getElementById("texto");

let tareas = [];
let numCheckbox = 1;
let i = 0;

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
      checkbox.checked
        ? checkbox.removeAttribute("checked", true)
        : checkbox.setAttribute("checked", true);
    },
    false
  );

  // Ponemos el label dentro del div
  TEXTO.appendChild(li);

  numCheckbox++;
  i++;
}

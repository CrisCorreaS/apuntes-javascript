const BOTONES = document.querySelectorAll("button");
const DIV_FORM = document.getElementById("divForm");

let i = 0;

let creacionInputText = () => {
  let inputText = document.createElement("input");
  let nameInput = prompt("Escribe el name del input de tipo texto");

  inputText.type = "text";
  inputText.name = nameInput;
  inputText.id = nameInput;

  DIV_FORM.appendChild(inputText);

  confirm(
    "Se ha creado un input de tipo texto con un atributo name='" +
      nameInput +
      "'"
  );
};

let creacionInputPassword = () => {
  let inputPassword = document.createElement("input");
  let nameInput = prompt("Escribe el name del input de tipo password");

  inputPassword.type = "password";
  inputPassword.name = nameInput;
  inputPassword.id = nameInput;

  DIV_FORM.appendChild(inputPassword);

  confirm(
    "Se ha creado un input de tipo password con un atributo name='" +
      nameInput +
      "'"
  );
};

let creacionTextarea = () => {
  let textArea = document.createElement("textarea");
  let nameTextArea = prompt("Escribe el name del textarea");

  textArea.id = nameTextArea;
  textArea.name = nameTextArea;
  textArea.cols = "40";
  textArea.rows = "5";

  DIV_FORM.appendChild(textArea);

  confirm(
    "Se ha creado un textarea con un atributo name='" + nameTextArea + "'"
  );
};

let creacionLabel = () => {
  let label = document.createElement("label");
  let forLabel = prompt("Escribe el input al que va referido el label");
  let labelText = document.createTextNode(forLabel.toLocaleUpperCase());

  label.for = forLabel;
  label.appendChild(labelText);

  DIV_FORM.appendChild(label);

  confirm("Se ha creado un label con un atributo for='" + forLabel + "'");
};

let creacionImagen = () => {
  let img = document.createElement("img");
  let srcImg = prompt("Escribe la ruta de la imagen");

  img.src = srcImg;

  DIV_FORM.appendChild(img);

  confirm("Se ha creado una imagen con un atributo src='" + srcImg + "'");
};

let creacionInputCheckBox = () => {
  let inputCheckbox = document.createElement("input");
  let nameCheckBox = prompt("Escribe el name del input de tipo checkbox");
  let valueCheckBox = prompt("Escribe el value del input de tipo checkbox");

  inputCheckbox.type = "checkbox";
  inputCheckbox.id = nameCheckBox;
  inputCheckbox.name = nameCheckBox;
  inputCheckbox.value = valueCheckBox;

  DIV_FORM.appendChild(inputCheckbox);

  confirm(
    "Se ha creado un input de tipo checkbox con unos atributos name='" +
      nameCheckBox +
      "' y value='" +
      valueCheckBox +
      "'"
  );
};

let creacionInputRadio = () => {
  let inputRadio = document.createElement("input");
  let nameRadio = prompt("Escribe el name del input de tipo radio");
  let valueRadio = prompt("Escribe el value del input de tipo radio");

  inputRadio.type = "radio";
  inputRadio.id = nameRadio;
  inputRadio.name = nameRadio;
  inputRadio.value = valueRadio;

  DIV_FORM.appendChild(inputRadio);

  confirm(
    "Se ha creado un input de tipo radio con unos atributos name='" +
      nameRadio +
      "' y value='" +
      valueRadio +
      "'"
  );
};

let creacionInputSubmit = () => {
  let inputSubmit = document.createElement("input");
  let nameSubmit = prompt("Escribe el name del input de tipo submit");
  let valueSubmit = prompt("Escribe el value del input de tipo submit");

  inputSubmit.type = "submit";
  inputSubmit.id = nameSubmit;
  inputSubmit.name = nameSubmit;
  inputSubmit.value = valueSubmit;

  DIV_FORM.appendChild(inputSubmit);

  confirm(
    "Se ha creado un input de tipo submit con unos atributos name='" +
      nameSubmit +
      "' y value='" +
      valueSubmit +
      "'"
  );
};

let funciones = [
  creacionInputText,
  creacionInputPassword,
  creacionTextarea,
  creacionLabel,
  creacionImagen,
  creacionInputCheckBox,
  creacionInputRadio,
  creacionInputSubmit,
];

BOTONES.forEach((boton) => {
  boton.addEventListener("click", funciones[i]);

  i++;
});

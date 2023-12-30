/*
El formulario del ejercicio 5.5:
  <form id="formDisco">
    <label for="name" id="nombre">Nombre del disco</label>
    <input type="text" id="name" placeholder="Nombre del disco" maxlength="20" pattern="^[\s\S]{1,20}$" required />
    <br />
    <label for="group" id="grupo">Grupo o cantante</label>
    <input type="text" id="group" placeholder="Grupo o cantante" maxlength="20" pattern="^[\s\S]{1,20}$" required />
    <br />
    <label for="ano" id="year">Año de publicación</label>
    <input type="number" id="ano" placeholder="Año de publicación" maxlength="4" min="0" max="2023" />
    <br />
    <label for="type" id="tipo">Tipo de música</label>
    <select id="type" placeholder="Tipo de música">
      <option value="rock">Rock</option>
      <option value="pop">Pop</option>
      <option value="punk">Punk</option>
      <option value="indie">Indie</option>
    </select>
    <br />
    <label for="localization" id="localizacion">Localización</label>
    <input type="number" id="localization" placeholder="Localización" pattern="^(|[\d]+)$" />
    <br />
    <label for="lent" id="prestado">Prestado</label>
    <input type="checkbox" id="lent" placeholder="Prestado" />
    <br /><br />
    <button type="submit" id="enviar">Añadir Disco</button>
  </form>
*/

import Disco from "./disco.js";

const DIV_FORM = document.getElementById("divForm");

let discos = [];
let formulario = document.createElement("form");

formulario.id = "formDisco";

function crearFormulario(e) {
  let labels = ["nombre", "grupo", "year", "tipo", "localizacion", "prestado"];
  let textoLabels = [
    "Nombre del disco ",
    "Grupo o cantante ",
    "Año de publicación ",
    "Tipo de música ",
    "Localización ",
    "Prestado ",
  ];
  let inputs = ["name", "group", "ano", "localization", "lent"];
  let tipoInputs = ["text", "text", "number", "number", "checkbox"];
  let maxLengthInputs = ["20", "20", "4"];
  let patternInputs = ["^[\s\S]{1,20}$", "^[\s\S]{1,20}$", "^(|[\d]+)$"];
  let optionValues = ["Rock", "Pop", "Punk", "Indie"];
  let contador1 = 0;
  let contador2 = 0;
  let contador3 = 0;

  labels.forEach((label) => {
    let labelForm = document.createElement("label");
    let textLabel = document.createTextNode(textoLabels[contador1]);

    labelForm.id = label;
    labelForm.for = inputs[contador1];
    labelForm.appendChild(textLabel);
    formulario.appendChild(labelForm);

    if (contador1 != 3) {
      let inputForm = document.createElement("input");

      inputForm.id = inputs[contador2];
      inputForm.type = tipoInputs[contador2];
      inputForm.placeholder = textoLabels[contador1];

      if (contador1 <= 2) {
        inputForm.maxLength = maxLengthInputs[contador3];

        if (contador1 < 2) {
          inputForm.required = "true";
        } else {
          inputForm.min = "0";
          inputForm.max = "2023";
        }
      }

      if (contador2 < 2 || contador2 == 3) {
        inputForm.pattern = patternInputs[contador3];
        contador3++;
      }

      formulario.appendChild(inputForm);

      contador2++;
    } else {
      let selectForm = document.createElement("select");

      selectForm.id = "type";
      selectForm.placeholder = textoLabels[contador1];

      optionValues.forEach((opcion) => {
        let opcionFormulario = document.createElement("option");
        let textoOpcion = document.createTextNode(opcion);

        opcionFormulario.value = opcion.toLowerCase();
        opcionFormulario.appendChild(textoOpcion);
        selectForm.appendChild(opcionFormulario);
      });

      formulario.appendChild(selectForm);
    }

    let br1 = document.createElement("br");
    formulario.appendChild(br1);

    if (contador1 == 5) {
      let br2 = document.createElement("br");
      formulario.appendChild(br2);
    }

    contador1++;
  });

  let buttonForm = document.createElement("button");
  let buttonText = document.createTextNode("Añadir Disco");

  buttonForm.id = "enviar";
  buttonForm.type = "submit";
  buttonForm.appendChild(buttonText);
  formulario.appendChild(buttonForm);

  DIV_FORM.appendChild(formulario);

  document.getElementById("enviar").addEventListener("click", mostrarDiscos, false);
}

crearFormulario();


function crearDisco(event) {
  event.preventDefault();

  let nombre = document.getElementById("name").value;
  let grupo = document.getElementById("group").value;
  let year = document.getElementById("ano").value;
  let tipo = document.getElementById("type").value;
  let localizacion = document.getElementById("localization").value;
  let prestado = document.getElementById("lent").checked;

  let disco = new Disco(nombre, grupo, year, tipo, localizacion, prestado);
  discos.push(disco);
}

function mostrarDiscos(e) {
  crearDisco(e);

  let cantidadDiscos = discos.length;
  let discoNuevo = discos[cantidadDiscos - 1];

  let tabla = `<table border="1"><tr><th>Posicion</th><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th><th>Prestado</th></tr>`;
  let discosOrdenados = discos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  let i = 0;

  discosOrdenados.forEach((disco) => {
    i++;
    let claseDisco = disco == discoNuevo ? "discoNuevo" : "discoViejo";

    tabla +=
      `<tr class='${claseDisco}'><td>` +
      i +
      `</td><td>${disco.nombre}</td><td>${disco.grupo}</td><td>${disco.year}</td><td>${disco.tipo}</td><td>${disco.localizacion}</td><td>${disco.prestado}</td></tr>`;
  });

  tabla += `</table>`;

  document.getElementById("discos").innerHTML = tabla;
}
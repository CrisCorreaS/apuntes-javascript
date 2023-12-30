const FORMULARIOS = document.querySelectorAll("form");

function focoUltimoInputText() {
  let inputsUltimoForm = FORMULARIOS[FORMULARIOS.length - 1].querySelectorAll("input[type='text']");
  inputsUltimoForm[inputsUltimoForm.length - 1].focus();
}

focoUltimoInputText();

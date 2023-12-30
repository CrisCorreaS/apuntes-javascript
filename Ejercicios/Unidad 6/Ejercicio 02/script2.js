const INPUTS_TEXTO = document.querySelectorAll("input[type='text']");

function focoUltimoInputTexto() {
  let numeroInputs = INPUTS_TEXTO.length;
  let ultimoInput = INPUTS_TEXTO[numeroInputs - 1];

  ultimoInput.focus();
}

focoUltimoInputTexto();

//Cristina Correa

function handleError() {
  var answer = confirm("Quieres mostrar la página de error?");
  if (!answer) {
    location.replace("error.html");
  }
}

handleError();
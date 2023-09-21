function listarHoras() {
  document.write("<ul>");
  for (let hora = 9; hora <= 21; hora++) {
    let mensajeEnPunto = hora + ":00";
    let mensajeYMedia = hora + ":30";

    document.write("<li>" + mensajeEnPunto + "</li>");
    document.write("<li>" + mensajeYMedia + "</li>");
  }
  document.write("</ul>");
}

listarHoras();

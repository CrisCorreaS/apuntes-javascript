function listarHoras() {
  document.write("<ul>");
  for (let hora = 9; hora <= 21; hora++) {
    if (hora != 21) {
      for (let minutos = 0; minutos < 6; minutos++) {
        document.write("<li>" + hora + ":" + minutos + 0 + "</li>");

        document.write("<li>" + hora + ":" + minutos + 5 + "</li>");
      }
    } else {
      document.write("<li>" + hora + ":00" + "</li>");
    }
  }
  document.write("</ul>");
}
listarHoras();

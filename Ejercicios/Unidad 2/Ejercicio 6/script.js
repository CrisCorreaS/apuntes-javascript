function listarHoras() {
  document.write("<ul>");
  for (let hora = 9; hora <= 21; hora++) {
    for (let minutos = 0; minutos <= 60; minutos += 5) {
      if (minutos != 60) {
        if (hora != 21) {
          if (minutos == 0 || minutos == 5) {
            document.write("<li>" + hora + ":" + 0 + minutos + "</li>");
          } else {
            document.write("<li>" + hora + ":" + minutos + "</li>");
          }
        } else if (minutos <=30){
          if (minutos == 0 || minutos == 5) {
            document.write("<li>" + hora + ":" + 0 + minutos + "</li>");
          } else {
            document.write("<li>" + hora + ":" + minutos + "</li>");
          }
        }
      }
    }
  }
  document.write("</ul>");
}
listarHoras();

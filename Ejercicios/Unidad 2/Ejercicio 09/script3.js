let respuesta = propt("Escribe tu edad");

switch(true){
    case((respuesta >= 0) && (respuesta <= 12)): alert("Niño"); break;
    case((respuesta >= 13) && (respuesta <= 26)): alert("Joven"); break;
    case((respuesta >= 27) && (respuesta <= 60)): alert("Adulto"); break;
    case((respuesta > 60)): alert("Jubilado"); break;
    default: alert("Es un número menor de 0 y no es válido"); break;
}
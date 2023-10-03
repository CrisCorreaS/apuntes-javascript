//Cristina Correa Segade

let diaCumpleaños = prompt("Escribe el día de tu cumpleaños");
let mesCumpleaños = prompt("Escribe el mes de tu cumpleaños");

let texto = "Los años en los que tu cumpleaños cae en domingo son: ";
let year = new Date().getFullYear();

for(year; year<=2100; year++){
    let fecha = new Date(year,mesCumpleaños-1,diaCumpleaños);
    if(fecha.getDay() == 0){
        texto += fecha.getFullYear()+", ";
    }
}

alert(texto);
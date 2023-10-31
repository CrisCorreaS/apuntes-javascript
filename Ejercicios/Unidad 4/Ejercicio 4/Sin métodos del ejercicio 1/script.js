import Disco from "./disco.js"

let discos = [];

document.getElementById('formDisco').addEventListener('submit', function(event){
    event.preventDefault();
    
    let nombre = document.getElementById('name').value;
    let grupo = document.getElementById('group').value;
    let year = document.getElementById('ano').value;
    let tipo = document.getElementById('type').value;
    let localizacion = document.getElementById('localization').value;
    let caratula = document.getElementById('cover').value;

    let disco = new Disco(nombre, grupo, year, tipo, localizacion, false, caratula);
    discos.push(disco);
});

document.getElementById('mostrarNumero').addEventListener('click', function(){
    alert(`Número de discos: ${discos.length}`);
});

document.getElementById('mostrarTabla').addEventListener('click', function(){
    let respuesta = prompt("¿En qué orden quieres mostrar los discos? \n 1 - Por defecto \n 2 - En orden inverso \n 3- Alfabéticamente")
    let tabla = `<table border="1"><tr><th>Posicion</th><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th><th>Prestado</th><th>Carátula</th></tr>`;
    let discosOrdenados;

    switch (respuesta){
        case "1":
            discosOrdenados = discos;
            break;
        case "2":
            discosOrdenados = discos.slice().reverse();// Pongo slice() para que cree una copia del array de discos y así no se cambie el array discos al ordenarlo inversamente. También se puede hacer con toReversed()
            break;
        case "3":
            discosOrdenados = discos.sort((a, b) => a.nombre.localeCompare(b.nombre)); //Poniendo el sort con parámetros que comparan los nombres, podemos hacer que se ordenen alfabéticamente según el nombre de cada disco del array discos
            break;
        default: alert("No has introducido una opción válida"); return;
    }
    
    let i = 0;
    discosOrdenados.forEach(disco => {
        i++; 
        tabla += `<tr><td>` + i + `</td><td>${disco.nombre}</td><td>${disco.grupo}</td><td>${disco.year}</td><td>${disco.tipo}</td><td>${disco.localizacion}</td><td>${disco.prestado}</td><td>${disco.caratula}</td></tr>`;   
    });
    
    tabla += `</table>`;
    
    document.getElementById('discos').innerHTML = tabla;
});

document.getElementById('mostrarIntervalo').addEventListener('click', function(){
    let intervalo = prompt('Introduzca el intervalo en formato inicio-fin').split('-');
    let inicio = Number.parseInt(intervalo[0]);
    let fin = Number.parseInt(intervalo[1]);
    
    let discosFiltrados = discos.filter(disco => disco.year >= inicio && disco.year <= fin);
    alert(`Hay ${discosFiltrados.length} entre los años ${inicio} y ${fin}`);
});

document.getElementById('borrarDisco').addEventListener('click', function(){
    let opcion = prompt('¿Quiere borrar al principio o al final?');
    
    if(opcion.toLowerCase() == 'principio'){
        discos.shift();
    }else if(opcion.toLowerCase() == 'final'){
        discos.pop();
    }
});

document.getElementById('consultarDisco').addEventListener('click', function(){
    let opcion = prompt('¿Quieres consultar por posición o por nombre?');
    
    if(opcion.toLowerCase() == 'posicion'){
        let posicion = Number(prompt('Introduzca la posición del disco'));
        if(posicion >= 0 && posicion <= discos.length){
            alert(discos[posicion-1].mostrarInfo());
        } else {
            alert("La posición está fuera de rango");
        }
    } else if(opcion.toLowerCase() == 'nombre'){
        let nombre = prompt('Introduzca el nombre del disco');
        let disco = discos.find(disco => disco.nombre == nombre);
        if(disco){
            alert(disco.mostrarInfo());
        } else {
            alert('Disco no encontrado');
        }
    } else {
        alert('Opción no válida');
    }
});
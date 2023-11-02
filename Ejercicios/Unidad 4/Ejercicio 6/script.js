// Cristina Correa 

const convocatorias = ["Marcos,Luis,Pepe,Manuel,Lolo","Marcos,Luis,Pepe,David,Antonio,Pedro"];
let personasConvocadas = "";

let partesPrimero = convocatorias[0].split(/,/g);
let partesSegundo = convocatorias[1].split(/,/g);

for(let i = 0; i < partesPrimero.length; i++){
    for(let j = 0; j < partesSegundo.length; j++){
        if(partesPrimero[i] == partesSegundo[j]){
            personasConvocadas += partesPrimero[i] + ", ";
        }
    }
}

alert(personasConvocadas);
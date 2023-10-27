import Cliente from "/Cliente.js";

window.addEventListener("load", inicio, true);

const c1 = new Cliente("Laura", "Santander", 50);
const c2 = new Cliente("Álvaro", "Castro", 50);
const c3 = new Cliente("Igor", "Castro", 60);
const c4 = new Cliente("Ivan", "Santander", 40);
const c5 = new Cliente("Mónica", "Zamora", 30);
const c6 = new Cliente("Javi", "Bilbao", 30);
const c7 = new Cliente("David", "Bilbao", 30);

const clientes  = [c1 , c2 , c3 , c4 , c5 , c6, c7];


function inicio(){
    document.getElementById("todos").addEventListener("click", verTodos, true);
    document.getElementById("provincia").addEventListener("click", porProvincia, true);
    document.getElementById("cuota").addEventListener("click", porCuota, true);
    document.getElementById("mostrarLoc").addEventListener("click", mostrarDivLocalidad, true);
    document.getElementById("mostrarCuo").addEventListener("click", mostrarDivCuota, true);
}

function verTodos(){
    // Lo hacemos con map como Catia:
    salida.innerHTML = `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Cuota</th>
            </tr>
            ${clientes.map(c => `
                <tr>
                    <td>${c.nombre}</td>
                    <td>${c.localidad}</td>
                    <td>${c.cuota}</td>
                </tr>
            `).join('')}
        </table>
    `;
}

function porProvincia(){
    let prov = document.getElementById("localidad").value;
    let clienteProv = []

    for (let i = 0 ; i < clientes.length ; i++){

        if(clientes[i].localidad == prov){
            clienteProv.push(clientes[i]);
        }
    }

    salida.innerHTML = `
    <table>
        <tr>
            <th>Nombre</th>
            <th>Localidad</th>
            <th>Cuota</th>
        </tr>
        ${clienteProv.map(c => `
            <tr>
                <td>${c.nombre}</td>
                <td>${c.localidad}</td>
                <td>${c.cuota}</td>
            </tr>
        `).join('')}
    </table>
`;
}

function porCuota(){
    let cuota = document.getElementById("cantidad").value;
    let clienteCuota = []

    for (let i = 0 ; i < clientes.length ; i++){

        if(clientes[i].cuota > cuota){
            clienteCuota.push(clientes[i]);
        }
    }

    salida.innerHTML = `
    <table>
        <tr>
            <th>Nombre</th>
            <th>Localidad</th>
            <th>Cuota</th>
        </tr>
        ${clienteCuota.map(c => `
            <tr>
                <td>${c.nombre}</td>
                <td>${c.localidad}</td>
                <td>${c.cuota}</td>
            </tr>
        `).join('')}
    </table>
    `;
}

function mostrarDivLocalidad(){
    document.getElementById("loc").style.display="block";
    document.getElementById("cuo").style.display="none";
    document.getElementById("localidad").value = "";
}

function mostrarDivCuota(){
    document.getElementById("cuo").style.display="block";
    document.getElementById("loc").style.display="none";
    document.getElementById("cantidad").value = "";
}
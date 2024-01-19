//Cristina Correa

function mostrarNumeroElementos(paises){
    return(paises.length);
}

function mostrarElementos(paises){
    return(paises);
}

function mostrarInversos(paises){
    return(paises.reverse());
}

function mostrarOrdenados(paises){
    return(paises.sort());
}

function addPrincipio(paises, elemento){
    paises.unshift(elemento);
    return(paises);
}

function addFinal(paises, elemento){
    paises.push(elemento)
    return(paises);
}

function deletePrincipio(paises){
    paises.shift()
    return(paises);
}

function deleteFinal(paises){
    paises.pop()
    return(paises);
}

function mostrarPaisSegunPosicion(paises, posicion){
    return(paises[posicion]);
}

function mostrarPosicionSegunPais(paises, pais){
    return(paises.indexOf(pais));
}

export {mostrarNumeroElementos,mostrarElementos,mostrarInversos,mostrarOrdenados,addPrincipio,addFinal,deletePrincipio,deleteFinal,mostrarPaisSegunPosicion,mostrarPosicionSegunPais};
import { useState, useEffect } from 'react'
import TablaPilotos from './TablaPilotos';
import FiltroNacionalidad from './FiltroNacionalidad';
import OrdenarPorEquipo from './OrdenarPorEquipo';
import OrdenarPorNombre from './OrdenarPorNombre';
import Paginacion from './Paginacion';
import './App.css'

function App() {
const [pilotos, setPilotos] = useState([]);
const [pilotosOriginal, setPilotosOriginal] = useState([]);
const [paginaActual, setPaginaActual] = useState(1);
const [elementosPorPagina, setElementosPorPagina] = useState(3);  //por defecto será 3
const [pilotoDestacado, setPilotoDestacado] = useState(null); //indica que no hay ningun piloto con la clase destacado en un principio
const [pilotosPaginados, setPilotosPaginados] = useState([]);
useEffect(() => {
  cargarDatos();
}, []);
useEffect(() => {
  const startIndex = (paginaActual - 1) * elementosPorPagina;
  const endIndex = startIndex + elementosPorPagina;
  const paginados = pilotos.slice(startIndex, endIndex);
  setPilotosPaginados(paginados);
}, [paginaActual, elementosPorPagina, pilotos]);
const cargarDatos = async () => {
  //obtiene los datos del json
  try {
    const response = await fetch("pilotos.json");
    const data = await response.json();
    setPilotos(data.pilotos);
    setPilotosOriginal(data.pilotos);
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
};
const ordenarPorNombre = () => {
  const ordenados = [...pilotos].sort((a, b) => a.nombre.localeCompare(b.nombre));
  setPilotos(ordenados);
};

const ordenarPorEquipo = () => {
  const ordenados = [...pilotos].sort((a, b) => a.equipo.localeCompare(b.equipo));
  setPilotos(ordenados);
};

const filtrarPorNacionalidad = (nacionalidad) => {
  if (nacionalidad === "") {
    setPilotos([...pilotosOriginal]);
  } else {
    const filtrados = pilotosOriginal.filter(piloto => piloto.nacionalidad.toLowerCase() === nacionalidad.toLowerCase());
    setPilotos(filtrados);
  }
  setPaginaActual(1);
};

const verTodos = () => {
  setPaginaActual(1);
  setElementosPorPagina(pilotos.length);
};

const paginar = () => {
  setPaginaActual(1);
  setElementosPorPagina(3);
};
const destacarPiloto = (indice) => {
  setPilotoDestacado(indice);
};
return (
  <div className="App">
    <FiltroNacionalidad onFilter={filtrarPorNacionalidad} />
    <OrdenarPorNombre onSort={ordenarPorNombre} />
    <OrdenarPorEquipo onSort={ordenarPorEquipo} />

    <TablaPilotos pilotos={pilotosPaginados} destacado={pilotoDestacado} onDestacar={destacarPiloto} />
    <Paginacion
      pilotos={pilotos}
      paginaActual={paginaActual}
      setPaginaActual={setPaginaActual}
      elementosPorPagina={elementosPorPagina}
    />
    <button onClick={verTodos}>Ver Todos los Datos</button>
    <button onClick={paginar}>Paginar de 3 en 3</button>
  </div>
);
}

export default App;

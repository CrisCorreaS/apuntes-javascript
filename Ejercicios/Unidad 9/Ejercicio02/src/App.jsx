import { useState, useEffect } from "react";
import FiltroNacionalidad from "./components/FiltroNacionalidad";
import OrdenarPorNombre from "./components/OrdenarPorNombre";
import OrdenarPorEquipo from "./components/OrdenarPorEquipo";
import Tabla from "./components/Tabla";
import Paginacion from "./components/Paginacion";
import "./App.css";

function App() {
  // useStates
  const [pilotosOriginal, setPilotosOriginal] = useState([]);
  const [pilotos, setPilotos] = useState([]);
  const [pilotoDestacado, setPilotoDestacado] = useState(null);
  const [pilotosPaginados, setPilotosPaginados] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [elementosPorPagina, setElementosPorPagina] = useState(3); // Al final hago un useState porque cuando le doy al botón de Ver Todos los Pilotos, lo uso como referencia para el número total de pilotos

  // useEffects
  useEffect(() => {
    cargaDatos();
  }, []);

  useEffect(() => {
    const startIndex = (paginaActual - 1) * elementosPorPagina;
    const endIndex = startIndex + elementosPorPagina;
    const paginados = pilotos.slice(startIndex, endIndex);

    setPilotosPaginados(paginados);
  }, [paginaActual, elementosPorPagina, pilotos]);

  // Fetch API
  const cargaDatos = async () => {
    try {
      const response = await fetch("./src/assets/pilotos.json");
      const data = await response.json();

      setPilotos(data.pilotos);
      setPilotosOriginal(data.pilotos);
    } catch (error) {
      console.error("Ha ocurrido un error con la conexión a la API:", error);
    }
  };

  // Métodos
  const filtrarPorNacionalidad = (nacionalidad) => {
    if (nacionalidad === "") {
      setPilotos([...pilotosOriginal]);
    } else {
      const filtrados = pilotosOriginal.filter(
        (piloto) =>
          piloto.nacionalidad.toLowerCase() === nacionalidad.toLowerCase()
      );

      setPilotos(filtrados);
    }
    setPaginaActual(1); // Volver a paginar en la primera página
  };

  const ordenarSegunNombre = () => {
    const ordenados = [...pilotos].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );

    setPilotos(ordenados);
  };

  const ordenarSegunEquipo = () => {
    const ordenados = [...pilotos].sort((a, b) =>
      a.equipo.localeCompare(b.equipo)
    );

    setPilotos(ordenados);
  };

  const verTodos = () => {
    setPaginaActual(1); // Volver a paginar en la primera página
    setElementosPorPagina(pilotos.length);
  };

  const destacarPiloto = (indice) => {
    setPilotoDestacado(indice);
  };

  // Paginación -> Ahora paso todas las páginas así que no tengo los botones de prev y next ni sus respectivos métodos aquí
  const paginar = () => {
    setPaginaActual(1);
    setElementosPorPagina(3);
  };

  return (
    <main className="App">
      <FiltroNacionalidad onFilter={filtrarPorNacionalidad} />

      <OrdenarPorNombre onSort={ordenarSegunNombre} />

      <OrdenarPorEquipo onSort={ordenarSegunEquipo} />

      <Tabla
        pilotos={pilotosPaginados}
        pilotoADestacar={pilotoDestacado}
        destacar={destacarPiloto}
      />

      <Paginacion
        pilotos={pilotos}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
        elementosPorPagina={elementosPorPagina}
      />

      <button onClick={verTodos}>Ver Todos los Pilotos</button>
      <button onClick={paginar}>Paginar de 3 en 3 Pilotos</button>
    </main>
  );
}

export default App;

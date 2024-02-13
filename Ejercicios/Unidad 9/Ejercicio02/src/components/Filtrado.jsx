import React, { useState, useEffect } from 'react';
import Button from "./Button";
import Tabla from "./Tabla";
import Paginacion from "./Paginacion";

const Filtrado = () => {
  const [pilotos, setPilotos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [pilotosPorPagina] = useState(3);
  const [numeroPaginas, setNumeroPaginas] = useState(0);
  const [error, setError] = useState("");
  const [datosMsg, setDatosMsg] = useState("");

  useEffect(() => {
    obtenerDatosJSON();
  }, []);

  const obtenerDatosJSON = () => {
    fetch("../assets/pilotos.json")
      .then((response) => response.json())
      .then((data) => {
        setPilotos(data.pilotos);
        setNumeroPaginas(Math.ceil(data.pilotos.length / pilotosPorPagina));
        paginarPilotos(1);
      })
      .catch((error) => console.log("Ha habido un problema: " + error));
  };

  const mostrarTodos = () => {
    setError("");
    setDatosMsg("");
    obtenerDatosJSON();
  };

  const ordenar = (parametro) => {
    const pilotosOrdenados = [...pilotos];

    if (parametro.toLowerCase() === "nombre") {
      pilotosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (parametro.toLowerCase() === "equipo") {
      pilotosOrdenados.sort((a, b) => a.equipo.localeCompare(b.equipo));
    }

    setPilotos(pilotosOrdenados);
    paginarPilotos(paginaActual);
  };

  const ordenarSegunParametro = () => {
    const respuesta = prompt("¿Quieres ordenar según Nombre o Equipo?");

    if (
      respuesta &&
      (respuesta.toLowerCase() === "nombre" ||
        respuesta.toLowerCase() === "equipo")
    ) {
      ordenar(respuesta);
    } else {
      setError("Has elegido mal el parámetro de ordenación");
      setDatosMsg("");
    }
  };

  const filtrarPorNacionalidad = () => {
    const nacionalidad = prompt(
      "Introduce el país de procedencia de los pilotos"
    );

    if (nacionalidad) {
      const pilotosPorNacionalidad = pilotos.filter(
        (piloto) => piloto.nacionalidad === nacionalidad
      );
      if (pilotosPorNacionalidad.length === 0) {
        setError("No hay ningún piloto con esa nacionalidad");
        setDatosMsg("");
      } else {
        setDatosMsg(
          `Los pilotos con nacionalidad ${pilotosPorNacionalidad[0].nacionalidad} son:`
        );
        setPilotos(pilotosPorNacionalidad);
        paginarPilotos(1);
      }
    }
  };

  // PAGINACIÓN
  const paginarPilotos = (pagina) => {
    const inicio = (pagina - 1) * pilotosPorPagina;
    const fin = inicio + pilotosPorPagina;
    const pilotosPaginados = pilotos.slice(inicio, fin);

    setPaginaActual(pagina);
    setPilotos(pilotosPaginados);
  };

  const prevPage = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
      paginarPilotos(paginaActual - 1);
    }
  };

  const nextPage = () => {
    if (paginaActual < numeroPaginas) {
      setPaginaActual(paginaActual + 1);
      paginarPilotos(paginaActual + 1);
    }
  };

  const gestionarOpcion = () => {
    const opcion = document.getElementById("opcion").value;

    switch (opcion) {
      case "1":
        ordenarSegunParametro();
        break;
      case "2":
        filtrarPorNacionalidad();
        break;
      default:
        setError("Has escrito una opción no válida");
        setDatosMsg("");
        break;
    }
  };

  return (
    <>
      <div>
        <p>1- Ordenar por Nombre o Equipo</p>
        <p>2- Filtrar por Nacionalidad</p>
      </div>
      <input type="text" id="opcion" />
      <Button id="enviar" onClick={gestionarOpcion}>
        Enviar
      </Button>
      <br />
      <br />
      <p id="errorMsg" className="error">
        {error}
      </p>
      <h3 id="datos">{datosMsg}</h3>
      <Tabla pilotos={pilotos} />
      <br />
      <Button id="show" onClick={mostrarTodos}>
        Mostrar Todos
      </Button>
      <br />
      <Paginacion
        paginaActual={paginaActual}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default Filtrado;

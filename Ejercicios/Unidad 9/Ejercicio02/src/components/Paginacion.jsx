import Button from "./Button";

const Paginacion = ({ paginaActual = "1", prevPage, nextPage }) => {
  return (
    <>
      <h3>Paginación de Pilotos:</h3>
      <div id="paginacion" className="pilotosPaginados"></div>
      <Button id="btn_prev" onClick={prevPage}>
        Anterior
      </Button>
      &nbsp;
      <Button id="btn_next" onClick={nextPage}>
        Siguiente
      </Button>
      <br />
      Página: <span id="page">{paginaActual}</span>
    </>
  );
};

export default Paginacion;

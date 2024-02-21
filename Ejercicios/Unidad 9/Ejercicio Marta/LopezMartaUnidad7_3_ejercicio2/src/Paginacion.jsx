
function Paginacion({ pilotos, paginaActual, setPaginaActual, elementosPorPagina }) {
  const startIndex = (paginaActual - 1) * elementosPorPagina;
  const endIndex = startIndex + elementosPorPagina;
  const pilotosPaginados = pilotos.slice(startIndex, endIndex);

  const totalPaginas = Math.ceil(pilotos.length / elementosPorPagina);

  return (
    <div id="paginacion">
      {Array.from({ length: totalPaginas }, (_, i) => i +  1).map(page => (
        <button key={page} onClick={() => setPaginaActual(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}
  
  export default Paginacion;
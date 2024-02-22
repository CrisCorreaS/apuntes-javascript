const BotonPaginacion = ({ numeroPagina, paginaActual, setPaginaActual }) => {
  const handleClick = () => {
    setPaginaActual(numeroPagina);
  };

  return (
    <button
      className={numeroPagina === paginaActual ? 'active' : ''}
      onClick={handleClick}
    >
      {numeroPagina}
    </button>
  );
};

export default BotonPaginacion;

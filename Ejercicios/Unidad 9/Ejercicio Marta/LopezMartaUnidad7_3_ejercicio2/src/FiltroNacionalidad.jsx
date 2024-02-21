function FiltroNacionalidad({ onFilter }) {
  return (
    <input
      type="text"
      placeholder="Filtrar por nacionalidad"
      onChange={(e) => onFilter(e.target.value)}
    />
  );
}

export default FiltroNacionalidad;
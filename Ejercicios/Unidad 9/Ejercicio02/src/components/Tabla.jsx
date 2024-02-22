const Tabla = ({ pilotos, pilotoADestacar, destacar }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Equipo</th>
          <th>Número</th>
          <th>Nacionalidad</th>
        </tr>
      </thead>
      <tbody>
        {pilotos.map((piloto, index) => (
          <tr
            key={index}
            className={index === pilotoADestacar ? "pilotoDestacado" : ""}
            onClick={() => destacar(index)}
          >
            <td>{piloto.nombre}</td>
            <td>{piloto.equipo}</td>
            <td>{piloto.numero}</td>
            <td>{piloto.nacionalidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;

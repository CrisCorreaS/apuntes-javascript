const Tabla = ({ pilotos }) => {
  return (
    <table border="1" id="tablaPilotos">
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
          <tr key={index}>
            <td>{piloto.nombre}</td>
            <td>{piloto.equipo}</td>
            <td>{piloto.numero}</td>
            <td>{piloto.nacionalidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;

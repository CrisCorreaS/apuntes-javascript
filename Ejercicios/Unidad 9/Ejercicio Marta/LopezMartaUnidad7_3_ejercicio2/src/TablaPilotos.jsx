function TablaPilotos({ pilotos, destacado, onDestacar })  {
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
          <tr key={index} className={index === destacado ? 'destacado' : ''} onClick={() => onDestacar(index)}>
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
  
  export default TablaPilotos;   
 

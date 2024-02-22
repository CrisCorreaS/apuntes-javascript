const Componente = ({ objeto }) => {
  let personas;

  if (!(objeto == undefined)) {
    personas = [...objeto.results];
  }

  return (
    <>
      {personas &&
        personas.map((persona, index) => {
          return (
            <div key={index}>
              <p>{persona.name.first}</p>
              <p>{persona.location.country}</p>
              <p>{persona.email}</p>
              <p>{persona.picture.medium}</p>
            </div>
          );
        })}
    </>
  );
};

export default Componente;

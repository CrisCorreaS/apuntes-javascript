import { useState } from "react";

export function Formulario({onSubmit}) {
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Hacemos una función que gestione cuando hacemos click en "Add" para que cree nuevos items y mantenga los anteriores
  function handleSubmit(e) {
    e.preventDefault();

    if (nuevaTarea === "") return;

    onSubmit(nuevaTarea); // Estamos llamado a la función que está en App.jsx

    setNuevaTarea(""); // Con esto, consigo que cada vez que cree una tarea, se vacíe lo que hay dentro del input
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Nueva Tarea</label> {/* "hrmlFor" es lo mismo en jsx que "for" en html */}
        <input
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          type="text"
          name="item"
          id="item"
          placeholder="Escribe una nueva tarea"
        />
      </div>
      <button className="btn">Añadir</button>
    </form>
  );
}

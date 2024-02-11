export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      {/* Si devuelves un elemento de un array de elementos, tienes que ponerle un "key" único para poder diferenciarlos. Es mala práctica poner el index del array, por eso usamos -> crypto.randomUUID(). Si usamos esto como un componente solo, no hace falta poner la key */}
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)} // Cuidado con las funciones, hay que pasarlas con arrow functions
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger"> {/* // Cuidado con las funciones, hay que pasarlas con arrow functions */}
        Eliminar
      </button>
    </li>
  )
}
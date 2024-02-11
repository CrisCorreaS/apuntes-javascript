import { useEffect, useState } from "react";
import "./styles.css";
import { Formulario } from "./components/Formulario";
import { TodoList } from "./components/TodoList";

export default function App() {
  // Obtener los datos de tarea.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./assets/tareas.json");
        const data = await response.json();

        // Ponemos las tareas del JSON como las primeras tareas del to-do list
        const obtenerTareasJSON = data.map((tarea) => ({
          id: crypto.randomUUID(), // Genera un id único por cada tarea
          title: tarea.texto,
          completed: tarea.realizada,
        }));

        setTodos(obtenerTareasJSON);
      } catch (error) {
        console.error("Error obteniendo los datos de tareas.json: ", error);
      }
    };

    fetchData();
  }, []);

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  }); // Para obtener los datos guardados en el localStorage si es que están guardados ahí

  // Para que al refrescar no haya ningún problema y no se borren las tareas ya que se guardan con localStorage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]); // Se va a repetir la función todas las veces que se cambie el array

  // Hacemos una función para que se pueda utilizar el estado de "todo" en el componente de Formulario que se la pasamos como un prop
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
        // The randomUUID() method of the Crypto interface is used to generate a v4 UUID using a cryptographically secure random number generator.
      ];
    });
  }

  // Hacemos una función para controlar el check de los items de la todo list
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }; // Devolvemos el array pero con el todo cambiado
        }

        return todo; // Devolvemos el array sin ningún cambio
      });
    });
  }

  // Hacemos una función para borrar un todo
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id); // Devolvemos la lista sin el todo con el id que le pasamos
    });
  }

  return (
    <>
      <Formulario onSubmit={addTodo} />{" "}
      {/* Le pasamos la función como un prop */}
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

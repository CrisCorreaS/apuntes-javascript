import { useEffect, useState } from "react";
import "./App.css";
import Componente from "./components/Componente";

function App() {
  const [objeto, setObjeto] = useState(""); // Esto al ser una operación asíncrona, no se me ejecuta bien

  console.log(objeto);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./personas.json");
        const data = await response.json();

        setObjeto(data);
      } catch (error) {
        console.error("Error obteniendo los datos de tareas.json: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!(objeto == undefined) && !(objeto == "") && (
        <Componente personas={objeto}></Componente>
      )}
    </>
  );
}

export default App;

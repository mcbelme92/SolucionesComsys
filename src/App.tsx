//Components
import Home from "./components/Home/Home";
//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Da publicaciones estrucutradas por usuario";
    document.head.appendChild(metaDescription);

    // Limpieza al desmontar el componente
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div>
      <Home title="Soluciones Comsys" />
    </div>
  );
}

export default App;

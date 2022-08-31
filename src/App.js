import React, { useState } from "react";
import Colaboradores from "./Components/Colaboradores/Colaboradores";
import Header from "./Components/Header/Header";
import './Stylesheets/header.css';

function App() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="App">
      <Header setBusqueda={setBusqueda} />
      <Colaboradores  busqueda={busqueda} />
    </div>
  );
}

export default App;

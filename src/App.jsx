import { useState } from "react";
import React from "react";
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import ListadoPaciente from "./components/ListadoPaciente.jsx";
function App() {
    const [pacientes,setPacientes]= useState([]);

  return (
    <div className='container mx-auto mt-5'>
    <Header/>
    <div className='mt-20 md:flex '>
    <Formulario 
    pacientes={pacientes}
    setPacientes={setPacientes}
    />
    <ListadoPaciente/>
    </div>

    </div>
  )
}

export default App

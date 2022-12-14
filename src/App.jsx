import { useState,useEffect} from "react";
import React from "react";
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import ListadoPaciente from "./components/ListadoPaciente.jsx";
function App() {
    const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    const [pacientes,setPacientes]= useState(INITIAL);
    const [paciente,setPaciente]= useState({});
    
    const eliminarPaciente=(id)=>{
      const pacientesActualizados= pacientes.filter(paciente=> paciente.id !== id);
      // console.log(pacientesActualizados)
      setPacientes(pacientesActualizados)
    }
    
    useEffect(()=>{
      localStorage.setItem('pacientes',JSON.stringify(pacientes))
    },[pacientes])

  return (
    <div className='container mx-auto mt-5'>
      <Header/>
    <div className='mt-20 md:flex '>
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPaciente
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
    </div>

    </div>
  )
}

export default App

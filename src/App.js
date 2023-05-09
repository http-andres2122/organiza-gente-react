import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Formulario from './components/Formulario/Formulario.jsx';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //lista equipos
  const equipos = [
    {
      titulo:"Programación",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278"
    },
    {
      titulo:"Front End",
      colorPrimario: "#E8F8FF",
      colorSecundario: "#82CFFA"
    },
    {
      titulo:"Data Science",
      colorPrimario: "#F0F8E2",
      colorSecundario: "#A6D157"
    },
    {
      titulo:"Devops",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#E06B69"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario: "#FAE9F5",
      colorSecundario: "#DB6EBF"
    },
    {
      titulo:"Móvil",
      colorPrimario: "#FFF5D9",
      colorSecundario: "#FFBA05"
    },
    {
      titulo:"Innovación y  Gestión",
      colorPrimario: "#FFEEDF",
      colorSecundario: "#FF8A29"
    },
]

  
  return (
    <div>

      <Header/>

      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)}/> : <div/> }
      
      {/* {mostrarFormulario && <Formulario/>} ambos cumplen la misma funcion */}
      

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => {
          console.log ("equipo", equipo)
          return <Equipo datos={equipo} key={equipo.titulo} />
        })
      }


    </div>
  );
}

export default App;

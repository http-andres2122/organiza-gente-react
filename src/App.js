import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header.jsx';
import Formulario from './components/Formulario/Formulario.jsx';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState ([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#E8F8FF",
      colorSecundario: "#82CFFA"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#F0F8E2",
      colorSecundario: "#A6D157"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#E06B69"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#FAE9F5",
      colorSecundario: "#DB6EBF"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFF5D9",
      colorSecundario: "#FFBA05"
    },
    {
      id: uuid(),
      titulo:"Innovación y  Gestión",
      colorPrimario: "#FFEEDF",
      colorSecundario: "#FF8A29"
    },
  ])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador 
  const registrarColaborador = (colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador: ", id)
    const nuevosEliminados = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosEliminados)
    console.log(nuevosEliminados)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar color: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorSecundario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }
  
  return (
    <div>

      <Header/>

      {
      
      mostrarFormulario === true ? <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      /> : <div/> 
      
      }
      
      {/* {mostrarFormulario && <Formulario/>} ambos cumplen la misma funcion */}
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => {
          // console.log ("equipo", equipo)
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          eliminar={eliminarColaborador}
          actualizarColor={actualizarColor}
          />
        })
      }

      <Footer/>

    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Formulario from './components/Formulario/Formulario.jsx';
import MiOrg from './components/MiOrg';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  
  return (
    <div>

      <Header/>

      {mostrarFormulario === true ? <Formulario/> : <div/> }
      
      {/* {mostrarFormulario && <Formulario/>} ambos cumplen la misma funcion */}
      

      <MiOrg cambiarMostrar={cambiarMostrar} />

    </div>
  );
}

export default App;

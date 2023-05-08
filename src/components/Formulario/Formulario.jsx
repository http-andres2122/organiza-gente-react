import { useState } from "react"
import "./Formulario.css"
import TextInput from "../TextInputs/TextInput.jsx"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const [nombre, actualizarNombre] = useState("")
    // console.log(nombre);
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")


//---------------/=============/==========//
    const manejarEnvio = (evento) => {
        evento.preventDefault()
        // console.log("manejar Envio", evento)

        let datosAEnviar = {
            nombre,
            puesto,
            foto
        }

        console.log("envia estos datos", datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crar un creador.</h2>
            <TextInput 
                titulo="Nombre" 
                placeHolder="Ingrese Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />

            <TextInput 
                titulo="Puesto" 
                placeHolder="Ingrese Puesto" 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto} 
            />

            <TextInput 
                titulo="Foto" 
                placeHolder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
                valor={equipo}
                actualizarValor={actualizarEquipo}
            />
            <Boton>
            Crear Colaborador
            </Boton>

        </form>

    </section>
}

export default Formulario
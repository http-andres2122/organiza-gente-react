import { useState } from "react"
import "./Formulario.css"
import TextInput from "../TextInputs/TextInput.jsx"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    // console.log(nombre);
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState ("")
    const [color, actualizarColor] = useState ("")

    const { registrarColaborador, crearEquipo } = props


//---------------/=============/==========//
    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("manejar Envio",)

        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorSecundario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear un creador.</h2>
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
                equipos={props.equipos}
            />
            <Boton>
            Crear Colaborador
            </Boton>

        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <TextInput 
                titulo="Titulo" 
                placeHolder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />

            <TextInput 
                titulo="Color" 
                placeHolder="Ingrese color en hexadecimal" 
                required 
                valor={color} 
                actualizarValor={actualizarColor} 
            />
            <Boton>Registrar equipo</Boton>
        </form>

    </section>
}

export default Formulario
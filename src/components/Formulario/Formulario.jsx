import { useState } from "react"
import "./Formulario.css"
import Inputs from "../Inputs/Inputs.jsx"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
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
            <Inputs
                titulo="Nombre" 
                placeHolder="Ingrese Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />

            <Inputs
                titulo="Puesto" 
                placeHolder="Ingrese Puesto" 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto} 
            />

            <Inputs
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
            <Inputs
                titulo="Titulo" 
                placeHolder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />

            <Inputs
                titulo="Color" 
                placeHolder="Ingrese color en hexadecimal" 
                required 
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar equipo</Boton>
        </form>

    </section>
}

export default Formulario
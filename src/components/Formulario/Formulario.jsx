import "./Formulario.css"
import TextInput from "../TextInputs/TextInput.jsx"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("manejar Envio", evento)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crar un creador.</h2>
            <TextInput titulo="Nombre" placeHolder="Ingrese Nombre" required />
            <TextInput titulo="Puesto" placeHolder="Ingrese Puesto" required />
            <TextInput titulo="Foto" placeHolder="Ingresar enlace de foto" required />
            <ListaOpciones />
            <Boton>
            Crear Colaborador
            </Boton>

        </form>

    </section>
}

export default Formulario
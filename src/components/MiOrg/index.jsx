import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado / Hooks
    //useState
    //useState ()
    //const [Nombre variable, funcionActualiza] = useState(valorInicial)
    //const [nombre,  actualizarNombre] = useState ("Harland")

    // console.log(props)

    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/boton-add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>

}

export default MiOrg
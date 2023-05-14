// import { useState } from "react"
import "./Inputs.css"

const Inputs = (props) => {

    // const [valor, actualizarValor] = useState(" ")
    // console.log("Datos", props)
    

    const { type = "text" } = props

    console.log(type)

    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    const placeholdermod = `${props.placeHolder}...`


    return <div className={ `Input Input-${type}` }>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholdermod} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />

    </div>
}

export default Inputs
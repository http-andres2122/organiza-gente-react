// import { useState } from "react"
import "./TextInput.css"

const TextInput = (props) => {

    // const [valor, actualizarValor] = useState(" ")
    // console.log("Datos", props)
    
    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    const placeholdermod = `${props.placeHolder}...`


    return <div className="TextInput">
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholdermod} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        />

    </div>
}

export default TextInput
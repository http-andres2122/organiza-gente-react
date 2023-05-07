import "./TextInput.css"

const TextInput = (props) => {
    console.log("Datos", props)

    const placeholdermod = `${props.placeHolder}...`
    return <div className="TextInput">
        <label>{props.titulo}</label>
        <input placeholder={placeholdermod} required={props.required}/>

    </div>
}

export default TextInput
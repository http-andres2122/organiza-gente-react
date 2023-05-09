import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //metodo map -> arreglo.map( (equipo, index) => {
    //  return <option></option>
    // })
    

    const manejarCamnio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return  <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCamnio}>
            <option value="" disabled defaultValue="" hidden >Selecione un equipo</option>
            { props.equipos.map( (equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            } ) }
        </select>
    </div>
}

export default ListaOpciones
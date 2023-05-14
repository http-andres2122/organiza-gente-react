import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminar, actualizarColor, like } = props

    // console.log(colaboradores.length > 0)

    const esTitulo = { borderBottomColor: colorSecundario }
    const esEquipo = {
        backgroundColor: hexToRgba (colorSecundario, 0.6)
    }


    return <> 
        { colaboradores.length > 0 &&
            <section className="equipo" style={esEquipo}>
                <input 
                className="input-color"
                type="color" 
                value={colorSecundario}
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id)
                }}
                />
            <h3 style={esTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorSecundario={colorSecundario}
                        eliminarColaborador={eliminar}
                        like={like}
                    />)
                }
            </div>
        </section>
        }
    </>
}

export  default Equipo
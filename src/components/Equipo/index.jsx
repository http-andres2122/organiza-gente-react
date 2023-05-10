import "./Equipo.css"
import Colaborador from "../Colaborador"
const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const { colaboradores } = props

    console.log(colaboradores.length > 0)

    const esTitulo = { borderBottomColor: colorSecundario }
    const esEquipo = {
        backgroundColor: colorPrimario
    }


    return <> 
        { colaboradores.length > 0 &&
            <section className="equipo" style={esEquipo}>
            <h3 style={esTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorSecundario={colorSecundario}
                    />)
                }
            </div>
        </section>
        }
    </>
}

export  default Equipo
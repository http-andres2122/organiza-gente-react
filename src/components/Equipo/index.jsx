import "./Equipo.css"
import Colaborador from "../Colaborador"
const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo} = props.datos

    const esTitulo = { borderBottomColor: colorSecundario }
    const esEquipo = {
        backgroundColor: colorPrimario
    }


    return <section className="equipo" style={esEquipo}>
        <h3 style={esTitulo}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
        </div>
    </section>
}

export  default Equipo
import "./colaborador.css"

const Colaborador = (props) => {

    //Destructuracion de props
    const {nombre, puesto, foto} = props;
    const {colorPrimario} = props;
return(
    <div className="colaborador">
        <div className="encabezado" style = {{ backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{ nombre }</h4>
            <h5>{ puesto }</h5>
        </div>
    </div>

)
}

export default Colaborador;
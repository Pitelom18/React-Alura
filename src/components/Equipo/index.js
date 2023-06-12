import "./equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
  //Destructuracion
  const { colorPrimario, colorSecundario, titulo, id } = props.datos
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props
  const obj = {
      backgroundColor: hexToRgba(colorPrimario, 0.6),
      //colorSecundario
  }


  const estiloTitulo = { borderColor: colorPrimario }

  return <>
      {
          colaboradores.length > 0 &&
          <section className="equipo" style={obj}>
            <input type="color"
                      className="input-color"
                      value={colorPrimario}
                      onChange={(e) => actualizarColor(e.target.value, id)}
                      id="btn-mostrar" />
              <h3 style={estiloTitulo} >{titulo}</h3>
              <div className="colaboradores">
                  {
                      colaboradores.map((colaborador, index) => <Colaborador
                          datos={colaborador}
                          key={index}
                          colorPrimario={colorPrimario}
                          eliminarColaborador={eliminarColaborador}
                          like = {like}
                      />)
                  }
              </div>
          </section>
      }
  </>
}

export default Equipo
import "../Estilos-components/ingresar.css"
import { Link } from "react-router-dom"

function Ingresar() {
    return(
        <>

        <div className="ingresar-box">
        <div className="ingresar-title-box">
        <h4>¿Estás listo para descubrir algo nuevo?</h4>
        </div>
        <div className="Ingresar-parrafo-box">
      <p>Explora un mundo lleno de posibilidades. Conéctate, aprende y crece con nosotros. ¡El primer paso es tuyo!</p>  
        </div>
         <div className="ingresar-button-box">
          <Link to="/ingreso/login">  <button>Descubrir más</button></Link>
         </div>
        </div>
        </>
    )
}
export default Ingresar
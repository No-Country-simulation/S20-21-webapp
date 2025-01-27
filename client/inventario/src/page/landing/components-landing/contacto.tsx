import "../Estilos-components/contacto.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Contacto() {
  return (
    <>
      <div className="contacto-box">
        <div className="contacto-content">
         <div className="contacto-title">
               <h4>¿Tienes preguntas o comentarios?</h4> 
         </div>
      <div className="contacto-parrafo">
         <p>
            Estamos aquí para ayudarte. Déjanos un mensaje y nos pondremos en contacto contigo lo antes posible.
          </p>
      </div>
         
       <div className="contacto-input">
        <input placeholder="Nombre" type="text" />
        <input placeholder="Email" type="text" />
       </div>
       <div className="contacto-textarea">
        <textarea placeholder="Mensaje" name="" id=""></textarea>
       </div>
       <div className="contacto-button">
        <button>
            Enviar mensaje
        </button>
       </div>
       <div className="contacto-iconos">
       <i><FaFacebook/></i>
       <i><FaInstagram/></i>
       <i><FaWhatsapp/></i>
       <i><FaGithub/></i>
       <i><FaLinkedin/></i>
       </div>
       <div>
            <div className="contacto-derechos">
                <p>All rights reserved</p>
                <p>Desarrollado por: Administracion</p>
            </div>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Contacto;

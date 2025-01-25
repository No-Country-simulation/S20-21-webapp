import "./landingPage.css";
import Ingresar from "./components-landing/ingresar";
import Benefits from "./components-landing/benefits";
import Contacto from "./components-landing/contacto";
const landingPage = () => {
  return (
    <>
    <div className="body-inicio">


    <section className="curved-section">
       <section className="border-section"></section>
      <div className="content">
        <div className="content-box-img">
          <img src="https://tse4.mm.bing.net/th?id=OIG4.C8Lx66mR2XCS4dUYCo5A&pid=ImgGn" alt="Imagen de empresa" />
        </div>

        <h1>Transforma la gestión de tu empresa</h1>
        

        <div className="content-box-p">
          <p>Con nuestra experiencia en administración de empresas, ayudamos a mejorar la eficiencia, reducir costos y maximizar el rendimiento de tu organización.</p>
        </div>
        
       
      </div>
    </section>

 <Benefits/>
 <Ingresar/>   

<Contacto/>

    </div>
</>
  );
}

export default landingPage
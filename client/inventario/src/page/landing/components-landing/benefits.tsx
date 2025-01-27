import "../Estilos-components/benefits.css";

interface BenefitProps {
  title: string;
  description: string;
  image: string;
}

function Benefit({ title, description, image }: BenefitProps) {
  return (
    <div className="benefit-item">
      <div className="benefit-item-img">
        <img src={image} alt={title} />
      </div>
      <div className="benefit-item-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Benefits() {
  const benefitsData: BenefitProps[] = [
    {
      title: "Innovación Tecnológica",
      description:
        "Implementamos soluciones modernas y avanzadas para mantenerte a la vanguardia en un mercado competitivo.",
      image: "https://ailabschool.com/wp-content/uploads/2023/10/2023071617532164037-1024x585.jpg",
    },
    {
      title: "Asesoramiento Personalizado",
      description:
        "Nuestros expertos trabajan contigo para entender tus necesidades y ofrecer estrategias hechas a medida.",
      image: "https://www.sennferrero.com/wp-content/uploads/2020/08/SERVICIO-N-6-900x486-px.jpg",
    },
    {
      title: "Crecimiento Asegurado",
      description:
        "Te ayudamos a optimizar tus recursos y alcanzar tus metas empresariales de manera eficiente y sostenible.",
      image: "https://hostingplus.ar/wp-content/uploads/2023/12/crecimiento-sustentable-.jpg",
    },
    {
      title: "Atención al Cliente 24/7",
      description:
        "Nuestro equipo está disponible en todo momento para resolver tus dudas y ofrecerte soporte inmediato.",
      image: "https://img.cronista.com/files/image/294/294674/5ffe08b68dee3_950_534!.jpg?s=93fd381c59794db5faea115c4c2f7278&d=1736711710",
    },
    {
      title: "Resultados Tangibles",
      description:
        "Nos enfocamos en cumplir con los objetivos propuestos, asegurando un impacto positivo y medible.",
      image: "https://cdn-es.checklistfacil.com/checklistfacil-Que-necesita-saber-para-implementar-la-gestion-de-resultados.jpg",
    },
  ];

  return (
    <div className="benefits-border">
      <div className="benefits-section">
        <div className="benefits-title">
          <h2>Beneficios de trabajar con nosotros</h2>
        </div>
        <div className="benefits-list">
          {benefitsData.map((benefit, index) => (
            <Benefit
              key={index}
              title={benefit.title}
              description={benefit.description}
              image={benefit.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;

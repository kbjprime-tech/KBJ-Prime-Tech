import "./Services.css";

import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRobot,
  FaPenNib,
  FaLightbulb
} from "react-icons/fa";


function Services() {

  const services = [
    {
      icon: <FaCode />,
      title: "Développement Web",
      description:
        "Création de sites modernes, rapides et adaptés aux besoins des entreprises."
    },

    {
      icon: <FaMobileAlt />,
      title: "Applications Mobiles",
      description:
        "Développement d'applications Android et iOS avec Flutter."
    },

    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "Conception d'interfaces modernes centrées sur l'expérience utilisateur."
    },

    {
      icon: <FaRobot />,
      title: "Automatisation IA",
      description:
        "Création de solutions automatisées pour optimiser les processus."
    },

    {
      icon: <FaPenNib />,
      title: "Gestion de contenu & Présence en ligne",
      description:
        "Création, gestion et optimisation de contenus digitaux pour améliorer votre visibilité."
    },

    {
      icon: <FaLightbulb />,
      title: "Solutions digitales",
      description:
        "Développement de solutions personnalisées adaptées aux besoins spécifiques."
    }
  ];


  return (
    <section className="services">

      <h2>
        Services
      </h2>

      <p className="services-intro">
        <b>KBJ Prime Tech</b> transforme vos idées en solutions digitales performantes.
      </p>


      <div className="services-grid">

        {services.map((service, index) => (

          <div
            className="service-card"
            key={index}
            data-aos="fade-up"
          >

            <div className="service-icon">
              {service.icon}
            </div>


            <h3>
              {service.title}
            </h3>


            <p>
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}


export default Services;
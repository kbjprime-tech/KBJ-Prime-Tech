import { useState } from "react";
import "./Portfolio.css";

import { 
  FaGithub, 
  FaExternalLinkAlt 
} from "react-icons/fa";


import project1 from "../../assets/images/dev.png";
import project2 from "../../assets/images/flutter.png";
import project3 from "../../assets/images/dashboard.png";


function Portfolio() {

  const [filter, setFilter] = useState("Tous");


  const projects = [
    {
      image: project1,
      title: "Site vitrine entreprise",
      category: "Web",
      description:
        "Site professionnel moderne permettant de présenter une entreprise et ses services.",
      technologies: ["React", "CSS", "JavaScript"],
      demo: "#",
      github: "#"
    },

    {
      image: project2,
      title: "Application de paiement",
      category: "Mobile",
      description:
        "Application mobile de paiement numérique développée avec une interface simple.",
      technologies: ["Flutter", "Firebase"],
      demo: "#",
      github: "#"
    },

    {
      image: project3,
      title: "Dashboard de gestion",
      category: "Web",
      description:
        "Interface de gestion avec statistiques et visualisation des données.",
      technologies: ["React", "API", "UI Design"],
      demo: "#",
      github: "#"
    }
  ];


  const categories = [
    "Tous",
    "Web",
    "Mobile",
    "UI/UX"
  ];


  const filteredProjects =
    filter === "Tous"
      ? projects
      : projects.filter(
          project => project.category === filter
        );


  return (
    <section className="portfolio">

      <h2>
        Mes Projets
      </h2>

      <p className="portfolio-intro">
        Découvrez quelques réalisations et solutions
        digitales développées par KBJ Prime Tech.
      </p>


      <div className="portfolio-filters">

        {categories.map((category, index) => (

          <button
            key={index}
            className={
              filter === category ? "active" : ""
            }
            onClick={() => setFilter(category)}
          >
            {category}
          </button>

        ))}

      </div>



      <div className="projects-grid">

        {filteredProjects.map((project, index) => (

          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
          >

            <img
              src={project.image}
              alt={project.title}
            />


            <div className="project-content">

              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <div className="tags">

                {project.technologies.map(
                  (tech, i) => (
                    <span key={i}>
                      {tech}
                    </span>
                  )
                )}

              </div>


              <div className="project-buttons">

                <a href={project.demo}>
                  <FaExternalLinkAlt />
                  Démo
                </a>


                <a href={project.github}>
                  <FaGithub />
                  Code
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


export default Portfolio;
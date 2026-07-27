import "./Technologies.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaRobot
} from "react-icons/fa";

import {
  SiFlutter,
  SiFigma
} from "react-icons/si";


function Technologies() {

  const technologies = [
    {
      name: "HTML",
      icon: <FaHtml5 />
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />
    },
    {
      name: "JavaScript",
      icon: <FaJs />
    },
    {
      name: "React",
      icon: <FaReact />
    },
    {
      name: "Flutter",
      icon: <SiFlutter />
    },
    {
      name: "UI/UX Design",
      icon: <SiFigma />
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt />
    },
    {
      name: "IA Automation",
      icon: <FaRobot />
    }
  ];


  return (
    <section className="technologies">

      <h2>
        Technologies que je maîtrise
      </h2>

      <p>
        Des outils modernes pour créer des solutions
        rapides, performantes et adaptées aux besoins.
      </p>


      <div className="tech-grid">

        {technologies.map((tech, index) => (
          <div className="tech-card" key={index}>

            <div className="tech-icon">
              {tech.icon}
            </div>

            <h3>
              {tech.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Technologies;
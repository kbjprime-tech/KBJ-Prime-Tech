import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/images/hero-image.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          🚀 Développeur Web & Mobile
        </span>


        <h1>
          Je transforme vos idées en solutions digitales modernes
        </h1>


        <p>
          <b>KBJ Prime Tech</b> accompagne les entreprises,
          entrepreneurs et organisations dans la création de
          sites web, applications mobiles et solutions digitales
          innovantes.
        </p>


        <div className="hero-buttons">

          <Link to="/portfolio" className="btn">
            Voir mes projets
          </Link>

          <Link to="/contact" className="btn secondary">
            Me contacter
          </Link>

        </div>


        <div className="hero-stats">

          <div>
            <h3>10+</h3>
            <p>Technologies maîtrisées</p>
          </div>

          <div>
            <h3>5+</h3>
            <p>Projets réalisés</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Engagement</p>
          </div>

        </div>


      </div>


      <div className="hero-image">
        <img 
          src={heroImage} 
          alt="Développement digital" 
        />
      </div>


    </section>
  );
}

export default Hero;
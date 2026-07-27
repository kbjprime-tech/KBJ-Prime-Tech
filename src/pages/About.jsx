import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about">

      {/* Hero */}
      <section className="about-hero">
        <h1>À propos de KBJ Prime Tech</h1>

        <p>
          KBJ Prime Tech est une marque dédiée à la création de solutions
          digitales modernes. Ma mission est d'aider les entreprises,
          entrepreneurs et organisations à développer leur présence en ligne
          grâce à des sites web, des applications mobiles et des solutions
          numériques performantes.
        </p>
      </section>

      {/* Fondateur */}
      <section className="about-founder">
        <h2>Le fondateur</h2>

        <p>
          Je m'appelle <strong>Glory</strong>. Je suis développeur web et
          mobile, passionné par les nouvelles technologies et l'innovation.
          À travers KBJ Prime Tech, je mets mes compétences au service des
          entreprises afin de concevoir des solutions fiables, modernes et
          centrées sur les besoins des utilisateurs.
        </p>
      </section>

      {/* Vision */}
      <section className="about-vision">
        <h2>Ma vision</h2>

        <p>
          Je crois que chaque entreprise, quelle que soit sa taille, mérite
          des outils numériques performants pour accélérer sa croissance.
          Mon objectif est de rendre la technologie accessible, utile et
          créatrice de valeur.
        </p>
      </section>

      {/* Valeurs */}
      <section className="about-values">
        <h2>Mes valeurs</h2>

        <div className="values-grid">

          <div className="value-card">
            <h3>Innovation</h3>
            <p>Toujours rechercher des solutions modernes.</p>
          </div>

          <div className="value-card">
            <h3>Qualité</h3>
            <p>Construire des produits fiables, rapides et durables.</p>
          </div>

          <div className="value-card">
            <h3>Transparence</h3>
            <p>Communiquer clairement tout au long du projet.</p>
          </div>

          <div className="value-card">
            <h3>Satisfaction client</h3>
            <p>Créer des solutions qui répondent réellement aux besoins.</p>
          </div>

        </div>
      </section>

      {/* Processus */}
      <section className="about-process">
        <h2>Mon processus de travail</h2>

        <ol>
          <li>Comprendre votre projet</li>
          <li>Concevoir une solution adaptée</li>
          <li>Développer avec les meilleures technologies</li>
          <li>Tester et optimiser</li>
          <li>Livrer et assurer le suivi</li>
        </ol>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="about-why">
        <h2>Pourquoi choisir KBJ Prime Tech ?</h2>

        <ul>
          <li>Développement moderne avec React et Flutter</li>
          <li>Design centré sur l'utilisateur</li>
          <li>Solutions personnalisées</li>
          <li>Communication claire</li>
          <li>Respect des délais</li>
          <li>Accompagnement après la livraison</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Prêt à concrétiser votre projet ?</h2>

        <p>
          Discutons ensemble de votre idée et construisons une solution
          digitale qui répond à vos objectifs.
        </p>

        <Link to="/contact" className="cta-button">
          Me contacter
        </Link>
      </section>

    </main>
  );
}

export default About;
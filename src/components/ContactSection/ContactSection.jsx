import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <h2>
        Transformons votre idée en solution digitale
      </h2>

      <p>
        Vous avez un projet ? Discutons ensemble pour créer
        une solution adaptée à vos besoins.
      </p>

      <div className="contact-buttons">
        <a
          href="https://wa.me/243960345134"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Écrire sur WhatsApp
        </a>

        <a
          href="mailto:contact@kbjprime.glory@gmail.com"
          className="btn secondary"
        >
          Envoyer un e-mail
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
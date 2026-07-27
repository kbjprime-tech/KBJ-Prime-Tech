import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        KBJ Prime Tech
      </div>


      <div 
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>


      <ul className={menuOpen ? "nav-links active-menu" : "nav-links"}>

        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            À propos
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contacts
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
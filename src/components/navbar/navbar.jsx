import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar-nav">
        <li className="Nav-item">
          <Link to="/home" className="Nav-link">Home</Link>
        </li>
        <li className="Nav-item">
          <Link to="/location" className="Nav-link">Location</Link>
        </li>
        <li className="Nav-item">
          <Link to="/contacts" className="Nav-link">Contacts</Link>
        </li>
        <li className="Nav-item">
          <Link to="/about" className="Nav-link">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
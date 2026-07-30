import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>⚽ FIFA</h2>

      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/crear">Crear Jugador</Link>
      </div>

    </nav>
  );
}

export default Navbar;
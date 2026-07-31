import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [logueado, setLogueado] = useState(
    localStorage.getItem("logueado") === "true"
  );

  useEffect(() => {
    const chequearLogin = () => {
      setLogueado(localStorage.getItem("logueado") === "true");
    };

    window.addEventListener("authChange", chequearLogin);

    return () => {
      window.removeEventListener("authChange", chequearLogin);
    };
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("logueado");
    localStorage.removeItem("token");

    setLogueado(false);

    window.dispatchEvent(new Event("authChange"));

    navigate("/");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        STATS FIFA
      </Link>

      <div className="links">

        <Link to="/">
          Inicio
        </Link>

        {logueado && (
          <Link to="/crear">
            Crear jugador
          </Link>
        )}

        {logueado ? (
          <button 
            className="logout-btn" 
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </button>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
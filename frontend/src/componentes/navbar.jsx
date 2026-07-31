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

    window.addEventListener("storage", chequearLogin);

    return () => {
      window.removeEventListener("storage", chequearLogin);
    };
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("logueado");
    setLogueado(false);
    navigate("/login");
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
                <button onClick={cerrarSesion}>
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
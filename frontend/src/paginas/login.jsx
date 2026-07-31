import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/login.css";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [logResult, setLogResult] = useState(null);

  const trueUser = "Admin";
  const truePassword = "1234";

  const enviar = (e) => {
    e.preventDefault();

    if (user === trueUser && password === truePassword) {
      setLogResult(true);
      localStorage.setItem("logueado", "true");
      window.dispatchEvent(new Event("storage"));

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } else {
      setLogResult(false);
    }
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={enviar}>

        <h2 style={{color:"white", textAlign:"center"}}>
          Login
        </h2>

        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Entrar
        </button>

        {logResult === true && (
          <p className="login-success">
            Inicio de sesión correcto
          </p>
        )}

        {logResult === false && (
          <p className="login-error">
            Usuario o contraseña incorrectos
          </p>
        )}

      </form>

    </div>
  );
}

export default Login;
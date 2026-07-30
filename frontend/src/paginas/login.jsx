import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CSS/login.css";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const enviar = (e) => {
    e.preventDefault();

    if (user === "Admin" && password === "1234") {
      navigate("/");
    }
  };

  return (
    <form onSubmit={enviar}>
      <input
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

      <button>
        Entrar
      </button>
    </form>
  );
}

export default Login;
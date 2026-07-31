import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [logResult, setLogResult] = useState(null);

  const enviar = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        username: user,
        password: password,
      });

      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("logueado", "true");

      window.dispatchEvent(new Event("storage"));

      setLogResult(true);

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      console.error(error);
      setLogResult(false);
    }
  };

  return (
    <>
      <form onSubmit={enviar}>
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

        <button type="submit">Entrar</button>
      </form>

      {logResult === true && <p>Inicio de sesión correcto</p>}
      {logResult === false && <p>Usuario o contraseña incorrectos</p>}
    </>
  );
}

export default Login;
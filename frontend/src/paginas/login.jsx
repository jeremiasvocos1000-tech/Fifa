import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } else {
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
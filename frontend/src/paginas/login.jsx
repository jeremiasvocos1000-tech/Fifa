import { useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

import "./CSS/login.css";
=======
>>>>>>> 0ac0a80caa387a07d2cbf3ede004502de50c6e2b

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
=======
  const [logResult, setLogResult] = useState(null);

  const trueUser = "Admin";
  const truePassword = "1234";
>>>>>>> 0ac0a80caa387a07d2cbf3ede004502de50c6e2b

  const enviar = (e) => {
    e.preventDefault();

<<<<<<< HEAD
    if (user === "Admin" && password === "1234") {
      navigate("/");
=======
    if (user === trueUser && password === truePassword) {
      setLogResult(true);
    } else {
      setLogResult(false);
>>>>>>> 0ac0a80caa387a07d2cbf3ede004502de50c6e2b
    }
  };

  return (
<<<<<<< HEAD
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
=======
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

        <button type="submit">Enviar</button>
      </form>

      {logResult === true && <p>Inicio de sesión correcto</p>}
      {logResult === false && <p>Usuario o contraseña incorrectos</p>}
    </>
>>>>>>> 0ac0a80caa387a07d2cbf3ede004502de50c6e2b
  );
}

export default Login;
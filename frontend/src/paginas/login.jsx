import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [logResult, setLogResult] = useState(null);

  const trueUser = "Admin";
  const truePassword = "1234";

  const enviar = (e) => {
    e.preventDefault();

    if (user === trueUser && password === truePassword) {
      setLogResult(true);
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

        <button type="submit">Enviar</button>
      </form>

      {logResult === true && <p>Inicio de sesión correcto</p>}
      {logResult === false && <p>Usuario o contraseña incorrectos</p>}
    </>
  );
}

export default Login;
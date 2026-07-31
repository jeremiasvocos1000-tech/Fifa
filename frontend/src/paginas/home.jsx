import { useState, useEffect } from "react";
import PlayersList from "./playerslist";

function Home() {

  const [logueado, setLogueado] = useState(
    localStorage.getItem("logueado") === "true"
  );

  useEffect(() => {

    const actualizarLogin = () => {
      setLogueado(
        localStorage.getItem("logueado") === "true"
      );
    };

    window.addEventListener("authChange", actualizarLogin);

    return () => {
      window.removeEventListener("authChange", actualizarLogin);
    };

  }, []);


  return (
    <main className="home">

      <h1>STATS FIFA</h1>

      {logueado ? (
        <PlayersList />
      ) : (
        <p>Inicia sesión para ver los jugadores</p>
      )}

    </main>
  );
}

export default Home;
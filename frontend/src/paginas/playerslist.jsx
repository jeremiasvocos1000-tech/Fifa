import "./CSS";
import { useEffect, useState } from "react";
import api from "../service/api";

function PlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function cargarJugadores() {
      try {
        const response = await api.get("/players");

        console.log("Jugadores recibidos:", response.data);

        setPlayers(response.data);

      } catch (error) {
        console.error("Error cargando jugadores:", error);
      }
    }

    cargarJugadores();
  }, []);

 return (
  <div className="players-container">
    <h2>Lista de jugadores</h2>

    <div className="players-grid">
      {players.map((player) => (
        <div className="player-card" key={player.id}>
          <img
            src={player.player_face_url}
            alt={player.long_name}
          />

          <p>
            {player.long_name} - {player.overall}
          </p>
        </div>
      ))}
    </div>
  </div>
);
}
export default PlayersList;
import "./CSS/playerslist.css";
import { useEffect, useState } from "react";
import api from "../service/api";
<<<<<<< HEAD
import PlayerCard from "../componentes/PLayerCard/PLayerCard";
=======
>>>>>>> 5f1aa38a889df614fd23d26de5bfecb5e4ab0b7c

function PlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function cargarJugadores() {
      try {
        const response = await api.get("/players");
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
        {players.length === 0 ? (
          <p>No hay jugadores</p>
        ) : (
          players.map((player) => (
            <div className="player-card" key={player.id}>
              <img
                src={player.player_face_url}
                alt={player.long_name}
              />

              <p>
                {player.long_name} - ⭐ {player.overall}
              </p>

              <p>{player.club_name}</p>
              <p>{player.player_positions}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PlayersList;
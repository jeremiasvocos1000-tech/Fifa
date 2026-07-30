import "./CSS/playerslist.css";
import { useEffect, useState } from "react";
import api from "../service/api";

function PlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function cargarJugadores() {
      try {
        const response = await api.get("/players");
        console.log(response.data);
        setPlayers(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    cargarJugadores();
  }, []);

  return (
    <div>
      <h2>Lista de jugadores</h2>

      <div className="player-list">
        {players.map((player) => (
          <div className="player-card" key={player.id}>
            <img
              src={player.player_face_url}
              alt={player.long_name}
            />

            <h3>{player.long_name}</h3>

            <p>Overall: {player.overall}</p>

            <div className="player-rating">
              {player.overall}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayersList;
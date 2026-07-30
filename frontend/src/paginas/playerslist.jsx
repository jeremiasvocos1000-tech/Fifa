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

      {players.map((player) => (
        <div key={player.id} style={{ marginBottom: "20px" }}>
          <img
            src={player.player_face_url}
            alt={player.long_name}
            width="100"
            height="100"
          />
          <p>
            {player.long_name} - {player.overall}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PlayersList;
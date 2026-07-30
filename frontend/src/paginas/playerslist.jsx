import "./CSS/playerslist.css";
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
    <div>
      <h2>Lista de jugadores</h2>

      {players.map((player) => (
        <div key={player.id} style={{ marginBottom: "20px" }}>

<img
  src={`http://localhost:3000/players-image?url=${encodeURIComponent(player.player_face_url)}`}
  alt={player.long_name}
  width="100"
  height="100"
/>
          <p>
            {player.long_name} - {player.overall}
          </p>

          <p>
            Club: {player.club_name}
          </p>

          <p>
            Posición: {player.player_positions}
          </p>

        </div>
      ))}

    </div>
  );
}

export default PlayersList;
import "./CSS/playerlist.css";
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
        <p key={player.id}>
          {player.long_name} - {player.overall}
        </p>
      ))}
    </div>
  );
}

export default PlayersList;
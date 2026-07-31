import "./CSS/playerslist.css";
import { useEffect, useState } from "react";
import api from "../service/api";
import PlayerCard from "../componentes/PLayerCard/PLayerCard";

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
    <div className="players-grid">
  {players.length === 0 ? (
    <p>No hay jugadores</p>
  ) : (
    players.map((player) => {

      console.log(player);

      return (
        <PlayerCard
          key={player.id}
          player={player}
        />
      );

    })
  )}
</div>
  );
}

export default PlayersList;
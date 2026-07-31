import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../service/api";

function InfoJugador() {

  const { id } = useParams();

  const [player, setPlayer] = useState(null);

  useEffect(() => {

    async function cargarJugador() {

      try {

        const response = await api.get(`/players/${id}`);

        setPlayer(response.data);

      } catch (error) {

        console.error(error);

      }

    }

    cargarJugador();

  }, [id]);

  if (!player) {
    return <h2>Cargando...</h2>;
  }

  return (

    <div style={{padding:"30px"}}>

      <img
        src={`http://localhost:3000/players-image?url=${encodeURIComponent(
          player.player_face_url
        )}`}
        alt={player.long_name}
        width="200"
      />

      <h1>{player.long_name}</h1>

      <h2>Overall: {player.overall}</h2>

      <hr />

      <p><strong>Club:</strong> {player.club_name}</p>

      <p><strong>Posición:</strong> {player.player_positions}</p>

      <p><strong>Nacionalidad:</strong> {player.nationality_name}</p>

      <p><strong>Edad:</strong> {player.age}</p>

      <p><strong>Altura:</strong> {player.height_cm} cm</p>

      <p><strong>Peso:</strong> {player.weight_kg} kg</p>

      <p><strong>Pie hábil:</strong> {player.preferred_foot}</p>

      <p><strong>Skill Moves:</strong> {player.skill_moves}</p>

      <p><strong>Weak Foot:</strong> {player.weak_foot}</p>

      <p><strong>Work Rate:</strong> {player.work_rate}</p>

      <hr />

      <h2>Stats</h2>

      <p>Pace: {player.pace}</p>

      <p>Shooting: {player.shooting}</p>

      <p>Passing: {player.passing}</p>

      <p>Dribbling: {player.dribbling}</p>

      <p>Defending: {player.defending}</p>

      <p>Physic: {player.physic}</p>

    </div>

  );

}

export default InfoJugador;
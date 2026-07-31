import { Link } from "react-router-dom";
import "./PlayerCard.css";

function PlayerCard({ player }) {
  return (
    <Link 
      to={`/player/${player.id}`} 
      className="player-card-link"
    >

      <div className="player-card">

        <div className="overall">
          {player.overall}
        </div>


        <img
          src={`http://localhost:3000/players-image?url=${encodeURIComponent(
            player.player_face_url
          )}`}
          alt={player.long_name}
        />


        <h2>
          {player.long_name}
        </h2>


        <div className="player-info">

          <p>
            <strong>Club:</strong> {player.club_name}
          </p>

          <p>
            <strong>Posición:</strong> {player.player_positions}
          </p>

          <p>
            <strong>Nacionalidad:</strong> {player.nationality_name || "N/A"}
          </p>

        </div>


      </div>

    </Link>
  );
}

export default PlayerCard;
import { Link } from "react-router-dom";
import "./PlayerCard.css";

function PlayerCard({ player }) {
  return (
    <Link to={`/player/${player.id}`} className="player-card-link">
      <div className="player-card">

        <img
          src={`http://localhost:3000/players-image?url=${encodeURIComponent(
            player.player_face_url
          )}`}
          alt={player.long_name}
        />

        <h3>{player.long_name}</h3>

        <p><strong>Overall:</strong> {player.overall}</p>

        <p>{player.club_name}</p>

        <p>{player.player_positions}</p>

      </div>
    </Link>
  );
}

export default PlayerCard;
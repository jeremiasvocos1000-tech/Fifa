import "./PlayerCard.css";

function PlayerCard({ player }) {
  return (
    <div className="player-card">

      <img
        className="player-image"
        src={`http://localhost:3000/players-image?url=${encodeURIComponent(
          player.player_face_url
        )}`}
        alt={player.long_name}
      />

      <div className="player-info">

        <h3>{player.long_name}</h3>

        <span className="overall">
          OVR {player.overall}
        </span>

        <p>{player.player_positions}</p>

        <p>{player.club_name}</p>

        <p>{player.nationality_name}</p>

      </div>

    </div>
  );
}

export default PlayerCard;
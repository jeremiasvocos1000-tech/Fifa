import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";
import "./CSS/crearjugador.css";

function CrearJugador() {
  const navigate = useNavigate();

  const [jugador, setJugador] = useState({
    nombre: "",
    equipo: "",
    media: "",
    posicion: "",
  });

  const handleChange = (e) => {
    setJugador({
      ...jugador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/players", {
        long_name: jugador.nombre,
        club_name: jugador.equipo,
        overall: Number(jugador.media),
        player_positions: jugador.posicion,
        player_face_url: "https://via.placeholder.com/150",
      });

      navigate("/");
    } catch (error) {
      console.error("Error creando jugador:", error);
    }
  };

  return (
    <div className="crear-container">
      <h2>Crear Jugador</h2>

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={jugador.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="equipo"
          placeholder="Equipo"
          value={jugador.equipo}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="media"
          placeholder="Media (0-99)"
          value={jugador.media}
          onChange={handleChange}
          required
        />

        <select
          name="posicion"
          value={jugador.posicion}
          onChange={handleChange}
          required
        >
          <option value="">Posición</option>
          <option value="Delantero">Delantero</option>
          <option value="Mediocampista">Mediocampista</option>
          <option value="Defensor">Defensor</option>
          <option value="Arquero">Arquero</option>
        </select>

        <button type="submit">Crear</button>

      </form>
    </div>
  );
}

export default CrearJugador;
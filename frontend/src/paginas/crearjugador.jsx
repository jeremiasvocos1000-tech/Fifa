import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const jugadoresGuardados =
      JSON.parse(localStorage.getItem("jugadores")) || [];

    const nuevoJugador = {
      ...jugador,
      id: Date.now(),
    };

    localStorage.setItem(
      "jugadores",
      JSON.stringify([...jugadoresGuardados, nuevoJugador])
    );

    navigate("/");
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
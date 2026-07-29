import Login from "./paginas/login";
import InfoJugador from "./paginas/infojugador";
import EditarJugador from "./paginas/editarjugador";
import PlayersList from "./paginas/playerslist";
import CrearJugador from "./paginas/crearjugador";

function App() {
  return (
    <>
      <h1>STATS FIFA </h1>
      <Login />
      <hr />
      <PlayersList />
      <hr />
      <CrearJugador />
      <hr />
      <EditarJugador />
      <hr />
      <InfoJugador />
    </>
  );
}

export default App;
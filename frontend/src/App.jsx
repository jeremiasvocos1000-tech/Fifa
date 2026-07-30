import { Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar";

import Login from "./paginas/login";
import CrearJugador from "./paginas/crearjugador";
import PlayersList from "./paginas/playerslist";
import Home from "./paginas/home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/crear" element={<CrearJugador />} />

        <Route path="/players" element={<PlayersList />} />
      </Routes>
    </>
  );
}

export default App;
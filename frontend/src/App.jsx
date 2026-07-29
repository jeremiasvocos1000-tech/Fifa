import { BrowserRouter, Routes, Route } from "react-router-dom";

import CrearJugador from "./paginas/crearjugador";
import EditarJugador from "./paginas/editarjugador";
import InfoJugador from "./paginas/infjugador";
import PlayersList from "./paginas/playerslist";
import Login from "./paginas/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayersList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crear" element={<CrearJugador />} />
        <Route path="/editar/:id" element={<EditarJugador />} />
        <Route path="/jugador/:id" element={<InfoJugador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
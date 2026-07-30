import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar";

import Login from "./paginas/login";
import CrearJugador from "./paginas/crearjugador";
import PlayersList from "./paginas/playerslist";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/crear" element={<CrearJugador />} />
        <Route path="/" element={<PlayersList />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
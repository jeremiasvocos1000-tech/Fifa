import { Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar";

import Home from "./paginas/Home";
import Login from "./paginas/login";
import CrearJugador from "./paginas/crearjugador";
import EditarJugador from "./paginas/editarjugador";
import InfoJugador from "./paginas/infojugador";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/crear" element={<CrearJugador />} />

        <Route path="/editar/:id" element={<EditarJugador />} />

        <Route path="/player/:id" element={<InfoJugador />} />

      </Routes>
    </>
  );
}

export default App;
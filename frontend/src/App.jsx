import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Login from "./paginas/login";
import InfoJugador from "./paginas/infojugador";
import CrearJugador from "./paginas/crearjugador";
import EditarJugador from "./paginas/editarjugador";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<InfoJugador />} />
        <Route path="/crear" element={<CrearJugador />} />
        <Route path="/editar/:id" element={<EditarJugador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
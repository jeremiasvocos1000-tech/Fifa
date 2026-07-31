import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Login from "./paginas/login";
import InfoJugador from "./paginas/infojugador";
import CrearJugador from "./paginas/crearjugador";
import EditarJugador from "./paginas/editarjugador";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player/:id" element={<InfoJugador />} />
          <Route path="/crear" element={<CrearJugador />} />
          <Route path="/editar/:id" element={<EditarJugador />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
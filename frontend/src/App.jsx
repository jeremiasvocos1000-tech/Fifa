import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar";

import Login from "./paginas/login";
import CrearJugador from "./paginas/crearjugador";
import PlayersList from "./paginas/playerslist";

function App() {
  return (
    <div> <h1>six seven</h1> 
   
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/crear" element={<CrearJugador />} />
        <Route path="/" element={<PlayersList />} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
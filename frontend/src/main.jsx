import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from "Fifa/frontend/src/paginas/login.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)

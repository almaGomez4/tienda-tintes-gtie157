import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./components/secciones/Home";
import Catalogo from "./components/secciones/Catalogo";
import Ofertas from "./components/secciones/Ofertas";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/ofertas" element={<Ofertas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
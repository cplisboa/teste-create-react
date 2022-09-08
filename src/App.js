import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Depto from "./pages/Depto";

function App() {
  return (
    <BrowserRouter>
      {/* AQUI TEREMOS UM MENU */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/depto" element={<Depto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

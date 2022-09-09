import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Depto from "./pages/Depto";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/depto" element={<Depto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

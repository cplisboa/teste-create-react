import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Depto from "./pages/Depto";
import DeptoDetalhes from "./pages/DeptoDetalhes";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ROUTE COM POSSIBILIDADE DE RECEBER ID E ABRIR OUTRA PÁGINA  */}
        <Route path="/depto">
          <Route index element={<Depto />} />
          <Route path=":id" element={<DeptoDetalhes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

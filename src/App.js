import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Depto from "./pages/Depto";
import DeptoDetalhes from "./pages/DeptoDetalhes";
import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";
import FormDepartamento from "./pages/FormDepartamento";
import "./assets/scss/main.scss";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ROUTE COM POSSIBILIDADE DE RECEBER ID E ABRIR OUTRA PÁGINA  */}
            <Route path="/departamentos">
              <Route index element={<Depto />} />
              <Route path=":id" element={<DeptoDetalhes />} />
              <Route path="new" element={<FormDepartamento />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

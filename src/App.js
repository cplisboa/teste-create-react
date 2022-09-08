import Botao from "./components/Botao";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      Contador: {count}
      <br />
      <Botao
        nome="<"
        onClick={() => {
          setCount(count - 1);
        }}
      />
      <Botao
        nome=">"
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <Botao onClick={() => setCount(0)}/>
      {/* Comentario de código */}
    </>
  );
}

export default App;

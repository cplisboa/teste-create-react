import React, { useState } from "react";
import Botao from "../../components/Botao";
import { useLocation } from "react-router-dom";
import Mensagem from "./styles";

const FormDepartamento = (adicionaDepto) => {
  const { state } = useLocation();
  console.log(state);

  const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");
  const [msg, setMsg] = useState("");
  const [erro, setErro] = useState("erro");

  const validaForm = () => {
    if (nome === "") {
      setMsg("Preencha o nome");
      setErro("erro");
      return false;
    }
    if (sigla === "") {
      setMsg("Preencha a sigla");
      setErro("erro");
      return false;
    }
    // sucesso!
    setErro("nao");
    setMsg("Sucesso");
    setNome("");
    setSigla("");
  };

  return (
    <>
      <h2>Novo Departamento</h2>
      <input
        type="text"
        name="nome"
        id="nome"
        placeholder="nome"
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        name="sigla"
        id="sigla"
        value={sigla}
        onChange={(e) => {
          setSigla(e.target.value);
        }}
      />
      <br />
      <Botao nome="Enviar" onClick={validaForm} />
      <Mensagem type={erro}> {msg} </Mensagem>
    </>
  );
};

export default FormDepartamento;

import React, { useState } from "react";
import Botao from "../../components/Botao";

const FormDepartamento = (adicionaDepto) => {
  const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");
  const [msg, setMsg] = useState("");

  const validaForm = () => {
    if(nome===''){
        setMsg('Preencha o nome');
        return false;
    }
    if(sigla===''){
        setMsg('Preencha a sigla');
        return false;
    }
    //sucesso!
    setMsg('');
  }

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
      <Botao nome="Enviar" onClick={validaForm}/>
      <p>{msg}</p>
    </>
  );
};

export default FormDepartamento;

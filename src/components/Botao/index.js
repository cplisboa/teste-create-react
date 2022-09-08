import React from "react";

const Botao = ({ nome = "default", onClick }) => {
  return <button onClick={onClick}> {nome} </button>;
};

export default Botao;

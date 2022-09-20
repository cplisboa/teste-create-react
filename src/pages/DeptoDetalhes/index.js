import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";

const DeptoDetalhes = () => {
  const { id } = useParams();

  return (
    <>
      <h1> Departamento detalhe </h1>
      <p> Id do Departamento: {id}</p>
      <Card></Card>
    </>
  );
};

export default DeptoDetalhes;

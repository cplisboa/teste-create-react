import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import getDepartamentos from "../../services/departamentos";


const Depto = () => {

  console.log(getDepartamentos());

  const departamentos = [
    { id: 1, nome: "Recursos Humanos", sigla: "RH" },
    { id: 2, nome: "Financeiro", sigla: "FINANC" },
    { id: 3, nome: "Contabilidade", sigla: "CONTAB" },
  ]; 

  return (
    <>
      <h1>Departamentos</h1>
      {departamentos.map((dep) => {
        return (
          <p>
            <Link key={dep.id} to={`/departamentos/${dep.id}`}> <Card titulo={dep.nome} /></Link>
            <br />
          </p>
        );
      })}
    </>
  );
};

export default Depto; 

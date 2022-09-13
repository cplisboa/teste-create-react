import React from "react";
import { Link } from "react-router-dom";

const departamentos = [
  { id: 1, nome: "Recursos Humanos", sigla: "RH" },
  { id: 2, nome: "Financeiro", sigla: "FINANC" },
  { id: 3, nome: "Contabilidade", sigla: "CONTAB" },
];

const Depto = () => {
  return (
    <>
      <h1>Departamentos</h1>
      {departamentos.map((dep) => {
        return (
          <p>
            <Link key={dep.id} to={`/departamentos/${dep.id}`}> {`Departamento ${dep.id}`} </Link>
            <br />
          </p>
        );
      })}
    </>
  );
};

export default Depto;

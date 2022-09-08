import React from "react";

const Titulo = ({ nomeCurso }) => {
  return (
      <h3> {nomeCurso ? `Curso selecionado: ${nomeCurso}` : 'Nenhum curso selecionado'} </h3>
  );
};

export default Titulo;

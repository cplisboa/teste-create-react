import React from "react";
import Botao from "../Botao"


const Card = ({titulo}) => {

    return(
        <>
            <h3> {titulo} </h3>
            <Botao nome="Editar"/>
            <Botao nome="Excluir"/>
        </>
    );

};

export default Card;
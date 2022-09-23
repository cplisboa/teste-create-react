import React from "react";
import Botao from "../Botao";
import { Link } from "react-router-dom";


const Card = ({key, to, titulo}) => {

    return(
        <>
            <Link key={key} to={to}> {titulo} </Link>
            <Botao nome="Editar"/>
            <Botao nome="Excluir"/>
        </>
    );

};

export default Card;
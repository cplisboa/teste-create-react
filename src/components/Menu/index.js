import React from "react";
import {LinkNav, Nav} from "./styles";

const Menu = () => {
  return (
    <Nav>
      <LinkNav to="/">Home</LinkNav>
      <LinkNav to="/departamentos"> Departamentos </LinkNav>
      <LinkNav to="/departamentos/new" state={{ nome: "Cicero" }}> Add Departamento </LinkNav>
    </Nav>
  );
};

export default Menu;

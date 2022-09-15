import styled from "styled-components";
import { Link } from "react-router-dom";

// Sintaxe Tag Template
export const Nav = styled.nav`
  background: yellow;

  padding: 15px;
  display: flex;
  align-items: center;

  h1 {
    margin-right: 60px;
  }
`;

export const LinkNav = styled(Link)`
  color: #002244;

  display: flex;
  align-items: center;
  padding: 10px;

  border-right: 1px dashed #002244;
  text-decoration: none;

  &:hover {
    background: #002244;
    color: #e1e1e1;
  }  
`;

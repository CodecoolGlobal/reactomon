import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const StyledLink = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    color: white;
    &:hover {
      color: white;
      text-decoration: none;
    }
  `;

  const headerStyle = {
    backgroundColor: "#EF5350",
    color: "#FFF",
    textAlign: "center",
    padding: "10px",
  };

  const linkStyle = {
    fontWeight: "bold",
    color: "#FFF",
    textDecoration: "none",
    textAlign: "center",
  };

  return (
    <div className="fixed-top" style={headerStyle}>
      <div>
        <h2>
          <StyledLink to="/">Pokedex</StyledLink>
        </h2>
      </div>
      <div>
        <Link style={linkStyle} to="/pokemons">
          Pokemon
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/types">
          Types
        </Link>{" "}
      </div>
    </div>
  );
}

export default Navbar;

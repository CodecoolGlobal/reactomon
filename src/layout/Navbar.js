import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [value, setValue] = useContext(ThemeContext);

  const StyledLink = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    color: ${value ? "#FFCB05" : "#FFF"};
    &:hover {
      color: "#C7A008";
      text-decoration: none;
    }
  `;

  const headerStyle = {
    backgroundColor: `${value ? "#2A75BB" : "black"}`,
    color: `${value ? "#FFCB05" : "#FFF"}`,
    textAlign: "center",
    padding: "10px",
  };

  const linkStyle = {
    fontWeight: "bold",
    color: `${value ? "#FFCB05" : "#FFF"}`,
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
        |{" "}
        <button
          style={linkStyle}
          onClick={() => (value === true ? setValue(false) : setValue(true))}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default Navbar;

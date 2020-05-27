import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { PokemonIdContext } from "../../context/PokemonIdContext";

const Sprite = styled.img`
  width: 8em;
  height: 8em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function PokemonListElement(props) {
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonIndex, setPokemonIndex] = useState("");
  const { setPokemonId } = useContext(PokemonIdContext);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    setPokemonIndex(props.url.split("pokemon/")[1].replace("/", ""));
    setPokemonImage(
      `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
    );
  }, [pokemonImage, pokemonIndex, props]);

  const elementStyle = {
    textDecoration: "none",
  };

  const cardHeader = {
    fontWeight: "bold",
    color: "white",
    backgroundColor: `${theme ? "#2A75BB" : "black"}`,
  };

  const Card = styled.div`
    font-weight: bold;
    color: ${theme ? "#2A75BB" : "#FFF"};
    background-color: ${theme ? "#FFCB05" : "#333"};
    box-shadow: 0 1px 3px;
    transition: all 0.5s;
    &:hover {
      box-shadow: 0 7px 14px;
    }
  `;

  return (
    <div className="col-md-4 col-sm-6 mb-5">
      <StyledLink
        to={`/pokemon/${pokemonIndex}`}
        style={elementStyle}
        onClick={() => setPokemonId(pokemonIndex)}
      >
        <Card className="card">
          <div className="card-header" style={cardHeader}>
            {pokemonIndex}
          </div>
          <div className="card-body mx-auto">
            <h6 className="card-title">{props.name}</h6>
            <Sprite
              className="card-img-center rounded mx-auto mt-2"
              src={pokemonImage}
            />
          </div>
        </Card>
      </StyledLink>
    </div>
  );
}

export default PokemonListElement;

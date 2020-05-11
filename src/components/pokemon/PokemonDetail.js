import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

import { PokemonIdContext } from "../../context/PokemonIdContext";
import { ThemeContext } from "../../context/ThemeContext";

const Sprite = styled.img`
  width: 12em;
  height: 12em;
`;

function PokemonDetail() {
  const [pokemonInfo, setPokemonInfo] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const { pokemonId } = useContext(PokemonIdContext);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((json) => {
      setPokemonInfo(json.data);
      setPokemonImage(
        `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`
      );
    });
  }, [pokemonId]);

  const cardHeader = {
    fontWeight: "bold",
    color: "white",
    backgroundColor: `${theme ? "red" : "black"}`,
  };

  const Card = styled.div`
    font-weight: bold;
    color: ${theme ? "#000" : "#FFF"};
    background-color: ${theme ? "#FFF" : "#333"};
    box-shadow: 0 1px 3px;
  `;

  return pokemonInfo ? (
    <div>
      <div>
        <Card className="card">
          <div className="card-header" style={cardHeader}>
            {pokemonInfo.id} {pokemonInfo.name}
          </div>
          <div className="card-body mx-auto">
            <Sprite
              className="card-img-center rounded mx-auto mt-2"
              src={pokemonImage}
            />

            <h4>Pokemon Types:</h4>
            {pokemonInfo.types.map((type) => (
              <h5>{type.type.name}</h5>
            ))}
            <h4>Staring Abilities</h4>
            {pokemonInfo.abilities.map((ability) => (
              <h6>{ability.ability.name}</h6>
            ))}
            <p>
              <h4>Base Experience: </h4>
              {pokemonInfo.base_experience}
            </p>
            <p>
              <h4>Height: </h4>
              {pokemonInfo.height}
            </p>
            <p>
              <h4>Weight: </h4>
              {pokemonInfo.weight}
            </p>
            {pokemonInfo.stats.map((stat) => (
              <p>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>
        </Card>

        {/* {pokemonInfo.moves.map((move) => (
          <p>{move.move.name}</p>
        ))} */}
      </div>
    </div>
  ) : (
    <div>
      <h2>Loading details..</h2>
    </div>
  );
}

export default PokemonDetail;

import React, { useState, useEffect } from "react";
import axios from "axios";

import PokemonListElement from "./PokemonListElement";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(res => setPokemons(res.data.results));
  }, []);

  return (
    <div className="row">
      {pokemons.map(pokemon => (
        <PokemonListElement
          key={pokemon.url.split("pokemon/")[1].replace("/", "")}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </div>
  );
}

export default PokemonList;

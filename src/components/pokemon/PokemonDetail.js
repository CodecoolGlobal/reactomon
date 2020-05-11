import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { PokemonIdContext } from "../../context/PokemonIdContext";

function PokemonDetail(props) {
  const [pokemonInfo, setPokemonInfo] = useState("");
  const { pokemonId } = useContext(PokemonIdContext);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((json) => {
      setPokemonInfo(json.data);
    });
  }, [pokemonId]);
  return pokemonInfo ? (
    <div>{pokemonInfo.name}</div>
  ) : (
    <div>
      <h2>Loading details..</h2>
    </div>
  );
}

export default PokemonDetail;

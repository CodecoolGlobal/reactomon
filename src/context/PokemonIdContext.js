import React, { createContext, useState } from "react";

export const PokemonIdContext = createContext();

export function PokemonIdProvider(props) {
  const [pokemonId, setPokemonId] = useState();
  return (
    <PokemonIdContext.Provider value={{ pokemonId, setPokemonId }}>
      {props.children}
    </PokemonIdContext.Provider>
  );
}

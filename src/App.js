import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Dashboard from "./layout/Dashboard";
import TypesList from "./components/types/TypeList";
import { ThemeProvider } from "./context/ThemeContext";
import { PokemonIdProvider } from "./context/PokemonIdContext";
import PokemonDetail from "./components/pokemon/PokemonDetail";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <PokemonIdProvider>
              <Route path="/pokemons" component={Dashboard} />
              <Route path="/types" component={TypesList} />
              <Route path="/pokemon/:pokemonId" component={PokemonDetail} />
            </PokemonIdProvider>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React from "react";

import PokemonList from "../components/PokemonList";

function Dashboard(props) {
  return (
    <div className="row">
      <div className="col">
        <PokemonList />
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Dashboard from "./layout/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Route path="/pokemons" component={() => <Dashboard />} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

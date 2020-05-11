import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Dashboard from "./layout/Dashboard";
import TypesList from "./components/types/TypeList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Route path="/pokemons" component={() => <Dashboard />} />
          <Route path="/types" component={() => <TypesList />} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

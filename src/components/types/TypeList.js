import React, { useState, useEffect } from "react";
import axios from "axios";

import TypeListElement from "./TypeListElement";

function TypeList(props) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(res => setTypes(res.data.results));
  }, [props, props.url]);

  return (
    <div className="row">
      {types.map(type => (
        <TypeListElement key={type.name} name={type.name} />
      ))}
      ;
    </div>
  );
}

export default TypeList;

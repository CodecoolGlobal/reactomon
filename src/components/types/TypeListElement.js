import React, { useContext } from "react";

import styled from "styled-components";

import { ThemeContext } from "../../context/ThemeContext";

function TypeListElement(props) {
  const [value] = useContext(ThemeContext);

  const CardHeader = styled.div`
    font-weight: bold;
    background-color: red;
    color: white;
    background-color: ${value ? "red" : "black"};
  `;

  const Card = styled.div`
    font-weight: bold;
    color: ${value ? "black" : "white"};
    background-color: ${value ? "white" : "grey"};
    box-shadow: 0 1px 3px;
    transition: all 0.5s;
    &:hover {
      box-shadow: 0 7px 14px;
    }
  `;

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <Card className="card">
        <CardHeader className="card-header"></CardHeader>
        <div className="card-body mx-auto">
          <h6 className="card-title">{props.name}</h6>
        </div>
      </Card>
    </div>
  );
}

export default TypeListElement;

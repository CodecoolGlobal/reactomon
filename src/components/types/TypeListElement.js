import React from "react";

import styled from "styled-components";

function TypeListElement(props) {
  const CardHeader = styled.div`
    font-weight: bold;
    background-color: red;
    color: white;
    background-color: "red";
  `;

  const Card = styled.div`
    font-weight: bold;
    color: "black";
    background-color: "white";
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

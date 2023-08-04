import Figure from "./Figure";

import React from "react";

const Card = (props) => {
  const { data } = props;
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>{data.explanation}</p>
      <Figure data={data} />
    </div>
  );
};

export default Card;

import React from "react";

const Figure = (props) => {
  const { data } = props;
  return (
    <figure>
      <img className="image" src={data.hdurl} alt="NASA photo of the day" />
      <figcaption className="image_caption">Picture was captured on {data.date}</figcaption>
    </figure>
  );
};

export default Figure;

import React, { Component } from "react";
import cuteTaco from "../img/cute_taco.png";
import cuteBurrito from "../img/cute_burrito.png";

/*Component that represents each individual square on the board.*/
const Square = (props) => {
  const { id, onClick, isClicked } = props;
  console.log(id, onClick, isClicked);
  if (isClicked) {
    return (
      <img
        onClick={() => onClick(id)}
        src={cuteTaco}
        style={{ width: 100, height: 67 }}
      ></img>
    );
  }
  return <img onClick={() => onClick(id)}></img>;
};

export default Square;

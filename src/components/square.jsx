import React, { Component } from "react";
import cuteTaco from "../img/cute_taco.png";
import cuteBurrito from "../img/cute_burrito.png";

/* Component that represents each individual square on the board. */
const Square = (props) => {
  const { id, onClick, playerTurn } = props;
  console.log(id, onClick);

  /* Setting image source depening on whether player 1 or 2 is playing, or if 
  button has not been clicked before. */
  let imgSrc;

  if (playerTurn == null) {
    imgSrc = "";
  } else if (playerTurn) {
    imgSrc = cuteTaco;
  } else {
    imgSrc = cuteBurrito;
  }
  if (playerTurn != null) {
    return (
      <button
        className="square"
        onClick={() => onClick(id)}
        style={{ backgroundColor: "pink", width: 120, height: 120 }}
      >
        <img src={imgSrc} style={{ width: 100, height: 67 }}></img>
      </button>
    );
  }

  return (
    <button
      className="square"
      onClick={() => onClick(id)}
      style={{ backgroundColor: "pink", width: 120, height: 120 }}
    >
      <img></img>
    </button>
  );
};

export default Square;

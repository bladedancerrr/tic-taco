import React, { Component } from "react";
import cuteTaco from "../img/cute_taco.png";
import cuteBurrito from "../img/cute_burrito.png";
import { findRenderedComponentWithType } from "react-dom/test-utils";

/* Component that represents each individual square on the board. */
const Square = (props) => {
  const { id, onClick, playerTurn } = props;

  /* Setting image source depening on whether player 1 or 2 is playing, or if 
  button has not been clicked before. */
  let imgSrc;
  let bgdColor;

  if (playerTurn === 0) {
    imgSrc = "";
    bgdColor = "#EFF0F0";
  } else if (playerTurn === 1) {
    imgSrc = cuteTaco;
    bgdColor = "pink";
  } else {
    imgSrc = cuteBurrito;
    bgdColor = "#9CD7FE";
  }

  const squareStyle = {
    backgroundColor: bgdColor,
    borderColor: "black",
    width: 130,
    height: 130,
    verticalAlign: "top",
  };

  return (
    <button className="square" onClick={() => onClick(id)} style={squareStyle}>
      {renderImage(imgSrc, playerTurn)}
    </button>
  );
};

export default Square;

function renderImage(imgSrc, playerTurn) {
  return playerTurn === 0 ? (
    <img></img>
  ) : (
    <img src={imgSrc} style={{ width: 100, height: 67 }}></img>
  );
}

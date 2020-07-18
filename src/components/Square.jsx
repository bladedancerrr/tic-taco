import React from "react";
import cuteTaco from "../media/cute_taco.png";
import cuteBurrito from "../media/cute_burrito.png";

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
    borderWidth: "thin",
    height: 170,
    outline: "none",
    width: 170,
    verticalAlign: "top",
  };

  return (
    <button id="square_element" onClick={() => onClick(id)} style={squareStyle}>
      {renderImage(imgSrc, playerTurn)}
    </button>
  );
};

export default Square;

function renderImage(imgSrc, playerTurn) {
  /* If square has not been clicked, render nothing. Else render
  image of player icon. */
  return playerTurn === 0 ? null : (
    <img
      src={imgSrc}
      alt="This a cute Mexican snack :3"
      style={{ width: 120, height: 80 }}
    ></img>
  );
}

import React, { Component } from "react";
import cuteTaco from "../img/cute_taco.png";
import cuteBurrito from "../img/cute_burrito.png";

/*Component that represents each individual square on the board.*/
const Square = (props) => {
  return <img src={cuteTaco} style={{ width: 100, height: 67 }}></img>;
};

export default Square;

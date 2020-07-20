import React from "react";
import cuteTaco from "../media/cute_taco.png";
import cuteBurrito from "../media/cute_burrito.png";
import "./sharedStyles.css";
import "./ScoreBoard.css";

const ScoreBoard = (props) => {
  return (
    <div className="col">
      <img
        src={props.player === "cuteTaco" ? cuteTaco : cuteBurrito}
        alt=""
        className="BannerImage"
      />
      <div className="Number">{props.winCount}</div>
    </div>
  );
};

export default ScoreBoard;

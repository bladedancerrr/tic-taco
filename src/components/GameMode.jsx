import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import AnimeWOW from "../media/anime-wow-sound-effect.mp3";

const GameMode = () => {
  return (
    <div id="game_mode_container" style={{ marginTop: 200 }}>
      <h1>Which game mode do you want to play?</h1>
      <div style={{ marginTop: 50 }}>
        <button
          style={{ marginRight: 50, width: 100, height: 70 }}
          onClick={renderGrid}
          id="AI"
        >
          {" "}
          AI{" "}
        </button>
        <button
          style={{ marginLeft: 50, width: 100, height: 70 }}
          onClick={renderGrid}
          id="Human"
        >
          {" "}
          Human{" "}
        </button>
      </div>
    </div>
  );
};

function renderGrid(event) {
  let animeWow = new Audio(AnimeWOW);
  animeWow.volume = 0.2;
  animeWow.play();

  const option = event.target.getAttribute("id");
  console.log("User selected ", option);
  ReactDOM.render(
    <Board option={option} />,
    document.getElementById("main_container")
  );
}

function playEffect() {
  const animeWow = new Audio("../media/anime-wow-sound-effect.mp3");
  animeWow.play();
}

export default GameMode;

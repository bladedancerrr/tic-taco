import React from "react";
import "./App.css";
import Board from "./components/Board";
import GameMode from "./components/GameMode";

function App() {
  return (
    <div id ="container" className="container">
      <nav>
        <div className="header">
          Welcome to tic taco! <br></br> It's tic tac toe, but kawaii UwU
        </div>
      </nav>
      <main id="main_container">
        <GameMode />
      </main>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import GameMode from "./components/GameMode";

function App() {
  return (
    <div id="container" className="window">
      <nav>
        <div className="header">Tic Taco</div>
        <div className="subheader">It's Tic Tac Toe, but Kawaii UwU</div>
      </nav>
      <main id="main_container">
        <GameMode />
      </main>
    </div>
  );
}

export default App;

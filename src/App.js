import React from "react";
import "./App.css";
import GameMode from "./components/GameMode";
import cuteTaco from "./media/cute_taco.png";
import cuteBurrito from "./media/cute_burrito.png";

function App() {
  return (
    <div id="container" className="window">
      <nav>
        <div className="header">
        <img
          src={cuteTaco}
          alt="This a cute Mexican snack :3"
          style={{ width: 120, height: 80, marginBottom: 50, marginRight: 10 }}
          ></img>
           Tic-Taco
           <img
      src={cuteBurrito}
      alt="This a cute Mexican snack :3"
      style={{ width: 120, height: 80, marginBottom: 50, marginLeft: 10 }}
    ></img></div>
           
        {/* <div className="subheader">It's Tic-Tac-Toe, but cuter</div> */}
      </nav>
      <main id="main_container">
        <GameMode />
      </main>
    </div>
  );
}

export default App;

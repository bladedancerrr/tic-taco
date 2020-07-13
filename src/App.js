import React from "react";
import "./App.css";
import Board from "./components/board";

function App() {
  return (
    <div className="container">
      <nav>
        <h3 className = "header">
          Welcome to tic taco! <br></br> It's tic tac toe, but kawaii UwU
        </h3>
      </nav>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;

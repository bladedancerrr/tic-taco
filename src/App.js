import React from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="container">
      <nav>
        <div className="header">
          Welcome to tic taco! <br></br> It's tic tac toe, but kawaii UwU
        </div>
      </nav>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;

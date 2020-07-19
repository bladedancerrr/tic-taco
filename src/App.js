import React from "react";
import "./App.css";
import GameMode from "./components/GameMode";
import TopBanner from "./components/TopBanner";

function App() {
  return (
    <div id="container" className="window">
      <nav>
        <TopBanner />
      </nav>
      <main id="main_container">
        <GameMode />
      </main>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import GameMode from "./components/GameMode";
import TopBanner from "./components/TopBanner";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";

class App extends Component {
  state = { gameMode: null };
  render() {
    return (
      <div id="container" className="window">
        <nav>
          <TopBanner />
        </nav>
        <main id="main_container">{this.renderContainer()}</main>
      </div>
    );
  }

  renderContainer() {
    const { gameMode } = this.state;
    if (gameMode === null)
      return <GameMode selectGameMode={this.selectGameMode} />;
    else {
      const option = this.state.gameMode === "AI" ? "AI" : "Human";
      return (
        <div className="row align-items-center">
          <ScoreBoard player="cuteTaco" />
          <Board option={option} />
          <ScoreBoard player="cuteBurrito" />
        </div>
      );
    }
  }

  selectGameMode = (gameMode) => {
    this.setState({ gameMode });
  };
}

export default App;

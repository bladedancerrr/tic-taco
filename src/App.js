import React, { Component } from "react";
import "./App.css";
import GameMode from "./components/GameMode";
import TopBanner from "./components/TopBanner";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";

class App extends Component {
  state = { gameMode: null, tacoWin: 0, burritoWin: 0 };
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

  renderContainer = () => {
    const { gameMode } = this.state;
    if (gameMode === null)
      return <GameMode selectGameMode={this.selectGameMode} />;
    else {
      const option = this.state.gameMode === "AI" ? "AI" : "Human";
      return (
        <div className="row align-items-center">
          <ScoreBoard player="cuteTaco" winCount={this.state.tacoWin} />
          <Board option={option} onGameEnd={this.handleGameResult} />
          <ScoreBoard player="cuteBurrito" winCount={this.state.burritoWin} />
        </div>
      );
    }
  };

  selectGameMode = (gameMode) => {
    this.setState({ gameMode });
  };

  handleGameResult = (result) => {
    if (result === "-") return;

    if (result === "tacoWin") {
      this.setState({ tacoWin: this.state.tacoWin + 1 });
    } else {
      this.setState({ burritoWin: this.state.burritoWin + 1 });
    }
  };
}

export default App;

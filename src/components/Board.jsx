import React, { Component } from "react";
import Square from "./Square";
import { renderModal } from "./EndgamePopup";
import { getWinner } from "./WinCheck";
import axios from "axios";
import { sleep } from "./utils";
import "./Board.css";
/* Component that represents the tic-tac-toe board made up of squares. */

class Board extends Component {
  state = {
    /* Which player is playing. 1 is player 1, 2 is player 2. */
    playerTurn: 1,
    /* Which player occupies which part of the board. */
    clickState: new Array(3 * 3).fill(0),
    winner: 0,
    /* Current turn number of game from 0 - 9. */
    turn: 0,
    /* Whether player is playing against AI or another human. */
    gameMode: this.props.option,
    networkFailure: false,
  };

  /* Resetting grid to be empty. */
  onReset = () => {
    const clickState = new Array(3 * 3).fill(0);
    this.setState({
      clickState: clickState,
      playerTurn: 1,
      winner: 0,
      turn: 0,
      networkFailure: false,
    });
  };

  render() {
    return (
      /* Rendering 3x3 grid. */
      <div id="board_container" style={{ marginTop: 30 }}>
        <div
          style={{
            fontFamily: "Carter One",
            fontSize: 30,
            marginBottom: 30,
            whiteSpace: "pre-wrap",
          }}
        >
          {this.renderAIText()}
        </div>

        <div>
          <div>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>

        <button className="ResetButton" onClick={this.onReset}>
          Start over!
        </button>
        {renderModal(this.state.winner, this.state.turn, this.onReset)}
      </div>
    );
  }

  /* Renders the square in grid. */
  renderSquare = (squareId) => {
    return (
      <Square
        id={squareId}
        onClick={() => this.handleClick(squareId)}
        playerTurn={this.state.clickState[squareId]}
      />
    );
  };

  renderAIText = () => {
    if (this.state.networkFailure)
      return "Baby burrito is offline :( \n Play against a human bean instead!";
    var text = "";

    if (this.state.gameMode === "AI") {
      text = "Your turn!";
      if (this.state.playerTurn === 2) {
        text = "Baby Burrito is thinking... ";
      }
    } else {
      text = "Adorable Taco's turn!";
      if (this.state.playerTurn === 2) {
        text = "Baby Burrito's turn!";
      }
    }

    return text;
  };

  handleClick(squareId) {
    /* If the button is clicked, its value is set to playerTurn, signifying 
    which player played it. */
    const clickState = [...this.state.clickState];

    /* If the button has not been clicked before, then change clickState and update 
    playerTurn and turn. */
    const notClickedBefore = clickState[squareId] === 0;
    if (notClickedBefore) {
      this.updateSquare(squareId, clickState);
    }
  }

  updateSquare = (squareId, clickState) => {
    // renders a square according to AI move
    const playerTurn = this.state.playerTurn;

    clickState[squareId] = playerTurn;
    const nextTurn = this.state.turn + 1;

    this.setState(
      {
        clickState: clickState,
        playerTurn: playerTurn === 1 ? 2 : 1,
        turn: nextTurn,
      },
      /* Since setState is async, perform winCheck callback after state update */
      /* Once a burrito has been placed, check if there is a winner */
      () => this.gameShouldEnd(squareId)
    );
  };

  componentDidUpdate = async () => {
    const gameModeisAI = this.state.gameMode === "AI";

    if (this.state.playerTurn === 2 && gameModeisAI && this.state.turn < 9) {
      await this.getAIMove();
    }
  };

  getAIMove = async () => {
    /* If the player is playing against an AI, send the clickState to backend for analysis */
    await sleep(2000);
    try {
      await axios
        .post("http://localhost:5000/ai-move", {
          clickState: this.state.clickState,
        })
        .then((Response) => this.handleClick(parseInt(Response["data"])));
    } catch (e) {
      this.setState({ networkFailure: true });
    }
    return Response["data"];
  };

  gameShouldEnd = (squareId) => {
    const winner = getWinner(this.state.clickState, squareId);
    if (winner !== 0) {
      this.setState({ winner: winner }, () =>
        // Update the scoreboard
        this.updateScoreBoard()
      );
    }
  };

  updateScoreBoard = () => {
    console.log(this.state.turn);
    // Don't care if there is no winner
    var result = "-";

    if (this.state.winner === 1) result = "tacoWin";

    if (this.state.winner === 2) result = "burritoWin";
    console.log(result);
    this.props.onGameEnd(result);
  };
}

export default Board;

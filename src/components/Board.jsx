import React, { Component } from "react";
import Square from "./Square";
import { renderModal } from "./EndgamePopup";
import { getWinner } from "./WinCheck";
import axios from "axios";

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
  };

  /* Resetting grid to be empty. */
  onReset = () => {
    const clickState = new Array(3 * 3).fill(0);
    this.setState({
      clickState: clickState,
      playerTurn: 1,
      winner: 0,
      turn: 0,
    });
  };

  render() {
    return (
      /* Rendering 3x3 grid with buttons enabled. */
      <div id="board_container" style={{ marginTop: 200 }}>
        {this.renderGrid(false)}
        <button
          onClick={this.onReset}
          style={{
            width: 135,
            height: 45,
            textAlign: "center",
            marginTop: 30,
            borderRadius: 30,
            outline: "none",
            border: "none",
            backgroundColor: "#90EE90",
            borderColor: "#90EE90",
            fontFamily: "Avantgarde",
          }}
        >
          Start over!
        </button>
        {renderModal(this.state.winner, this.state.turn, this.onReset)}
      </div>
    );
  }

  renderGrid = (isDisabled) => {
    return (
      <div id="grid">
        <div>
          {this.renderSquare(0, isDisabled)}
          {this.renderSquare(1, isDisabled)}
          {this.renderSquare(2, isDisabled)}
        </div>
        <div>
          {this.renderSquare(3, isDisabled)}
          {this.renderSquare(4, isDisabled)}
          {this.renderSquare(5, isDisabled)}
        </div>
        <div>
          {this.renderSquare(6, isDisabled)}
          {this.renderSquare(7, isDisabled)}
          {this.renderSquare(8, isDisabled)}
        </div>
      </div>
    );
  };

  /* Renders the square in grid. */
  renderSquare = (squareId, isDisabled) => {
    return (
      <Square
        id={squareId}
        onClick={() => this.handleClick(squareId)}
        playerTurn={this.state.clickState[squareId]}
        disabled={isDisabled}
      />
    );
  };

  handleClick = (squareId) => {
    /* If the button is clicked, its value is set to playerTurn, signifying 
    which player played it. */
    const clickState = [...this.state.clickState];

    /* If the button has not been clicked before, then change clickState and update 
    playerTurn and turn. */
    const notClickedBefore = clickState[squareId] === 0;
    if (notClickedBefore) {
      this.updateSquare(squareId, clickState);
    }
  };

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

  componentDidUpdate = async (prevProps) => {
    const gameModeisAI = this.state.gameMode === "AI";

    if (this.state.playerTurn === 2 && gameModeisAI && this.state.turn < 9) {
      document.querySelector("button").setAttribute("disabled", true);
      await this.getAIMove();
    }
  };

  getAIMove = async () => {
    /* If the player is playing against an AI, send the clickState to backend for analysis */
    try {
      await axios
        .post("http://localhost:5000/", { clickState: this.state.clickState })
        .then((Response) => this.handleClick(Response["data"]));
    } catch (e) {
      console.error(e);
    }
    return Response["data"];
  };

  gameShouldEnd = (squareId) => {
    const winner = getWinner(this.state.clickState, squareId);
    if (winner !== 0) {
      this.setState({ winner: winner });
    }
  };
}

export default Board;

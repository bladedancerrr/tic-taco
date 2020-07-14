import React, { Component } from "react";
import Square from "./Square";
import EndgamePopup from "./EndgamePopup";
import { getWinner } from "./WinCheck";
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
      /* Rendering 3x3 grid. */
      <div className="container">
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

        <button
          onClick={this.onReset}
          // className="btn btn-primary btn-sm"
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
        {this.renderModal()}
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

  renderModal = () => {
    /*Rendering modal when game is a draw or one of the players won.*/
    const won = this.state.winner !== 0;
    const draw = this.state.turn === 9;

    // let message = "";
    // if (won) message = `Player ${this.state.winner} won!`;
    // else if (draw) message = `It's a draw!`;

    return (
      <EndgamePopup
        // show={won || draw}
        won={won}
        draw={draw}
        winner={this.state.winner}
        onHide={this.onReset}
        // message={message}
      />
    );
  };

  handleClick(squareId) {
    /* If the button is clicked, its value is set to playerTurn, signifying 
    which player played it. */
    const clickState = [...this.state.clickState];
    const playerTurn = this.state.playerTurn;

    /* If the button has not been clicked before, then change clickState and update 
    playerTurn and turn. */
    const notClickedBefore = clickState[squareId] === 0;
    if (notClickedBefore) {
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
    }
  }

  gameShouldEnd = (squareId) => {
    const winner = getWinner(this.state.clickState, squareId);
    if (winner !== 0) {
      this.setState({ winner: winner });
    }
  };
}

export default Board;

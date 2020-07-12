import React, { Component } from "react";
import Square from "./square";
import _ from "lodash";

/* Component that represents the tic-tac-toe board made up of squares. */

class Board extends Component {
  state = {
    /* Which player is playing. 1 is player 1, 2 is player 2. */
    playerTurn: 1,
    squares: _.range(3 * 3),
    /* Which player occupies which part of the board. */
    clickState: new Array(3 * 3).fill(0),
  };

  constructor(props) {
    super(props);

    this.onReset = this.onReset.bind(this);
  }

  handleClick(squareId) {
    /* If the button is clicked, it's value is set to playerTurn, signifying 
    which player played it. */
    const clickState = [...this.state.clickState];
    const playerTurn = this.state.playerTurn;
    /* If the button has not been clicked before, then change clickState. */
    if (clickState[squareId] === 0) {
      clickState[squareId] = playerTurn;
      this.setState({
        clickState: clickState,
        playerTurn: playerTurn === 1 ? 2 : 1,
      });
      /* Once a burrito has been placed, check if there is a winner */
      // this.getWinner(squareId);
    }
  }

  onReset() {
    const clickState = new Array(3 * 3).fill(0);
    this.setState({ clickState: clickState, playerTurn: 1 });
  }

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
          className="btn btn-primary btn-sm"
          style={{ width: 100, height: 40, textAlign: "center", marginTop: 30 }}
        >
          Start over!
        </button>
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
}

export default Board;

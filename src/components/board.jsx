import React, { Component } from "react";
import Square from "./square";
import _ from "lodash";

/* Component that represents the tic-tac-toe board made up of squares. */

class Board extends Component {
  state = {
    /* Which player is playing. false is player 1, true is player 2. */
    playerTurn: false,
    squares: _.range(3 * 3),
    /* Which player occupies which part of the board. */
    clickState: new Array(3 * 3).fill(null),
  };

  constructor(props) {
    super(props);

    this.onReset = this.onReset.bind(this);
  }

  handleClick(squareId) {
    /* If the button is clicked, it's value is set to playerTurn, signifying 
    which player played it. */
    console.log(`square {squareId} is clicked`);
    const clickState = [...this.state.clickState];
    const playerTurn = this.state.playerTurn;
    /* If the button has not been clicked before, then change clickState. */
    if (clickState[squareId] == null) {
      clickState[squareId] = playerTurn;
      this.setState({ clickState: clickState, playerTurn: !playerTurn });
    }
  }

  onReset() {
    const clickState = new Array(3 * 3).fill(null);
    console.log(clickState);
    this.setState({ clickState: clickState, playerTurn: false });
  }

  render() {
    console.log(this.state.squares);
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
        <button onClick={this.onReset} className="btn btn-primary btn-sm m-2">
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

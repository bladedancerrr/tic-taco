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
      </div>
    );
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

  /* Renders the square in grid. */
  renderSquare = (squareId) => {
    return (
      <Square
        id={squareId}
        onClick={() => this.handleClick(squareId)}
        playerTurn={this.state.clickState[squareId]}
        style={{
          borderStyle: "solid",
          borderWidth: 50,
          borderColor: "black",
        }}
      />
    );
  };
}

export default Board;

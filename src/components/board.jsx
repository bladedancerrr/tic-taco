/*Component that represents the tic-tac-toe board made up of squares.*/

import React, { Component } from "react";
import Square from "./square";
import _ from "lodash";

class Board extends Component {
  state = {
    size: 3,
    playerTurn: 1,
    squares: _.chunk(_.range(3 * 3), 3),
    clickState: new Array(3 * 3).fill(false),
  };

  render() {
    console.log(this.state.squares);

    return (
      <div className="container">
        {this.state.squares.map((row) => this.createRow(row))}
      </div>
    );
  }

  handleClick(squareId) {
    console.log(`square {squareId} is clicked`);
    const clickState = [...this.state.clickState];
    if (!clickState[squareId]) clickState[squareId] = true;
    this.setState({ clickState: clickState });
  }

  createRow = (row) => {
    return (
      <div
        className="row"
        key={row}
        style={{
          borderStyle: "solid",
          borderWidth: 5,
          borderColor: "black",
        }}
      >
        {row.map((squareId) => this.createSquare(squareId))}
      </div>
    );
  };

  createSquare = (squareId) => {
    return (
      <div className="col m-4 my-square" key={squareId}>
        <Square
          id={squareId}
          onClick={() => this.handleClick(squareId)}
          isClicked={this.state.clickState[squareId]}
        />
      </div>
    );
  };
}

export default Board;

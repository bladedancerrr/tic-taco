import React, { Component } from "react";
import Square from "./square";
import EndgamePopup from "./modal";
/* Component that represents the tic-tac-toe board made up of squares. */

class Board extends Component {
  state = {
    /* Which player is playing. 1 is player 1, 2 is player 2. */
    playerTurn: 1,
    /* Which player occupies which part of the board. */
    clickState: new Array(3 * 3).fill(0),
    winner: 0,
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
      this.setState(
        {
          clickState: clickState,
          playerTurn: playerTurn === 1 ? 2 : 1,
        },
        /* Since setState is async, perform winCheck callback after state update */
        /* Once a burrito has been placed, check if there is a winner */
        () => this.gameShouldEnd(squareId)
      );
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
          style={{
            width: 100,
            height: 40,
            textAlign: "center",
            marginTop: 30,
            borderRadius: 35,
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

  gameShouldEnd(squareId) {
    const winner = this.getWinner(squareId);
    if (winner !== 0) {
      this.setState({ winner: winner });
    }
  }

  getWinner = (squareId) => {
    const winner = this.checkForWinner(squareId);
    if (winner !== 0) {
      console.log(
        `This winnnerrr is ${winner === 1 ? "player 1" : "player 2"}`
      );
    }
    return winner;
  };

  checkForWinner = (squareId) => {
    /* Check for the three horizontal squares and vertical squares to see if they all have the same value (1 / 2) */
    // console.log(this.state.clickState);
    if (this.state.clickState[squareId] === 0) {
      console.error(`Square ${squareId} is meant to be selected!`);
      return 0;
    }

    const played = this.state.clickState[squareId];
    /* Get the row and column the square is in */
    const row = Math.floor(squareId / 3);
    const col = squareId - row * 3;

    return this.checkRow(row, played) ||
      this.checkCol(col, played) ||
      this.checkDiags(played)
      ? played
      : 0;
  };

  checkRow(row, player) {
    const start = row * 3;
    for (let i = 0; i < 3; i++) {
      if (this.state.clickState[start + i] !== player) return false;
    }

    return true;
  }

  checkCol(col, player) {
    for (let i = 0; i < 3; i++) {
      if (this.state.clickState[col + i * 3] !== player) return false;
    }

    return true;
  }

  checkDiags(player) {
    const diag1 = [0, 4, 8];
    const diag2 = [2, 4, 6];

    return this.checkDiag(diag1, player) || this.checkDiag(diag2, player);
  }

  checkDiag(diag, player) {
    for (let i = 0; i < diag.length; i++) {
      let square = diag[i];
      if (this.state.clickState[square] !== player) return false;
    }
    return true;
  }

  renderModal = () => {
    const shouldShow = this.state.winner === 0 ? false : true;
    console.log(shouldShow);
    return <EndgamePopup show={shouldShow} />;
  };
}

export default Board;

// function LaunchModal(shouldShow) {
//   const [modalShow, setModalShow] = React.useState(shouldShow);
//   return (
//     <MyVerticallyCenteredModal
//       show={modalShow}
//       onHide={() => setModalShow(false)}
//     />
//   );
// }

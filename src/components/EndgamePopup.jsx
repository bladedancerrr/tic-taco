import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function EndgamePopup(props) {
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter">Game Over</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.message}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Play again!</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function renderModal(winner, turn) {
  const won = winner === 0 ? false : true;
  const drew = turn === 9 ? true : false;

  let message = "";
  if (won) message = `Player ${this.state.winner} won!`;
  else if (drew) message = `It's a draw!`;

  return (
    <EndgamePopup
      show={won || drew}
      winner={this.state.winner}
      onHide={this.onReset}
      message={message}
    />
  );
}

export default EndgamePopup;

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import cuteTaco from "../img/cute_taco.png";
import cuteBurrito from "../img/cute_burrito.png";

function EndgamePopup(props) {
  const { won, draw, winner, onHide } = props;
  const show = won || draw;
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Game over! </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ textAlign: "center" }}>
          {renderMessage(won, draw, winner)}
        </h4>
        <div style={{ textAlign: "center" }}> {renderImage(winner, draw)}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Play again :3</Button>
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

/* Rendering icon of winning player in modal. */
function renderImage(winner, draw) {
  if (!draw) {
    let imgSrc = "";
    imgSrc = winner === 1 ? cuteTaco : cuteBurrito;
    return (
      <img
        src={imgSrc}
        alt="This a cute Mexican snack :3"
        style={{ width: 200, height: 140, marginBottom: 20, marginTop: 40 }}
      ></img>
    );
  } else {
    return null;
  }
}

function renderMessage(won, draw, winner) {
  let message = "";
  if (won) {
    message = winner === 1 ? `Adorable taco won!` : `Baby burrito won!`;
  } else if (draw) {
    message = `It's a draw!`;
  }
  return message;
}

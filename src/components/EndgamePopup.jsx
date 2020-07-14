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
        style={{ width: 100, height: 67 }}
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

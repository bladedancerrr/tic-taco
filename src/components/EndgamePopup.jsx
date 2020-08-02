import React from "react";
import Modal from "react-bootstrap/Modal";
import cuteTaco from "../media/cute_taco.png";
import cuteBurrito from "../media/cute_burrito.png";
import "./EndgamePopup.css";

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
        <Modal.Title
          style={{ textAlign: "center" }}
          id="contained-modal-title-vcenter"
        >
          <h4
            style={{
              fontSize: 30,
              fontFamily: "Carter One",
              textAlign: "center",
            }}
          >
            Game over!{" "}
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ fontFamily: "Carter One", textAlign: "center" }}>
          {renderMessage(won, draw, winner)}
        </h4>
        <div style={{ textAlign: "center" }}> {renderImage(winner, draw)}</div>
      </Modal.Body>
      <Modal.Footer>
        <button className="PlayAgainButton" onClick={onHide}>
          Play again :3
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export function renderModal(winner, turn, onReset) {
  const won = winner !== 0;
  const draw = turn === 9 && !winner;

  return (
    <EndgamePopup won={won} draw={draw} winner={winner} onHide={onReset} />
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
        className="MexicanSnack"
        src={imgSrc}
        alt="This a cute Mexican snack :3"
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

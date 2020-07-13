import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class EndgamePopup extends Component {
  state = {};
  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Game Over
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{`Player ${this.props.winner} won!`}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Play again!</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EndgamePopup;

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default MyVerticallyCenteredModal;

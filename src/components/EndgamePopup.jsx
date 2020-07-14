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
        <h4>{`Player ${props.winner} won!`}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Play again!</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EndgamePopup;

// class EndgamePopup extends Component {
//   state = { shouldShow: true };
//   render() {
//     console.log(this.state.shouldShow);
//     return (
//       <Modal show={this.state.shouldShow && this.props.show}>
//         {/* //   <Modal show={true}> */}
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Game Over
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>{`Player ${this.props.winner} won!`}</h4>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={() => this.setState({ shouldShow: false })}>
//             Play again!
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
// }

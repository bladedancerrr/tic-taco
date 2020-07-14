/* Fuctionality to check if a player has won the game. */

export function getWinner(clickState, squareId) {
  return checkForWinner(clickState, squareId);
}

function checkForWinner(clickState, squareId) {
  /* Check for the three horizontal squares and vertical squares to see if they all have the same value (1 / 2) */
  if (clickState[squareId] === 0) {
    console.error(`Square ${squareId} is meant to be selected!`);
    return 0;
  }

  const played = clickState[squareId];
  /* Get the row and column the square is in */
  const row = Math.floor(squareId / 3);
  const col = squareId - row * 3;

  return checkRow(clickState, row, played) ||
    checkCol(clickState, col, played) ||
    checkDiags(clickState, played)
    ? played
    : 0;
}

function checkRow(clickState, row, player) {
  const start = row * 3;
  for (let i = 0; i < 3; i++) {
    if (clickState[start + i] !== player) return false;
  }

  return true;
}

function checkCol(clickState, col, player) {
  for (let i = 0; i < 3; i++) {
    if (clickState[col + i * 3] !== player) return false;
  }

  return true;
}

function checkDiags(clickState, player) {
  const diag1 = [0, 4, 8];
  const diag2 = [2, 4, 6];

  return (
    checkDiag(clickState, diag1, player) || checkDiag(clickState, diag2, player)
  );
}

function checkDiag(clickState, diag, player) {
  for (let i = 0; i < diag.length; i++) {
    let square = diag[i];
    if (clickState[square] !== player) return false;
  }
  return true;
}

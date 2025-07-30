const cells = document.querySelectorAll('[data-cell]');
const winnerText = document.getElementById('winner');
const restartBtn = document.getElementById('restartBtn');
let isXTurn = true;

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

function startGame() {
  cells.forEach(cell => {
    cell.classList.remove('X', 'O');
    cell.textContent = '';
    cell.addEventListener('click', handleClick, { once: true });
  });
  winnerText.textContent = '';
  isXTurn = true;
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = isXTurn ? 'X' : 'O';
  cell.textContent = currentClass;
  cell.classList.add(currentClass);

  if (checkWin(currentClass)) {
    winnerText.textContent = `${currentClass} Wins!`;
    endGame();
  } else if (isDraw()) {
    winnerText.textContent = "It's a Draw!";
  } else {
    isXTurn = !isXTurn;
  }
}

function checkWin(currentClass) {
  return WINNING_COMBOS.some(combo => {
    return combo.every(index => cells[index].classList.contains(currentClass));
  });
}

function isDraw() {
  return [...cells].every(cell => cell.classList.contains('X') || cell.classList.contains('O'));
}

function endGame() {
  cells.forEach(cell => cell.removeEventListener('click', handleClick));
}

restartBtn.addEventListener('click', startGame);

// Start on load
startGame();

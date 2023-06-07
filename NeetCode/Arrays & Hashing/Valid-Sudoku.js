// https://leetcode.com/problems/valid-sudoku/

// ! My approach

function answer(board = []) {
  for (let r = 0; r < board.length; r++) {
    const rowTracker = {};
    for (let c = 0; c < board[r].length; c++) {
      if (rowTracker[board[r][c]] !== undefined) return false;
      if (boardData[r][c] != ".") {
        boardData[rflag + cflag][board[r][c]] = boardData[r][c];
        rowTracker[board[r][c]] = boardData[r][c];
      }
    }
  }
  for (let r = 0; r < board.length; r++) {
    const colTracker = {};
    for (let c = 0; c < board[r].length; c++) {
      if (colTracker[board[r][c]] !== undefined) return false;
      if (board[r][c] != ".") {
        colTracker[board[r][c]] = board[r][c];
      }
    }
  }
}

console.log(
  answer([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

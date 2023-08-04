// ! https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function (board = []) {
  for (let r = 0; r < 9; r++) {
    const obj = {};
    for (let c = 0; c < 9; c++) {
      if (!isNaN(+obj[board[r][c]])) {
        if (obj[board[r][c]] === undefined) {
          obj[board[r][c]] = 1;
        } else {
          console.log(obj);
          return false;
        }
      }
    }
  }
  for (let c = 0; c < 9; c++) {
    const obj = {};
    for (let r = 0; r < 9; r++) {
      if (!isNaN(+obj[board[r][c]])) {
        if (obj[board[r][c]] === undefined) {
          obj[board[r][c]] = 1;
        } else {
          console.log(obj);
          console.log(board[r][c]);
          return false;
        }
      }
    }
  }
  const subSuduku = [
    // Col-1
    [0, 3, 0, 3],
    [3, 6, 0, 3],
    [6, 9, 0, 3],
    // Col-3
    [0, 3, 3, 6],
    [3, 6, 3, 6],
    [6, 9, 3, 6],
    // Col-3
    [0, 3, 6, 9],
    [3, 6, 6, 9],
    [6, 9, 6, 9],
  ];
  for (let i = 0; i < subSuduku.length; i++) {
    const isValid = isValidSubSudoku(...subSuduku[i]);
    console.log(isValid);
    if (isValid === false) return false;
  }
  return true;
};

function isValidSubSudoku(rStart, rEnd, cStart, cEnd, board = []) {
  const obj = {};
  for (let r = rStart; r < rEnd; r++) {
    for (c = cStart; c < cEnd; c++) {
      if (obj[board[r][c]] !== ".") {
        if (obj[board[r][c]] === undefined) {
          obj[board[r][c]] = 1;
        } else {
          console.log(obj);
          console.log(board[r][c]);
          return false;
        }
      }
    }
  }
  return true;
}

console.log(
  isValidSudoku([
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

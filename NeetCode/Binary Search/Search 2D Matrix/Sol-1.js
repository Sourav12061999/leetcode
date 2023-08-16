// ! https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = function (matrix, target) {
  let rowLen = matrix[0].length;
  let start = 0;
  let end = rowLen * matrix.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let currMid = rowCol(mid, rowLen);
    if (matrix[currMid[0]][currMid[1]] === target) return true;
    if (matrix[currMid[0]][currMid[1]] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};

function rowCol(val, rowLen) {
  return [Math.floor(val / rowLen), val % rowLen];
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

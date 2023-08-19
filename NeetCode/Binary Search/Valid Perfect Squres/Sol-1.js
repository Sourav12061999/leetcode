//! https://leetcode.com/problems/valid-perfect-square/
var isPerfectSquare = function (num = 0) {
  let left = 0;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midSQ = mid ** 2;
    if (midSQ === num) return true;
    if (midSQ > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

console.log(isPerfectSquare(14));

// ! https://leetcode.com/problems/arranging-coins/
// ? O(1) solution
var arrangeCoins = function (n) {
  return (-1 + (1 + 8 * n) ** (1 / 2)) / 2;
};

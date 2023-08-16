// ! https://leetcode.com/problems/koko-eating-bananas/
var minEatingSpeed = function (piles = [], h) {
  let left = 1;
  let right = Math.max(...piles);
  let min = Infinity;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isValid(piles, h, mid) === true) {
      min = Math.min(min, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return min;
};

function isValid(piles = [], h, eatingCap) {
  for (let i = 0; i < piles.length; i++) {
    h -= Math.ceil(piles[i] / eatingCap);
  }
  return h >= 0;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));

// ! https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

var successfulPairs = function (spells = [], potions = [], success = 0) {
  let ans = [];
  potions.sort((a, b) => a - b);
  for (let i = 0; i < spells.length; i++) {
    let left = 0;
    let right = potions.length - 1;
    let mid;
    let validMid = null;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (potions[mid] * spells[i] >= success) {
        validMid = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (validMid !== null) {
      ans.push(potions.length - validMid);
    } else {
      ans.push(0);
    }
  }

  return ans;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));

// ! https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function (nums = []) {
  let left = 0;
  let right = nums.length - 1;
  let ans = [];

  while (left <= right) {
    let leftSQ = nums[left] ** 2;
    let rightSQ = nums[right] ** 2;
    if (leftSQ > rightSQ) {
      ans.push(leftSQ);
      left++;
    } else if (leftSQ < rightSQ) {
      ans.push(rightSQ);
      right--;
    } else {
      if (left === right) {
        ans.push(leftSQ);
        left++;
      } else {
        ans.push(leftSQ);
        ans.push(rightSQ);
        left++;
        right--;
      }
    }
  }
  return ans.reverse();
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

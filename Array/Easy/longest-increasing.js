// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

var findLengthOfLCIS = function (nums) {
  if (nums.length == 0) {
    return 0;
  }
  var count = 1;
  var max = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 1;
    }
  }
  return max;
};
console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]));

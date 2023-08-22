// ! https://leetcode.com/contest/biweekly-contest-111/problems/count-pairs-whose-sum-is-less-than-target/

var countPairs = function (nums = [], target = 0) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        count++;
      }
    }
  }
  return count;
};
console.log(countPairs([-1, 1, 2, 3, 1], 2));

// ! https://leetcode.com/problems/longest-consecutive-sequence/

var longestConsecutive = function (nums = []) {
  const map = new Map();
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], null);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i] - 1)) {
      let length = 0;
      while (map.has(length + nums[i])) {
        length++;
      }
      max = Math.max(length, max);
    }
  }
  return max;
};
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

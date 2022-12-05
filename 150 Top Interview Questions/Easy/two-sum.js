// https://leetcode.com/problems/two-sum/

var twoSum = function (nums = [], target = 0) {
  nums = nums.map((el, index) => ({
    number: el,
    index,
  }));
  nums.sort((a, b) => a.number - b.number);
  console.log(nums);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left].number + nums[right].number;

    if (sum === target) return [nums[left].index, nums[right].index];

    if (sum > target) right--;
    else if (sum < target) left++;
  }
};

console.log(twoSum([3, 2, 4], 6));

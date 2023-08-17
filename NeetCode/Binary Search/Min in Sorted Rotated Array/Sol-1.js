// ! https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function (nums = []) {
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[left] < nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    min = Math.min(min, nums[mid]);
  }

  return Math.min(min, nums[left]);
};

console.log(findMin([3, 4, 5, 1, 2]));

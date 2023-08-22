// ! https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function (nums = []) {
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    min = Math.min(min, nums[mid]);
    min = Math.min(min, nums[left]);
    min = Math.min(min, nums[right]);
    console.log({
      left,
      right,
      mid,
      min,
    });
    if (nums[left] >= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return min;
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

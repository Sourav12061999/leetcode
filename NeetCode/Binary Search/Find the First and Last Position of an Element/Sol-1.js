// ! https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function (nums = [], target = 0) {
  // Finding the start
  let start = -1;
  let left1 = 0;
  let right1 = nums.length - 1;
  while (left1 <= right1) {
    let mid = Math.floor((left1 + right1) / 2);

    if (nums[mid] === target) {
      start = start === -1 ? mid : Math.min(start, mid);
      right1 = mid - 1;
    } else if (nums[mid] > target) {
      right1 = mid - 1;
    } else {
      left1 = mid + 1;
    }
  }
  if (start === -1) return [-1, -1];

  // Finding the end

  let end = -1;
  let left2 = 0;
  let right2 = nums.length - 1;
  while (left2 <= right2) {
    let mid = Math.floor((left2 + right2) / 2);
    if (nums[mid] === target) {
      end = end === -1 ? mid : Math.max(end, mid);
      left2 = mid + 1;
    } else if (nums[mid] > target) {
      right2 = mid - 1;
    } else {
      left2 = mid + 1;
    }
  }
  return [start, end];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

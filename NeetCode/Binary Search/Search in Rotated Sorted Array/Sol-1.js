// ! https://leetcode.com/problems/search-in-rotated-sorted-array/

var findMin = function (nums = []) {
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;
  let index = null;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (min > nums[mid]) {
      min = nums[mid];
      index = mid;
    }
    if (min > nums[left]) {
      min = nums[left];
      index = left;
    }
    if (min > nums[right]) {
      min = nums[right];
      index = right;
    }
    if (nums[left] >= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return [min, index];
};

var search = function (nums = [], target) {
  const [min, index] = findMin(nums);
  if (target === min) return index;
  if (target < min) return -1;
  let left1 = index;
  let right1 = nums.length - 1;

  while (left1 <= right1) {
    let mid = Math.floor((left1 + right1) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right1 = mid - 1;
    } else {
      left1 = mid + 1;
    }
  }
  let left2 = 0;
  let right2 = index - 1;
  while (left2 <= right2) {
    let mid = Math.floor((left2 + right2) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right2 = mid - 1;
    } else {
      left2 = mid + 1;
    }
  }

  return -1;
};

console.log(search([3, 1], 1));

// ! https://leetcode.com/problems/single-element-in-a-sorted-array/

var singleNonDuplicate = function (nums = []) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid - 1] !== nums[mid] && nums[mid + 1] !== nums[mid]) {
      return nums[mid];
    }
    if (nums[mid] === nums[mid - 1]) {
      if ((mid - 2 - left) % 2 === 0) {
        right = mid - 2;
      } else {
        left = mid + 1;
      }
    } else {
      if ((right - mid + 2) % 2 === 0) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    }
  }
};

console.log(singleNonDuplicate([7, 7, 10, 11, 11, 12, 12]));

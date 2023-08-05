// ! https://leetcode.com/problems/container-with-most-water/

// ? Brute Force
var maxArea = function (height = []) {
  let heighest = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const side1 = Math.min(height[i], height[j]);
      const side2 = j - i;
      const area = side1 * side2;
      heighest = Math.max(heighest, area);
    }
  }
  return heighest;
};

// ? O(N)

var maxArea2 = function (heights = []) {
  let heighest = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    const side1 = Math.min(heights[left], heights[right]);
    const side2 = right - left;
    const area = side1 * side2;
    heighest = Math.max(heighest, area);
    if (heights[left] < heights[right]) left++;
    else if (heights[left] > heights[right]) right--;
    else {
      left++;
      right--;
    }
  }
  return heighest;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

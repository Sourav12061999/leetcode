// ! https://leetcode.com/problems/largest-rectangle-in-histogram/

var largestRectangleArea = function (heights = []) {
  let maxArea = 0;
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length && stack[stack.length - 1].val > heights[i]) {
      const { index, val } = stack.pop();
      maxArea = Math.max(maxArea, val * (i - index));
      start = index;
    }
    stack.push({
      index: start,
      val: heights[i],
    });
  }
  for (let i = 0; i < stack.length; i++) {
    maxArea = Math.max(maxArea, stack[i].val * (heights.length - 1 - i));
  }
  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

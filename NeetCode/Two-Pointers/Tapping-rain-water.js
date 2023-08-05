// ! https://leetcode.com/problems/trapping-rain-water/

// ? O(N) Time + O(N) Space

/* 
- In this approach I can calculating the max on the right side and max on the left side
- Then calculating their minimum as water can be stored only till the min

- Then for each element between calculating how much water can be stored on top of them
*/
var trap = (heights = []) => {
  let maxLeft = [0];
  let prevEl1 = heights[0];
  for (let i = 1; i < heights.length; i++) {
    maxLeft.push(Math.max(maxLeft[maxLeft.length - 1], prevEl1));
    prevEl1 = heights[i];
  }
  let maxRight = [0];
  let prevEl2 = heights[heights.length - 1];
  for (let i = heights.length - 1; i >= 0; i--) {
    maxRight.push(Math.max(maxRight[maxRight.length - 1], prevEl2));
    prevEl2 = heights[i];
  }
  maxRight = maxRight.reverse();

  let minArray = [];
  for (let i = 0; i < heights.length; i++) {
    minArray.push(Math.min(maxLeft[i], maxRight[i]));
  }
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    ans += minArray[i] - heights[i] > 0 ? minArray[i] - heights[i] : 0;
  }
  return ans;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// ? O(N) Tine + O(1) Space
/* 
- In this approach having one pointer at left and one at right
- form the left position checking how much water can be stored till the max
- doing the same for the right as well 
*/
var trap2 = (heights = []) => {
  let maxLeft = 0;
  let maxRight = 0;
  let ans = 0;

  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    ans += maxLeft - heights[left] > 0 ? maxLeft - heights[left] : 0;

    ans += maxRight - heights[right] > 0 ? maxRight - heights[right] : 0;
    maxLeft = Math.max(maxLeft, heights[left]);
    maxRight = Math.max(maxRight, heights[right]);
    if (heights[left] < heights[right]) {
      left++;
    } else if (heights[left] > heights[right]) {
      right--;
    } else {
      left++;
    }
  }
  return ans;
};

console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

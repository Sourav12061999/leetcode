// ! https://leetcode.com/problems/daily-temperatures/
var dailyTemperatures = function (temperatures = []) {
  const ans = [];
  const stack = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    let flag = false;
    while (stack.length) {
      if (stack[stack.length - 1].element > temperatures[i]) {
        ans.push(stack[stack.length - 1].index - i);
        flag = true;
        break;
      }
      stack.pop();
    }
    stack.push({
      element: temperatures[i],
      index: i,
    });
    if (!flag) ans.push(0);
  }

  return ans.reverse();
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

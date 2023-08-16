// ! https://leetcode.com/problems/car-fleet/

var carFleet = function (target = 0, position = [], speed = []) {
  const merged = [];
  for (let i = 0; i < position.length; i++) {
    merged.push([position[i], speed[i]]);
  }

  merged.sort((ele1, ele2) => ele1[0] - ele2[0]);

  const stack = [];
  let count = 0;
  console.log(merged);
  for (let i = merged.length - 1; i >= 0; i--) {
    console.log(stack);
    const willReachDestinationIn1 = (target - merged[i][0]) / merged[i][1];
    let flag = false;
    while (stack.length) {
      console.log(stack);
      const willReachDestinationIn2 =
        (target - stack[stack.length - 1][0]) / stack[stack.length - 1][1];
      if (willReachDestinationIn2 <= willReachDestinationIn1) {
        flag = true;
        break;
      } else {
        stack.pop();
      }
    }

    if (!flag) {
      count++;
      stack.push(merged[i]);
    }
  }

  return count;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));

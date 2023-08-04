// ! https://leetcode.com/problems/3sum/

var threeSum = function (nums = []) {
  nums.sort((a, b) => a - b);
  const Obj = {};
  for (let k = 0; k < nums.length; k++) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
      const sum = nums[i] + nums[j] + nums[k];
      if (i === k) {
        i++;
        continue;
      }

      if (j === k) {
        j--;
        continue;
      }
      if (sum > 0) {
        j--;
      } else if (sum < 0) {
        i++;
      } else {
        const str = [nums[i], nums[j], nums[k]].sort((a, b) => a - b).join(" ");
        Obj[str] = 1;
        i++;
        j--;
      }
    }
  }
  return Object.keys(Obj).map((element) => {
    return element.split(" ");
  });
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

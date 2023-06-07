// https://leetcode.com/problems/3sum/

function answer(nums = []) {
  nums.sort((a, b) => a - b);
  const triplets = [];
  for (let k = 0; k < nums.length; k++) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
      console.log(i, j, k);
      if (i === k) {
        i++;
        continue;
      }
      if (j === k) {
        j--;
        continue;
      }
      const sum = nums[i] + nums[j];
      if (sum + nums[k] === 0) {
        triplets.push([nums[i], nums[j], nums[k]]);
        break;
      }

      if (sum + nums[k] > 0) j--;
      if (sum + nums[k] < 0) i++;
    }
  }
  console.log(triplets);

  const ans = [];
  const map = {};
  for (let i = 0; i < triplets.length; i++) {
    map[triplets[i].sort((a, b) => a - b).join("_")] = 1;
  }
  const temp = Object.keys(map);
  for (let i = 0; i < temp.length; i++) {
    ans.push(temp[i].split("_"));
  }
  return ans;
}
console.log(answer([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));

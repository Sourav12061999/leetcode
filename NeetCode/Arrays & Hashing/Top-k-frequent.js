// https://leetcode.com/problems/top-k-frequent-elements/

// ! My Approach

function answer1(nums = [], k = 0) {
  const bucket = [[]];

  const count = {};
  for (let i = 0; i < nums.length; i++) {
    bucket[i + 1] = [];
    if (count[nums[i]] === undefined) {
      count[nums[i]] = 1;
    } else {
      count[nums[i]] = count[nums[i]] + 1;
    }
  }

  for (let key in count) {
    bucket[count[key]].push(+key);
  }

  let taken = k;
  const ans = [];
  for (let i = bucket.length - 1; i >= 0 && taken > 0; i--) {
    if (bucket[i].length === 0) continue;
    for (let j = 0; j < bucket[i].length; j++) {
      ans.push(bucket[i][j]);
      taken--;
    }
  }
  return ans;
}

console.log(answer1([4, 1, -1, 2, -1, 2, 3], 2));

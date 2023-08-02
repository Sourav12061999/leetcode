// ! https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function (nums = [], k = 0) {
  if (k <= 0) return [];
  if (k === nums.length) return nums;
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) obj[nums[i]] = 1;
    else obj[nums[i]]++;
  }
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  const ans = [];
  for (let i = 0; i < keys.length; i++) {
    const a = [[keys[i]], values[i]];

    ans.push(a);
  }
  ans.sort((a, b) => b[1] - a[1]);
  const final = [];
  for (let i = 0; i < k; i++) {
    final.push(ans[i][0]);
  }

  return final;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// https://leetcode.com/problems/product-of-array-except-self/

// ! My Approach

function answer(nums = []) {
  let product = 1;
  let noOfZeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      noOfZeros++;
      continue;
    }
    product = product * nums[i];
  }
  const ans = [];
  if (noOfZeros >= 2) {
    return new Array(nums.length).fill(0);
  }
  for (let i = 0; i < nums.length; i++) {
    if (noOfZeros === 1) {
      if (nums[i] === 0) ans.push(product);
      else ans.push(0);
      continue;
    }
    ans.push(product / nums[i]);
  }
  return ans;
}

console.log(answer([-1, 1, 0, -3, 3]));

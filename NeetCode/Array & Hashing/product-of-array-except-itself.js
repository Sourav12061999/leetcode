var productExceptSelf = function (nums = []) {
  let product = 1;
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroCount++;
    else product = product * nums[i];
  }

  if (zeroCount > 1) {
    return new Array(nums.length).fill(0);
  } else if (zeroCount === 1) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        ans.push(product);
      } else {
        ans.push(0);
      }
    }
    return ans;
  }

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(product / nums[i]);
  }

  return ans;
};

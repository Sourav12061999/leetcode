// ! https://leetcode.com/problems/sqrtx/

var mySqrt = function (x = 0) {
  let left = 0;
  let right = x;
  let ans = -Infinity;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid ** 2 === x) return mid;
    if (mid ** 2 < x) {
      ans = Math.max(ans, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};

console.log(mySqrt(8));

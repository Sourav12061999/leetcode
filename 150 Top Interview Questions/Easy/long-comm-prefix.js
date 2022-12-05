// https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function (strs = []) {
  let smallestStr = Infinity;
  strs.forEach((el) => (smallestStr = Math.min(smallestStr, el.length)));
  let ans = "";

  let curr = "";
  for (let i = 0; i < smallestStr; i++) {
    curr = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (curr != strs[j][i]) {
        return ans;
      }
    }
    ans += curr;
  }
  return ans;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

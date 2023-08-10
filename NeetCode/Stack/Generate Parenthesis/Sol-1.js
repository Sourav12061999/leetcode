// ! https://leetcode.com/problems/generate-parentheses/
var generateParenthesis = function (n = 0) {
  if (!n) return [];
  const ans = [];
  recc(ans, "", 0, 0, n);
  return ans;
};

function recc(ans = [], str = "", openCount = 0, closeCount = 0, n = 0) {
  if (openCount >= n && closeCount >= n) return ans.push(str);
  if (openCount > n) {
    console.log({
      openCount,
      closeCount,
      n,
    });
    return;
  }
  if (openCount === closeCount) {
    recc(ans, str + "(", openCount + 1, closeCount, n);
  } else if (openCount > closeCount) {
    recc(ans, str + "(", openCount + 1, closeCount, n);
    recc(ans, str + ")", openCount, closeCount + 1, n);
  } else if (openCount === n && closeCount < n) {
    recc(ans, str + ")", openCount, closeCount + 1, n);
  }
}

console.log(generateParenthesis(1));

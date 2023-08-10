// ! https://leetcode.com/problems/minimum-window-substring/

var minWindow = function (s = "", t = "") {
  const need = new Map();
  const have = new Map();
  let counter = 0;
  for (let i = 0; i < t.length; i++) {
    need.set(t[i], 1 + (need.get(t[i]) || 0));
  }
  for (let i = 0; i < t.length; i++) {
    have.set(s[i], 1 + (have.get(s[i]) || 0));
    if (have.get(s[i]) === need.get(s[i])) {
      counter++;
    }
  }

  if (counter === need.size) {
    return s.slice(0, t.length);
  }

  let left = 0;
  let right = t.length;
  let flag = true;
  let minStr = null;
  while (right < s.length) {
    if (flag) have.set(s[right], 1 + (have.get(s[right]) || 0));
    if (flag && have.get(s[right]) === need.get(s[right])) {
      counter++;
    }
    if (counter === need.size) {
      // console.log({
      //   left,
      //   right,
      //   have,
      //   counter,
      // });
      if (minStr === null) {
        minStr = [left, right];
      } else if (minStr[1] - minStr[0] > right - left) {
        minStr = [left, right];
      }
      if (have.get(s[left]) === need.get(s[left])) {
        counter--;
      }
      flag = false;
      have.set(s[left], have.get(s[left]) - 1);
      left++;
    } else {
      flag = true;
      right++;
    }
  }

  if (!minStr) return "";
  return s.slice(minStr[0], minStr[1] + 1);
};
console.log(minWindow("cabwefgewcwaefgcf", "cae"));

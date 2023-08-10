// ! https://leetcode.com/problems/minimum-window-substring/

var minWindow = function (s = "", t = "") {
  const need = {};
  const have = {};
  for (let i = 0; i < t.length; i++) {
    if (need[t[i]] === undefined) {
      need[t[i]] = 1;
    } else {
      need[t[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (have[s[i]] === undefined) {
      have[s[i]] = 1;
    } else {
      have[s[i]]++;
    }
  }
  if (isValid(need, have)) return s.slice(0, t.length);
  const possible = [];
  let max = null;
  let left = 0;
  let right = t.length;
  let flag = true;
  while (right < s.length) {
    if (have[s[right]] === undefined) {
      have[s[right]] = 1;
    } else if (flag) {
      have[s[right]]++;
    }
    if (isValid(need, have)) {
      flag = false;
      possible.push([left, right]);
      if (max === null) max = [left, right];
      else if (max[1] - max[0] > right - left) max = [left, right];
      have[s[left]] = have[s[left]] - 1;
      left++;
    } else {
      flag = true;
      right++;
    }
  }

  /*
  if (possible.length === 0) return "";
  let maxPossible = possible[0];
  for (let i = 1; i < possible.length; i++) {
    if (maxPossible[1] - maxPossible[0] > possible[i][1] - possible[i][0]) {
      maxPossible = possible[i];
    }
  }
  //   console.log(possible);
  return s.slice(maxPossible[0], maxPossible[1] + 1);*/
  if (max === null) return "";
  return s.slice(max[0], max[1] + 1);
};

function isValid(need, have) {
  for (let key in need) {
    if (have[key] === undefined || need[key] > have[key]) return false;
  }
  //   console.log(have);
  return true;
}
console.log(minWindow("ADOBECODEBANC", "ABC"));

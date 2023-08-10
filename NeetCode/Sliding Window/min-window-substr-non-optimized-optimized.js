// ! https://leetcode.com/problems/minimum-window-substring/
/*
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
    if (have.get(s[right]) === need.get(s[right])) {
      counter++;
    }
    if (counter === need.size) {
      console.log({
        left,
        right,
        need,
        counter,
      });
      if (have.get(s[left]) === need.get(s[left])) {
        counter--;
      }
      if (minStr === null) {
        minStr = [left, right];
      } else if (minStr[1] - minStr[0] > left - right) {
        minStr = [left, right];
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
console.log(minWindow("ADOBECODEBANC", "ABC"));*/

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

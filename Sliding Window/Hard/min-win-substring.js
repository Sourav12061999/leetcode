if (t.length === 0) return s;

let left = 0;
let right = 0;
let res = [0, -1];
let minLen = s.length;

let target = {};
for (const char of t) {
  if (typeof target[char] === "undefined") target[char] = 1;
  else target[char]++;
}

let m = {};
for (const char of t) {
  m[char] = 0;
}

const required = Object.keys(m).length;
let size = 0;
if (m[s[left]] === 0) {
  m[s[left]] += 1;
  if (m[s[left]] === target[s[left]]) size++;
}

while (left < s.length && right < s.length) {
  if (size === required) {
    if (minLen >= right - left + 1) {
      minLen = right - left + 1;
      res = [left, right];
    }
    if (m[s[left]] > 0) {
      m[s[left]] -= 1;
      if (m[s[left]] === target[s[left]] - 1) size--;
    }

    left++;
  } else {
    right++;
    if (m[s[right]] >= 0) {
      m[s[right]] += 1;
      if (m[s[right]] === target[s[right]]) size++;
    }
  }
}

return subStr(s, res[0], res[1]);

function subStr(s, left, right) {
  let str = "";
  for (let i = left; i <= right; i++) {
    str += s[i];
  }
  return str;
}

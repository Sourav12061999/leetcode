// ! https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s = "") {
  const obj = {};
  let end;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = 1;
    } else {
      end = i;
      break;
    }
  }
  max = Object.keys(obj).length;
  let start = 0;
  while (start <= end && end < s.length) {
    if (obj[s[end]] === undefined) {
      obj[s[end]] = 1;
      console.log(obj);
      max = Math.max(max, Object.keys(obj).length);
      end++;
    } else {
      delete obj[s[start]];
      start++;
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));

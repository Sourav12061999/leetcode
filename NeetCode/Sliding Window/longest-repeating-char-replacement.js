// ! https://leetcode.com/problems/longest-repeating-character-replacement/

var characterReplacement = function (s = "", k = 0) {
  let ans = 0;
  let map = new Map();

  let start = 0;
  for (let end = 0; end < s.length; end++) {
    let len = end - start + 1;
    map.set(s[end], 1 + (map.get(s[end]) || 0));
    if (len - Math.max(...map.values()) > k) {
      map.set(s[start], map.get(s[start]) - 1);
      start++;
    }

    len = end - start + 1;
    ans = Math.max(ans, len);
  }

  return ans;
};

console.log(characterReplacement("AABABBA", 1));

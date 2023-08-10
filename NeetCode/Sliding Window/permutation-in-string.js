// ! https://leetcode.com/problems/permutation-in-string/

var checkInclusion = function (s1 = "", s2 = "") {
  if (s1.length > s2.length) return false;
  let charSumS1 = 0;
  let charSumS2 = 0;

  for (let i = 0; i < s1.length; i++) {
    charSumS1 += s1.charCodeAt(i);
    charSumS2 += s2.charCodeAt(i);
  }
  if (charSumS1 === charSumS2) return true;
  let left = 1;

  for (let right = s1.length; right < s2.length; right++) {
    charSumS2 += s2.charCodeAt(right);
    charSumS2 -= s2.charCodeAt(left - 1);
    if (charSumS1 === charSumS2) {
      console.log({
        left,
        right,
        charSumS1,
        charSumS2,
      });
      return true;
    }
    left++;
  }

  return false;
};

console.log(checkInclusion("abc", "ccccbbbbaaaa"));

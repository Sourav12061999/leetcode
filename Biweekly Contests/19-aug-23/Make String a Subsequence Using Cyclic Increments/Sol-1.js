// ! https://leetcode.com/contest/biweekly-contest-111/problems/make-string-a-subsequence-using-cyclic-increments/

var canMakeSubsequence = function (str1 = "", str2 = "") {
  const need = new Map();
  const has = new Map();
  const str = "abcdefghijklmnopqrstuvwxyz";
  const strMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (i - 1 >= 0) {
      strMap.set(str[i], str[i - 1]);
    } else {
      strMap.set(str[i], str[str.length - 1]);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    need.set(str2[i], 1 + (need.get(str2[i]) || 0));
  }

  for (let i = 0; i < str1.length; i++) {
    has.set(str1[i], 1 + (has.get(str1[i]) || 0));
  }

  let flag = 0;
  let mismatch = [];
  need.forEach((value, key) => {
    if (has.has(key) === false || has.get(key) < value) {
      flag += value - (has.get(key) || 0);
      mismatch.push(key);
    }
  });
  console.log({
    need,
    has,
    mismatch,
  });

  if (mismatch.length === 0) return true;

  for (let i = 0; i < mismatch.length; i++) {
    const prevToMismatch = strMap.get(mismatch[i]);
    const needOfPrev = need.get(prevToMismatch) || 0;
    const hasOfPrev = has.get(prevToMismatch) || 0;
    if (hasOfPrev < needOfPrev + need.get(mismatch[i])) {
      return false;
    }
  }
  return true;
};

console.log(canMakeSubsequence("eao", "ofa"));

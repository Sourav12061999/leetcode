// https://leetcode.com/problems/roman-to-integer/
var romanToInt = function (s = "") {
  const maping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (maping[`${s[i]}${s[i + 1]}`]) {
      ans += maping[`${s[i]}${s[i + 1]}`];
      i++;
    } else {
      ans += maping[s[i]];
    }
  }
  return ans;
};

console.log(romanToInt("MCMXCIV"));

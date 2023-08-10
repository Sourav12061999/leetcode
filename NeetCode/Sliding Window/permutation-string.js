// ! https://leetcode.com/problems/permutation-in-string/

var checkInclusion = function (s1 = "", s2 = "") {
  const need = new Map();
  for (let i = 0; i < s1.length; i++) {
    need.set(s1[i], 1 + (need.get(s1[i]) || 0));
  }
  const have = {};
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    have[s2[i]] = 1 + (have[s2[i]] === undefined ? 0 : have[s2[i]]);
    if (have[s2[i]] === need.get(s2[i])) counter++;
  }
  // if (isValid(need, have)) return true;
  if (counter === need.size) return true;
  let left = 1;
  let right = s1.length;
  while (right < s2.length) {
    if (have[s2[left - 1]] === need.get(s2[left - 1])) {
      counter--;
    }
    if (have[s2[left - 1]]) {
      have[s2[left - 1]]--;
    }
    have[s2[right]] = 1 + (have[s2[right]] || 0);
    if (have[s2[right]] === need.get(s2[right])) counter++;
    // if (isValid(need, have)) return true;
    if (counter === need.size) return true;
    left++;
    right++;
  }
  return false;
};

function isValid(need = new Map(), have) {
  let flag = true;
  need.forEach((value, key) => {
    if (value !== have[key]) {
      flag = false;
    }
  });

  return flag;
}

console.log(checkInclusion("ab", "eidbaoo"));

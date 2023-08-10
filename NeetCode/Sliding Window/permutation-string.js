// ! https://leetcode.com/problems/permutation-in-string/

var checkInclusion = function (s1 = "", s2 = "") {
  const need = {};
  for (let i = 0; i < s1.length; i++) {
    need[s1[i]] = 1 + (need[s1[i]] === undefined ? 0 : need[s1[i]]);
  }
  console.log(need);
  const have = {};
  for (let i = 0; i < s1.length; i++) {
    have[s2[i]] = 1 + (have[s2[i]] === undefined ? 0 : have[s2[i]]);
  }
  if (isValid(need, have)) return true;
  let left = 1;
  let right = s1.length;
  while (right < s2.length) {
    if (have[s2[left - 1]]) {
      have[s2[left - 1]]--;
    }
    have[s2[right]] = 1 + (have[s2[right]] || 0);
    if (isValid(need, have)) return true;
    left++;
    right++;
  }
  return false;
};

function isValid(need, have) {
  for (let key in need) {
    if (need[key] != have[key]) {
      return false;
    }
  }

  return true;
}

console.log(checkInclusion("ab", "eidboaoo"));

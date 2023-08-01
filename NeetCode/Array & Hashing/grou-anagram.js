// ! https://leetcode.com/problems/group-anagrams/

const groupAnagram = (strs = []) => {
  const ans = {};

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join();
    if (ans[sorted] === undefined) {
      ans[sorted] = [strs[i]];
    } else {
      ans[sorted].push(strs[i]);
    }
  }

  return Object.values(ans);
};

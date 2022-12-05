// https://leetcode.com/contest/weekly-contest-302/problems/minimum-deletions-to-make-array-divisible/

function answer(arr = [], divisors = []) {
  let toalDeletions = 0;
  arr.sort((a, b) => a - b);
  let currEl = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === currEl) {
        toalDeletions++;
        continue;
    }
    if (currEl == null) currEl = arr[i];
    let flag = true;
    for (let j = 0; j < divisors.length; j++) {
      if (divisors[j] % arr[i] !== 0) {
        flag = false;
      }
    }
    if (!flag) {
      currEl = arr[i];
      toalDeletions++;
    } else {
      return toalDeletions;
    }
  }

  return -1;
}
console.log(answer([2, 2],[964351116]));

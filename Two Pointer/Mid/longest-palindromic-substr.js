// https://leetcode.com/problems/longest-palindromic-substring/

function answer(str = "") {
  let max = 0;
  let ans = "";
  if (isPalindrom(str)) {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    let subStr = "";
    for (let j = i; j < str.length; j++) {
      subStr += str[j];
      if (max < subStr.length && isPalindrom(subStr)) {
        max = subStr.length;
        ans = subStr;
      }
    }
  }
  return ans;
}

function isPalindrom(str = "") {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
console.log(answer("babad"));

// Manacher's Algorithm

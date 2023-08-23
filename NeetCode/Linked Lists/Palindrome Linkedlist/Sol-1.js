// ! https://leetcode.com/problems/palindrome-linked-list/

var isPalindrome = function (head) {
  let headVal1 = "";
  let headVal2 = "";
  let pointer1 = head;
  while (pointer1) {
    headVal1 += pointer1.val;
    pointer1 = pointer1.next;
  }

  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  let pointer2 = prev;
  while (pointer2) {
    headVal2 += pointer2.val;
    pointer2 = pointer2.next;
  }
  return headVal1 === headVal2;
};

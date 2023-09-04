// ! https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function (head) {
  let len = 0;
  let curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }
  if (len === 0) return null;

  if (len === 1) return head;

  let mid = len % 2 === 0 ? len / 2 + 1 : Math.ceil(len / 2);
  curr = head;
  let count = 0;
  while (curr) {
    count++;
    if (count === mid) return curr;
    curr = curr.next;
  }
};

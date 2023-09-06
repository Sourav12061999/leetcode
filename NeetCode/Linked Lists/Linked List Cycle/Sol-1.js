// ! https://leetcode.com/problems/linked-list-cycle/
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    if (fast.next === null) return false;
    if (fast.next.next === null) return false;
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) return true;
  }
  return false;
};

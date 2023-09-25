// ! https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

var pairSum = function(head) {
    const mid = middle(head);
    const head2 = reverse(mid.next);
    mid.next = null;
    let max = -Infinity;
    let curr = head;
    let curr2 = head2;
    while (curr && curr2) {
        max = Math.max(max, curr.val + curr2.val);
        curr = curr.next;
        curr2 = curr2.next;
    }
    return max;
};

function middle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
function reverse(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
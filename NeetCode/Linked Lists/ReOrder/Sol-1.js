// ! https://leetcode.com/problems/reorder-list/

var reorderList = function(head) {
  let mid = middle(head);
  let head2 = reverse(mid.next);
  mid.next = null;
  let curr = head;
  let curr2 = head2;
  console.log(mid);
  console.log(curr);
  console.log(curr2);
  while (curr !== mid && curr2) {
    console.log(curr);
    console.log(curr2);
    const next = curr.next;
    const next2 = curr2.next;
    curr.next = curr2;
    curr2.next = next;
    curr = next;
    curr2 = next2;
  }
  return head;
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

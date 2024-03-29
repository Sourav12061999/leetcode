// ! https://leetcode.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function (head) {
  let curr = head;
  while (curr) {
    let next = curr.next;
    while (next && next.val === curr.val) {
      next = next.next;
    }
    curr.next = next;
    curr = next;
  }
  return head;
};

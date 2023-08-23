var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  const next = head.next.next;
  const curr = head.next;
  const prev = head;
};

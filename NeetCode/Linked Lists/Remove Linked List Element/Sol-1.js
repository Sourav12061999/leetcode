var removeElements = function (head, val) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    if (curr.val === val) {
      if (prev === null) {
        head = next;
        curr = next;
      } else {
        prev.next = next;
        curr = next;
      }
    } else {
      prev = curr;
      curr = next;
    }
  }
  return head;
};

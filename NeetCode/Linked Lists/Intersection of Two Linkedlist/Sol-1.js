// ! https://leetcode.com/problems/intersection-of-two-linked-lists/
var getIntersectionNode = function (headA, headB) {
  const len1 = lengthOfList(headA);
  const len2 = lengthOfList(headB);
  let head;
  if (len1 > len2) {
    head = headA;
    let diff = len1 - len2;
    while (diff) {
      head = head.next;
      diff--;
    }
    let pointer1 = head;
    let pointer2 = headB;
    while (pointer1 && pointer2) {
      if (pointer1 === pointer2) return pointer1;
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }
  } else {
    head = headB;
    let diff = len2 - len1;
    while (diff) {
      head = head.next;
      diff--;
    }
    let pointer1 = head;
    let pointer2 = headA;
    while (pointer1 && pointer2) {
      if (pointer1 === pointer2) return pointer1;
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }
  }
  return null;
};

function lengthOfList(head) {
  let curr = head;
  let len = 0;

  while (curr) {
    len++;
    curr = curr.next;
  }

  return len;
}

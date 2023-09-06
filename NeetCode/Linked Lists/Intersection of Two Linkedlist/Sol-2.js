// ! https://leetcode.com/problems/intersection-of-two-linked-lists/description/

var getIntersectionNode = function (headA, headB) {
  let pointer1 = headA;
  let pointer2 = headB;
  let iteration1 = 0;
  let iteration2 = 0;
  while (iteration1 <= 1 && iteration2 <= 1) {
    if (pointer1 === null) {
      pointer1 = headB;
      iteration1++;
    }
    if (pointer2 === null) {
      pointer2 = headA;
      iteration2++;
    }
    if (pointer1 === pointer2) {
      return pointer1;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return null;
};

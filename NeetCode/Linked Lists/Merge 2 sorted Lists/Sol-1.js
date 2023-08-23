// ! https://leetcode.com/problems/merge-two-sorted-lists/
var mergeTwoLists = function (list1, list2) {
  let pointer1 = list1.head;
  let pointer2 = list2.head;
  const ans = new Linkedlist();

  while (pointer1 && pointer2) {
    console.log("OK");
    if (pointer1.val >= pointer2.val) {
      ans.add(new Node(pointer2.val));
      pointer2 = pointer2.next;
    } else {
      ans.add(new Node(pointer1.val));
      pointer1 = pointer1.next;
    }
  }
  while (pointer1) {
    ans.add(new Node(pointer1.val));
    pointer1 = pointer1.next;
  }
  while (pointer2) {
    ans.add(new Node(pointer2.val));
    pointer2 = pointer2.next;
  }
  return ans.head;
};

class Linkedlist {
  constructor() {
    this.head = null;
  }
  add(node, head = this.head) {
    if (head === null) {
      this.head = node;
      return;
    }
    if (head.next === null) {
      head.next = node;
      return;
    }
    this.add(node, head.next);
  }
}

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

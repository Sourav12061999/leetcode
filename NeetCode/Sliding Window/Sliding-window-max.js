// ! https://leetcode.com/problems/sliding-window-maximum/

var maxSlidingWindow = function (nums = [], k = 0) {
  if (k === 0) return [];
  const que = new MonotonicallyDecreasingQue();

  for (let i = 0; i < k; i++) {
    que.enque(nums[i]);
  }

  const ans = [que.items[que.front]];
  let left = 1;
  let right = k;
  while (right < nums.length) {
    if (que.items[que.front] === nums[left - 1]) {
      que.deque();
    }
    que.enque(nums[right]);
    ans.push(que.items[que.front]);
    left++;
    right++;
  }
  return ans;
};

class MonotonicallyDecreasingQue {
  constructor() {
    this.front = -1;
    this.rear = -1;
    this.items = [];
  }

  enque(element) {
    if (this.items.length && element > this.items[this.rear]) {
      this.items.pop();
      this.rear--;
      this.enque(element);
    } else {
      this.items.push(element);
      if (this.front === -1) {
        this.front = 0;
      }
      this.rear++;
    }
  }

  deque() {
    const poppedEl = this.items[this.front];
    this.items[this.front] = undefined;
    this.front++;
    return poppedEl;
  }
}

console.log(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5));

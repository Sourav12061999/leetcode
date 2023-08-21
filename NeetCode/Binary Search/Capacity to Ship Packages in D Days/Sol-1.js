// ! https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

var shipWithinDays = function (weights = [], days = 0) {
  let leastCap = Math.max(...weights);
  let maxCap = weights.reduce((a, b) => a + b);

  let left = leastCap;
  let right = maxCap;
  let capacity = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isValid(weights, days, mid) === true) {
      right = mid - 1;
      capacity = Math.min(capacity, mid);
    } else {
      left = mid + 1;
    }
  }
  return capacity;
};

function isValid(weights = [], days, capacity) {
  let delivered = 0;
  let a = [];
  for (let i = 0; i < weights.length; i++) {
    delivered += weights[i];
    if (delivered > capacity) {
      days--;
      a.push(delivered - weights[i]);
      delivered = weights[i];
    }
  }
  days--;
  console.log({ deliveries: [...a, delivered], capacity, days });
  return days >= 0;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// ! https://leetcode.com/problems/time-based-key-value-store/

var TimeMap = function () {
  this.values = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.values.has(key)) {
    this.values.get(key).push({ value, timestamp });
  } else {
    this.values.set(key, [{ value, timestamp }]);
  }
  return null;
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let array = this.values.get(key);
  let left = 0;
  let right = array.length - 1;
  let max = -Infinity;
  let val = null;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid].timestamp === timestamp) {
      return array[mid].value;
    } else if (array[mid].timestamp > timestamp) {
      right = mid - 1;
    } else {
      if (max < array[mid].timestamp) {
        max = array[mid].timestamp;
        val = array[mid].value;
      }
      left = mid + 1;
    }
  }
  return val;
};

const t = new TimeMap();
t.set("foo", "bar", 1);
console.log(t.get("foo", 1));
console.log(t.get("foo", 3));
t.set("foo", "bar2", 4);
console.log(t.get("foo", 4));
console.log(t.get("foo", 5));

// ! https://leetcode.com/problems/min-stack/
var MinStack = function () {
  this.items = [];
  this.minimums = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.items.push(val);
  if (this.minimums.length === 0) {
    this.minimums.push(val);
    return;
  }
  this.minimums.push(Math.min(val, this.minimums[this.minimums.length - 1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.items.pop();
  this.minimums.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minimums[this.minimums.length - 1];
};

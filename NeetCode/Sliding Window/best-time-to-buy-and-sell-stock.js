// ! https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices = []) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length && buy < prices.length) {
    if (buy === sell) {
      sell++;
      continue;
    }
    let profit = prices[sell] - prices[buy];
    if (profit >= 0) {
      maxProfit = Math.max(maxProfit, profit);
      sell++;
    } else if (profit < 0) {
      buy++;
    }
  }
  return maxProfit;
};

console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));

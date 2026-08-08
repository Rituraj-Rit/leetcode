/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length, lowest = Infinity, profit = 0;

    for(let i = 0; i < len; i++){
        lowest = Math.min(lowest, prices[i]);
        profit = Math.max(profit, prices[i] - lowest)
    }

    return profit;
};
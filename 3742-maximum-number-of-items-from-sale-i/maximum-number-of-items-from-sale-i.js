/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function (items, budget) {
    let n = items.length;
    let dp = new Array(budget + 1).fill(0);
    let minPrice = Infinity;
    for (let [factor, price] of items) {
        minPrice = Math.min(minPrice, price);
        let count = 0;
        for (let [otherFactor] of items) {
            if (otherFactor % factor === 0) {
                count++;
            }
        }
        for (let j = budget; j >= price; j--) {
            dp[j] = Math.max(
                dp[j],
                dp[j - price] + count
            );
        }
    }
    let ans = 0;
    for (let i = 0; i <= budget; i++) {
        ans = Math.max(
            ans,
            dp[i] + Math.floor((budget - i) / minPrice)
        );
    }
    return ans;
};
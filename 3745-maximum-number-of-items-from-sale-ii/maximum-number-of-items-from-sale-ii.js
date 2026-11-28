/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function (items, budget) {
    let n = items.length;
    let freq = new Array(n + 1).fill(0);
    let minPrice = Infinity;
    for (let [factor, price] of items) {
        freq[factor]++;
        minPrice = Math.min(minPrice, price);
    }
    let gifts = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j += i) {
            gifts[i] += freq[j];
        }
        if (gifts[i] > 0) {
            gifts[i]--;
        }
    }
    let costCount = new Map();
    for (let [factor, price] of items) {
        let count = gifts[factor];
        if (count > 0 && price <= 2 * minPrice) {
            costCount.set(
                price,
                (costCount.get(price) || 0) + count
            );
        }
    }
    let candidates = [...costCount.entries()];
    candidates.sort((a, b) => a[0] - b[0]);
    let ans = 0;
    for (let [price, count] of candidates) {
        let buy = Math.min(count, Math.floor(budget / price));

        ans += buy * 2;
        budget -= buy * price;
    }
    ans += Math.floor(budget / minPrice);
    return ans;
};
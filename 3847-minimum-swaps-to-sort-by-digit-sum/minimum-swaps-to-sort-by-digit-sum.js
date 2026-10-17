/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let n = nums.length;

    function digitSum(num) {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    let arr = nums.map((num, i) => ({
        num: num,
        index: i,
        sum: digitSum(num)
    }));

    arr.sort((a, b) => a.sum - b.sum || a.num - b.num);

    let visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || arr[i].index === i) {
            continue;
        }

        let cycle = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            j = arr[j].index;
            cycle++;
        }

        if (cycle > 1) {
            swaps += cycle - 1;
        }
    }

    return swaps;
};
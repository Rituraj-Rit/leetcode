/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let num = 0;
    let sum = 0;
    let count = 0;

    while (n > 0) {
        let temp = n % 10;
        n = Math.floor(n / 10);
        sum += temp;
        if (temp !== 0) {
            num += temp * Math.pow(10, count);
            count++;
        }
    }
    return num * sum;
};

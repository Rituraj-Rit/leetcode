/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    while (s.length > k) {
        let ans = "";
        for (let i = 0; i < s.length; i += k) {
            let str = s.slice(i, i + k);
            let sum = 0;

            for (let j = 0; j < str.length; j++) {
                sum += Number(str[j]);
            }
            ans += sum;
        }
        s = ans;
    }
    return s;
};
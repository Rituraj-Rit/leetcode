/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let low = 0;
    let high = s.length;
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            ans.push(low);
            low++;
        } else {
            ans.push(high);
            high--;
        }
    }
    ans.push(low);
    return ans;
};
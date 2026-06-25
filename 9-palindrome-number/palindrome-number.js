/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let copy = x
    let ans = 0;
    while (x > 0) {
        let fact = 1
        let dig = x % 10
            ans = ans * 10 + dig
            x = Math.floor(x / 10)
    }
    if (copy === ans) return true
    else return false
};
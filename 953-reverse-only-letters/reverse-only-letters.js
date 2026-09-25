/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let arr = s.split("");
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (!/[a-zA-Z]/.test(arr[i])) {
            i++;
        } else if (!/[a-zA-Z]/.test(arr[j])) {
            j--;
        } else {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    return arr.join("");
};
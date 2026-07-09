/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let result = "";
    let i = s.length - 1;

    while (i >= 0) {
        while (i >= 0 && s[i] === ' ') i--;

        if (i < 0) break;

        let j = i;

        while (j >= 0 && s[j] != ' ') j--;

        if (result.length === 0) {
            result += s.substring(j + 1, i + 1);
        } else {
            result += " " + s.substring(j + 1, i + 1)
        }
        i = j - 1;
    }
    return result;
};
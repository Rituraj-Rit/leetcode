/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let str = s.slice(i, j);
            let set = new Set(str);
            let nice = true;
            for (let ch of str) {
                if (!set.has(ch.toLowerCase()) ||
                    !set.has(ch.toUpperCase())) {
                    nice = false;
                    break;
                }
            }
            if (nice && str.length > ans.length) {
                ans = str;
            }
        }
    }
    return ans;
};
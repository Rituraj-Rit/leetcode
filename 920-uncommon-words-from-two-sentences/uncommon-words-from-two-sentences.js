/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let arr = [...s1.split(" "), ...s2.split(" ")];
    let map = {};
    for (let word of arr) {
        map[word] = (map[word] || 0) + 1;
    }
    let ans = [];
    for (let word in map) {
        if (map[word] === 1) {
            ans.push(word);
        }
    }
    return ans;
};
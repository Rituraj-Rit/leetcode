/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let freq = {};

    for (let ch of licensePlate.toLowerCase()) {
        if (ch >= 'a' && ch <= 'z') {
            freq[ch] = (freq[ch] || 0) + 1;
        }
    }

    let ans = "";

    for (let word of words) {
        let map = {};
        for (let ch of word) {
            map[ch] = (map[ch] || 0) + 1;
        }
        let valid = true;
        for (let ch in freq) {
            if ((map[ch] || 0) < freq[ch]) {
                valid = false;
                break;
            }
        }
        if (valid && (ans === "" || word.length < ans.length)) {
            ans = word;
        }
    }
    return ans;
};
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length);

    let dp = new Map();
    let ans = 1;

    for (let word of words) {
        let best = 1;

        for (let i = 0; i < word.length; i++) {
            let prev = word.slice(0, i) + word.slice(i + 1);

            if (dp.has(prev)) {
                best = Math.max(best, dp.get(prev) + 1);
            }
        }

        dp.set(word, best);
        ans = Math.max(ans, best);
    }

    return ans;
};
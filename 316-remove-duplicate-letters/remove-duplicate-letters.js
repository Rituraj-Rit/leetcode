/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [];
    let count = {};

    for (let ch of s) {
        count[ch] = (count[ch] || 0) + 1;
    }

    let seen = new Set();

    for (let ch of s) {
        count[ch]--;

        if (seen.has(ch)) continue;

        while (
            stack.length &&
            stack[stack.length - 1] > ch &&
            count[stack[stack.length - 1]] > 0
        ) {
            seen.delete(stack.pop());
        }

        stack.push(ch);
        seen.add(ch);
    }

    return stack.join("");
};
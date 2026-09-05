/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let queue = [s];
    let visited = new Set([s]);
    let result = [];
    let found = false;

    while (queue.length > 0) {
        let str = queue.shift();

        // Check valid parentheses
        if (isValid(str)) {
            result.push(str);
            found = true;
        }

        if (found) {
            continue;
        }

        for (let i = 0; i < str.length; i++) {

            if (str[i] !== '(' && str[i] !== ')') {
                continue;
            }

            let newStr = str.slice(0, i) + str.slice(i + 1);

            if (!visited.has(newStr)) {
                visited.add(newStr);
                queue.push(newStr);
            }
        }
    }

    return result;
};

// Check valid parentheses
function isValid(str) {
    let count = 0;

    for (let ch of str) {
        if (ch === '(') {
            count++;
        } else if (ch === ')') {
            count--;

            if (count < 0) {
                return false;
            }
        }
    }

    return count === 0;
}
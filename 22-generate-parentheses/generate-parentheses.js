/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];

    const createParentheses = (str, open, close) => {
        if(str.length === 2 * n) return ans.push(str);
        if(open < n) createParentheses(str + '(', open + 1, close);
        if(open > close) createParentheses(str + ')', open, close + 1)
    }

    createParentheses("", 0, 0);

    return ans;
};
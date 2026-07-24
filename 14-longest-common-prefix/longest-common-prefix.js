/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    let start = strs[0], end = strs[strs.length - 1], ans = "";

    for(let i = 0; i < start.length; i++){
        if(start[i] === end[i]) ans += start[i]
        else break;
    }
    return ans;
};
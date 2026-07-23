/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let counter = 0, ans = "";
    for(let i = 0; i < s.length; i++){
        if( s[i] === ")" ) counter--;
        if(counter !== 0) ans += s[i];
        if(s[i] === "(") counter++
    }
    return ans;
};
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let result = ''
    for(let i = 0; i < s.length; i++){
        if(result.length > 0 && result[result.length-1] === s[i]){
            result = result.slice(0, -1);
        }else{
            result += s[i];
        }
    }
    return result
};
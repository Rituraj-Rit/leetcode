/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let ans = ""
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 != 0){
            ans = num.slice(0, i + 1);
        }
    }
    return ans;
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    let len = digits.length, ans = [];
    if(len === 0) return ans;

    let generateCombination = (combination, nextDigit)=>{
        if(nextDigit.length === 0) return ans.push(combination);
        else{
            let letters = phone_map[nextDigit[0] - 2];
            for(let letter of letters){
                generateCombination(combination + letter, nextDigit.slice(1))
            }
        }
    }
    generateCombination("", digits)

    return ans;

};
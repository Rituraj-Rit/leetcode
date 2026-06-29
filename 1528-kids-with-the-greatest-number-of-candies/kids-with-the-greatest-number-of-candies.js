/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    let result = []
    for(let i = 0; i < candies.length; i++){
        let tatal = candies[i] + extraCandies
        if(tatal >= max){
            result.push(true)
        }else{
            result.push(false)
        }
    }
    return result
};
/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    let sum = 0;
    let sq = 0;
    while(n > 0){
        let dig = n % 10 
        sum = sum + dig
        sq = sq + (dig*dig)
        n = Math.floor(n/10)
    }
    return (sq-sum) >= 50
};
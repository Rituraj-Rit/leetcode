/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    while(n > 0){
        let dig = n % 10
        sum = sum + dig
        product = product * dig
        n = Math.floor(n/10)
    }
    return product-sum
};
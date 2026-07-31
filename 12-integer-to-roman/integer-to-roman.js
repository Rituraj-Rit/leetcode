/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let symbols = [
        [1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let res = "";
    for(let i = 0; i < symbols.length; i++){
        let times = Math.floor(num / symbols[i][0]);
        res = res + symbols[i][1].repeat(times);
        num = num % symbols[i][0];
    }
    return res;
};
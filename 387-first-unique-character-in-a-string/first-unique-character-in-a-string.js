/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}
    for(let char of s){
        if(!obj[char]){
            obj[char] = 1
        }else {
            obj[char]++
        }
    }
    for(let key in obj){
        if(obj[key] === 1){
            return s.indexOf(key)
        }
    }
    return -1
};
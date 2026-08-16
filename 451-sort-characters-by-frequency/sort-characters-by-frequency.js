/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map();
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            let value = map.get(s[i]);
            map.set(s[i], value + 1);
        }else map.set(s[i], 1);
    }
    let sortedArr = [...map.entries()].sort((a,b) => b[1] - a[1]);
    return sortedArr
        .map(e1 => e1[0].repeat(e1[1]))
        .join('');

};
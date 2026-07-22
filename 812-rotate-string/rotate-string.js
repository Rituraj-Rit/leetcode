/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s === goal) return true;
    let len = s.length - 1;

    while(len >= 0){
        s = s.slice(1) + s[0];
        if(s === goal) return true;
        len--;
    }
    return false;
};
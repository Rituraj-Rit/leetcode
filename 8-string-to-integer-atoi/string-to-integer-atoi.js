/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if(!s) return 0;
    s = s.trim();
    let len = s.length, start = 0, sign = 1, ans = 0;

    if(s[0] === '-' || s[0] === '+'){
        if(s[0] === '-') sign = -1;
        start++;
    }

    while(start < len && s[start] >= '0' && s[start] <= '9'){
        ans = ans * 10 + Number(s[start]);
        start++;
    }
    let INT_MAX = 2 ** 31 - 1, INT_MIN = -(2 ** 31);

    ans = sign === -1 ? -ans : ans;

    if(ans > INT_MAX) return INT_MAX;
    else if(ans < INT_MIN) return INT_MIN;

    return ans;
};
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let rev = 0;

    while (x > 0) {
        let rem = x % 10;

        if (rev > (2**31 - 1) / 10) return 0;

        rev = rev * 10 + rem;
        x = Math.floor(x / 10);
    }

    return rev * sign;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let negative = false;

    if (x < 0) {
        negative = true;
        x = -x;
    }

    let rev = 0;

    while (x > 0) {
        let rem = x % 10;
        rev = rev * 10 + rem;
        x = Math.floor(x / 10);
    }

    if (negative) {
        rev = -rev;
    }
    
    if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) {
        return 0;
    }

    return rev;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    s = s.trim();

    let hasDigit = false;
    let hasDot = false;
    let hasE = false;
    let digitAfterE = true;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        // Digit
        if (ch >= '0' && ch <= '9') {
            hasDigit = true;

            if (hasE) {
                digitAfterE = true;
            }
        }

        // Decimal point
        else if (ch === '.') {
            if (hasDot || hasE) {
                return false;
            }
            hasDot = true;
        }

        // e or E
        else if (ch === 'e' || ch === 'E') {
            if (hasE || !hasDigit) {
                return false;
            }
            hasE = true;
            digitAfterE = false;
        }

        // + or -
        else if (ch === '+' || ch === '-') {
            if (i !== 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }
        }

        // Anything else
        else {
            return false;
        }
    }

    return hasDigit && digitAfterE;
};
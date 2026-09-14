/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let write = 0;
    let i = 0;

    while (i < chars.length) {
        let current = chars[i];
        let count = 0;

        while (i < chars.length && chars[i] === current) {
            i++;
            count++;
        }

        chars[write] = current;
        write++;

        if (count > 1) {
            let str = count.toString();

            for (let j = 0; j < str.length; j++) {
                chars[write] = str[j];
                write++;
            }
        }
    }

    return write;
};
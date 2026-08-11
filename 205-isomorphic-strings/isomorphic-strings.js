/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false;

    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let stored = map.get(s[i]);
            if (stored !== t[i]) return false;
        } else {
            let alreadyTaken = [...map.values()].includes(t[i]);
            if (alreadyTaken) return false;
            map.set(s[i], t[i]);
        }
    }
    return true;
};
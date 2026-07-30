/**
 * @param {string} s
 * @return {number}
 */

const getMinMaxCount = (map) => {
    let min = Infinity, max = -Infinity;
    for (let [key, value] of map) {
        min = Math.min(min, value);
        max = Math.max(max, value);
    }
    return [min, max]
}
var beautySum = function (s) {
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        let hashMap = new Map();
        for (let j = i; j < s.length; j++) {
            if (hashMap.has(s[j])) {
                hashMap.set(s[j], hashMap.get(s[j]) + 1);
            } else hashMap.set(s[j], 1);

            const [min, max] = getMinMaxCount(hashMap);
            ans += (max - min);
        }
    }
    return ans;
};
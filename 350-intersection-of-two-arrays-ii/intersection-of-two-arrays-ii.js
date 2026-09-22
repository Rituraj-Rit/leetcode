/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map();
    let ans = [];

    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        if (map.get(num) > 0) {
            ans.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return ans;
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersection = nums1.filter((e1) => {
        return nums2.includes(e1);
    });

    return [...new Set(intersection)];
};
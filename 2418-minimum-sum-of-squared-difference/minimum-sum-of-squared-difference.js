/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    let n = nums1.length;
    let k = k1 + k2;
    let diff = [];

    let maxDiff = 0;

    for (let i = 0; i < n; i++) {
        diff[i] = Math.abs(nums1[i] - nums2[i]);
        maxDiff = Math.max(maxDiff, diff[i]);
    }

    let left = 0;
    let right = maxDiff;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let operations = 0;

        for (let d of diff) {
            if (d > mid) {
                operations += d - mid;
            }
        }

        if (operations <= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    let remaining = k;

    for (let i = 0; i < n; i++) {
        if (diff[i] > left) {
            remaining -= diff[i] - left;
            diff[i] = left;
        }
    }

    diff.sort((a, b) => b - a);

    for (let i = 0; i < n && remaining > 0; i++) {
        if (diff[i] === left && left > 0) {
            diff[i]--;
            remaining--;
        }
    }

    let sum = 0;

    for (let d of diff) {
        sum += d * d;
    }

    return sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let count = 0;

    function mergeSort(left, right) {
        if (left >= right) return;

        let mid = Math.floor((left + right) / 2);

        mergeSort(left, mid);
        mergeSort(mid + 1, right);

        // Count reverse pairs
        let j = mid + 1;

        for (let i = left; i <= mid; i++) {
            while (j <= right && nums[i] > 2 * nums[j]) {
                j++;
            }

            count += j - (mid + 1);
        }

        // Merge two sorted arrays
        let temp = [];
        let i = left;
        j = mid + 1;

        while (i <= mid && j <= right) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i]);
                i++;
            } else {
                temp.push(nums[j]);
                j++;
            }
        }

        while (i <= mid) {
            temp.push(nums[i]);
            i++;
        }

        while (j <= right) {
            temp.push(nums[j]);
            j++;
        }

        for (let k = 0; k < temp.length; k++) {
            nums[left + k] = temp[k];
        }
    }

    mergeSort(0, nums.length - 1);

    return count;
};
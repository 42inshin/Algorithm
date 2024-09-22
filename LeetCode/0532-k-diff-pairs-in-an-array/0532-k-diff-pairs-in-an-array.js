/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let count = new Set(), l = 0, r = 1;

    nums.sort((a,b) => a - b);

    while (r < nums.length) {
        let diff = nums[r] - nums[l];
        if (diff == k) {
            count.add(nums[l] + nums[r]);
            l++;
            r++;
        } else if (diff < k) {
            r++;
        } else {
            l++;
            r += (l == r) ? 1 : 0
        }
    }

    return [...count].length;
};
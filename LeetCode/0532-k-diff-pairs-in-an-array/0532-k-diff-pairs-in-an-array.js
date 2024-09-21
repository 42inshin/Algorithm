/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const len = nums.length;
    let answer = new Set();

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (Math.abs(nums[i] - nums[j]) == k)
                answer.add([nums[i], nums[j]].sort((a,b)=> a-b).join(','));
        }
    }

    return [...answer].length;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const len = nums.length;
    let map = new Map();
    let answer = 0;
    
    nums.sort((a,b) => a - b);

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    for (let i of map.keys()) {
        if (k > 0 && map.get(i+k))
            answer++;
        else if (k == 0 && map.get(i) > 1)
            answer++;
    }

    return answer;
};
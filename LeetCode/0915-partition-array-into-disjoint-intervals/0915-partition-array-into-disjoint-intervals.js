/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    // 왼쪽에서부터 가능한 배열의 최대값 구하기
    var leftMax = nums[0];
    var leftMaxArr = nums.map(v => { 
        leftMax = Math.max(v, leftMax);
        return leftMax;
    })
        
    // 오른쪽에서부터 가능한 배열의 최소값 구하기
    const n = nums.length;
    var rightMin = nums[n - 1];
    var rightMinArr = nums.reverse().map(v => {
        rightMin = Math.min(v, rightMin);
        return rightMin;
    }).reverse();

    // 왼쪽의 최대값과 오른쪽 최소값을 비교해 왼쪽이 작거나 같은 경우를 찾기
    for (let i = 0; i < n-1; i++) {
        if (leftMaxArr[i] <= rightMinArr[i+1])
            return i + 1;
    }
};
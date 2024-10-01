function solution(nums) {
    var set = [...new Set(nums)];
    var max = nums.length / 2;
    var setLen = set.length;
    
    return setLen < max ? setLen : max;
}
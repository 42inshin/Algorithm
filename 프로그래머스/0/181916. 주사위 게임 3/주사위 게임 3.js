function solution(a, b, c, d) {
    
    var nums = {};
    nums[a] = (nums[a] || 0) + 1;
    nums[b] = (nums[b] || 0) + 1;
    nums[c] = (nums[c] || 0) + 1;
    nums[d] = (nums[d] || 0) + 1;
    
    const keys = Object.keys(nums);
    
    if (keys.length == 1) {
        return 1111 * a;
    } else if (keys.length == 2) {
        let [p, q] = keys
        if (nums[p] != 2) {
            if (nums[p] < nums[q]) [p, q] = [q, p]
            return (10 * +p + +q) ** 2
        } else {
            return (+p + +q) * Math.abs(p - q)
        }
    } else if (keys.length == 3) {
        return keys.reduce((acc, v) => nums[v] != 2 ? acc * v : acc * 1, 1)
    } else {
        return Math.min(a, b, c, d)
    }
}
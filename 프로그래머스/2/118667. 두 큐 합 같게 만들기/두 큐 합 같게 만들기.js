function solution(queue1, queue2) {
    const arr = [...queue1, ...queue2]
    const total = arr.reduce((total, v) => total + v, 0)
    if (total % 2 === 1) return -1;
    
    const limit = arr.length * 2
    let count = 0;
    let l = 0;
    let r = queue1.length - 1;
    let sum = queue1.reduce((total, v) => total + v, 0);
    let target = total / 2;
    let len = arr.length;
    
    while (count < limit) {
        if (sum === target) return count;
        
        if (sum > target) {
            sum -= arr[l % len];
            l++;
        } else if (sum < target) {
            r++;
            sum += arr[r % len];
        } 
        count++;
    }
    return -1
}
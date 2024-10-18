function solution1(arr, k) {
    var answer = new Set(arr);
    
    answer = [...answer].slice(0, k);
    
    while (answer.length != k) {
        answer.push(-1)
    }
    
    return answer;
}

// 한줄 코드
function solution(arr, k) {
    return [...new Set(arr), ...new Array(k).fill(-1)].slice(0, k)
}
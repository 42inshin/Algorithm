function solution(arr, k) {
    var answer = new Set(arr);
    
    answer = [...answer].slice(0, k);
    
    while (answer.length != k) {
        answer.push(-1)
    }
    
    return  answer;
}
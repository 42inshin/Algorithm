function solution(arr) {
    var answer = [];
    
    arr.forEach(v => answer.push(...Array.from({length: v}, () => v)));
    return answer;
}
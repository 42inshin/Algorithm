function solution(arr) {
    return arr.map(v => Array(v).fill(v)).flat()
}


function solution1(arr) {
    var answer = [];
    
    arr.forEach(v => answer.push(...Array.from({length: v}, () => v)));
    return answer;
}
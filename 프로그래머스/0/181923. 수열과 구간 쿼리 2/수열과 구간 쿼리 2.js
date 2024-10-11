function solution(arr, queries) {
    var answer = [];
    
    queries.forEach(([s,e,k]) => {
        var a = arr.slice(s, e + 1)
        a = a.sort((a,b) => a - b).filter(v => v > k);
        answer.push(a.length ? a[0] : -1)
    })
    
    return answer;
}
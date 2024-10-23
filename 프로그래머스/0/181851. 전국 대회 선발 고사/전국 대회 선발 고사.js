function solution(rank, attendance) {
    var answer = [];
    
    for (let i = 0; i < rank.length; i++) {
        if (attendance[i] == true) {
            answer.push([rank[i], i])
        }
    }
    
    answer.sort((a,b) => a[0] - b[0]);
    let [a, b, c] = answer;
    
    return 10000 * a[1] + 100 * b[1] + c[1];
}
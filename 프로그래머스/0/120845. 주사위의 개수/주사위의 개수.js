function solution(box, n) {
    return box.reduce((acc, val) => acc * Math.floor(val / n), 1)    
}

/*
function solution(box, n) {
    var answer = 1;
    box.forEach(e => {
        answer *= Math.floor(e / n)     
    })
    return answer;
}
*/
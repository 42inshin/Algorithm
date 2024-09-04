function solution(box, n) {
    var answer = 0;
    box.forEach(e => {
        if (answer == 0) {
            answer = Math.floor(e / n)     
        } else {
            answer *= Math.floor(e / n)     
        }
    })
    return answer;
}
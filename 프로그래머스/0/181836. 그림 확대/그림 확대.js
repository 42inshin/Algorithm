function solution(picture, k) {
    var answer = [];
    
    for (let str of picture) {
        let temp = [...str].map(c => c.repeat(k)).join("");
        for (let i = 0; i < k; i++) {
            answer.push(temp);
        }
    }
    
    return answer;
}
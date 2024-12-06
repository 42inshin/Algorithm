function solution(k, score) {
    var temp = [];
    var answer = [];
    
    for (let i = 0; i < score.length; i++) {
        temp.push(score[i]);
        var topRank = temp.sort((a,b) => b - a).slice(0, k)
        answer.push(topRank[topRank.length - 1])
    }
    
    return answer;
}
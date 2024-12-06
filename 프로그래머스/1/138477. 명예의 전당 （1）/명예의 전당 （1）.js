function solution(k, score) {
    var topRank = [];
    var answer = [];
    
    for (let i = 0; i < score.length; i++) {
        topRank.push(score[i]);
        topRank = topRank.sort((a,b) => b - a).slice(0, k)
        answer.push(topRank[topRank.length - 1])
    }
    
    return answer;
}
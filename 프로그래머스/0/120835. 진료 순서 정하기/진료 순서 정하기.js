function solution(emergency) {
    var sortedEmergency = [...emergency].sort((a,b) => b - a);
    var answer = [];
    emergency.map(el => {
        answer.push(sortedEmergency.indexOf(el) + 1);
    })
    return answer;
}
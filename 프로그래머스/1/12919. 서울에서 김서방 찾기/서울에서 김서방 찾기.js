function solution(seoul) {
    var i = seoul.findIndex(v => v == "Kim")
    var answer = `김서방은 ${i}에 있다`;
    return answer;
}
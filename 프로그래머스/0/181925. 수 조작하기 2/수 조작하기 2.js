function solution(numLog) {
    var answer = '';
    
    for (let i = 1; i < numLog.length; i++) {
        var n = numLog[i] - numLog[i - 1];
        if (n == 1)
            answer += "w";
        else if (n == -1)
            answer += "s";
        else if (n == 10)
            answer += "d";
        else if (n == -10)
            answer += "a";
    }
    
    return answer;
}
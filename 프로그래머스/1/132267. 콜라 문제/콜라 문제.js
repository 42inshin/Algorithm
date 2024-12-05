function solution(a, b, n) {
    var answer = 0;
    var botles = n;
    while (botles >= a) {
        let eatBottles = parseInt(botles / a) * a;
        let newBottles = parseInt(botles / a) * b;
        
        answer += newBottles;
        botles = botles - eatBottles + newBottles;
    }
    
    
    return answer;
}
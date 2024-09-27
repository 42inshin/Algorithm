function solution(numbers) {
    var nString = numbers.map(v => String(v))
    var answer = nString.sort((a,b) => {
        if (a + b > b + a) return -1;
        if (a + b < b + a) return 1;
        return 0;
    });
    
    return answer[0] == "0" ? "0" : answer.join("");
}
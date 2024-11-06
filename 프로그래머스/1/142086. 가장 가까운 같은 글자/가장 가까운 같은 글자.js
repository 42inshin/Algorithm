function solution(s) {
    return [...s].map((char, i) => {
        var count = s.slice(0, i).lastIndexOf(char);
        return count == -1 ? count : i - count;
    })
}
    
function solution1(s) {
    var answer = [];
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i - 1; j >= -1; j--) {
            if (j == -1) {
                answer.push(j);
                break;
            } else if (s[j] == s[i]) {
                answer.push(i - j);
                break;
            }
        }
    }
    
    return answer;
}
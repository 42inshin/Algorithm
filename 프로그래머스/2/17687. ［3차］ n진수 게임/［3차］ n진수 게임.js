function solution(n, t, m, p) {
    var answer = '';
    var s = '';
    // 진법 변경 -> toString()
    // n: 진법
    // t: 내가 말해야할 숫자 개수
    // m: 게임 인원 수
    // p: 순서
    
    for (let i = 0; i < t * m; i++) {
        s += i.toString(n).toUpperCase()
    }
    
    for (let i = p - 1; answer.length < t; i += m) {
        answer += s[i];
    }
    
    return answer;
}
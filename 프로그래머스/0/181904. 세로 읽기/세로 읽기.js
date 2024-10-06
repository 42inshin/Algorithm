function solution(my_string, m, c) {
    let answer = ""
    for (let i = 0; i * m + c - 1 < my_string.length; i++) {
        answer += my_string[i * m + c - 1];
    }    
    
    return answer;
}
function solution(s) {
    const answer = [0, 0];
    
    while (s !== "1") {
        // 0 제거
        let temp = s.split("").filter(v => v != "0").join("");
        answer[1] += s.length - temp.length
        // 이진 변환
        s = temp.length.toString(2);
        answer[0] += 1;
    }
    return answer;
}
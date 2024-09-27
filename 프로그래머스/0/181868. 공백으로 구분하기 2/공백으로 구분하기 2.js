function solution(my_string) {
    return my_string.trim().split(/ +/g)
    // 정규식 설명
    // ' ' (공백 문자): 단일 공백 문자를 의미합니다.
    // + (플러스 기호): 앞의 공백 문자가 하나 이상 반복된다는 것을 나타냅니다.
    // /: 정규식 패턴의 시작과 끝을 표시하는 구분자입니다.
    // g (global 플래그): 문자열 전체에서 모든 패턴의 발생을 찾겠다는 의미입니다.
}
    
function solution1(my_string) {
    return my_string.trim().split(" ").filter(v => v != "")
}
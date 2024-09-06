/*
function solution(my_str, n) {
    var answer = [];
    var s = [...my_str]
    while (s.length) {
        answer.push(s.splice(0, n).join(''));
    }
    return answer;
}
*/

// 더 쉬운 방법
// . : 모든 문자
// {1, n} 최소 1번에서 최대 n번까지 임의의 문자와 매치. 즉 문자열을 n개의 문자 단위로 잘라 배열로 반환합니다.
function solution(my_str, n) {
    return my_str.match(new RegExp(`.{1,${n}}`, 'g'))
}
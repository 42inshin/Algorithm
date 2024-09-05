/*
function solution(before, after) {
    var b = [...before]
    var a = [...after]
    
    for (let i = 0; i < b.length; i++) {
        var check = a.indexOf(b[i])
        if (check != -1) {
            a.splice(check, 1)
        } else {
            return 0
        }
    }
    
    return 1
}
*/

// 다른 사람의 풀이에서 사용한 미친 방법.. 
// before, after의 문자열을 정리해서 비교한다.

function solution(before, after) {
    return [...before].sort().join() == [...after].sort().join() ? 1 : 0
}
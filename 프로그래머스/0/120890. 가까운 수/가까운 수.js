/*
function solution(array, n) {
    var copy = [...array].sort((a,b) => a - b)
    var a = copy.map(v => Math.abs(v - n))
    var min = Math.min(...a)
    
    return copy[a.indexOf(min)]
}
*/

// 한 줄로도 표현 가능
function solution(array, n) {
    return array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b)[0]
}
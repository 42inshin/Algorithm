/*
function solution(bin1, bin2) {
    return (convert2to10(bin1) + convert2to10(bin2)).toString(2)
}

function convert2to10(s) {
    var acc = 0
   var s = [...s].reverse()
   for (let i = 0; i < s.length; i++) {
       if (s[i] == '1')
           acc += 2 ** i
   }
    return acc
}
*/

// 쉬운 풀이.
// parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 구할 수 있다.

function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}
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
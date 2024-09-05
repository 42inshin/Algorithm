function solution(array, n) {
    var copy = [...array].sort((a,b) => a - b)
    var a = copy.map(v => Math.abs(v - n))
    var min = Math.min(...a)
    
    return copy[a.indexOf(min)]
}
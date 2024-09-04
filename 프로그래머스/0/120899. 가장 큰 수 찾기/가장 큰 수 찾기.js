function solution(array) {
    var max = Math.max(...array)
    var maxIndex = array.indexOf(max)
    
    return [max, maxIndex];
}

/*
function solution(array) {
    var max = Math.max(...array)
    var maxIndex = array.findIndex((e) => e == max)
    
    return [max, maxIndex];
}
*/
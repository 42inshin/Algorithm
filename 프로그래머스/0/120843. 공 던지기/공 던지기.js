/*
function solution(numbers, k) {
    var currentIndex = 0;
    var len = numbers.length;
    
    
    for (let i = 1; i < k; i++) {
        currentIndex += 2;
        if (currentIndex >= len) {
            currentIndex = currentIndex - len
        }
    }
    return numbers[currentIndex];
}
*/

// 쉬운 풀이
function solution(numbers, k) {
    return numbers[(--k*2) % numbers.length]
}
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
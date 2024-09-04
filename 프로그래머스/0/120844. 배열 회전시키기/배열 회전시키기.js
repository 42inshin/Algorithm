function solution(numbers, direction) {
    if (direction == "left") {
      var n = numbers.shift()
      numbers.push(n)
    } else {
        numbers.unshift(numbers[numbers.length - 1])
        numbers.pop()
    }
    return numbers;
}
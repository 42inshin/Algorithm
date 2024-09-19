function solution(numbers) {
    const numStrings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numStrings.forEach((n, i) => {
        numbers = numbers.replaceAll(n, i);
    })
    
    return parseInt(numbers)
}
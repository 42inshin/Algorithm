function solution(s) {
    let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    numArr.forEach((v, i) => {
        s = s.replaceAll(v, i)
    });
    return parseInt(s);
}
function solution(s) {
    let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let numStr = "0123456789"
    
    numArr.forEach((v, i) => {
        s = s.replaceAll(v, numStr[i])
    });
    return parseInt(s);
}
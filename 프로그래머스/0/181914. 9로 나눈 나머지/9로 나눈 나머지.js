function solution(number) {
    var arr = number.split("");
    
    var answer = arr.reduce((acc, val) => acc + val % 9, 0);
    
    return answer % 9;
}
function solution(num, total) {
    var isOdd = num % 2 != 0;
    var correction = isOdd ? 0 : 1;
    var mid = parseInt(total / num);
    var range = Math.floor(num / 2);
    var arr = []
    
    for (let i = 0; i < num; i++) {
        arr.push(mid - range + i + correction);
    }
    return arr;
}
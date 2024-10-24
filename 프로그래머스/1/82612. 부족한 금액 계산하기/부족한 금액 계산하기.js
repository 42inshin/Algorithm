function solution1(price, money, count) {
    var answer = 0;
    
    for (let i = 1; i <= count; i++) {
        answer += i * price;
    }
    
    return answer > money ? answer - money : 0;
}

// 가우스 공식 이용

function solution(price, money, count) {
    var answer = price * count * (count + 1) / 2 - money;
    return answer > 0 ? answer : 0;
}
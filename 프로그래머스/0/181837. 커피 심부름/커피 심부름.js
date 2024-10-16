function solution(order) {
    var answer = 0;
    
    for (let menu of order) {
        if (menu == "anything" || menu.includes("americano"))
            answer += 4500;
        else if (menu.includes("cafelatte"))
            answer += 5000;
    }
    
    return answer;
}
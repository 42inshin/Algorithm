function solution(food) {
    var answer = "";
    
    food.forEach((v, i) => {
        var half = parseInt(v / 2);
        answer += (String(i).repeat(half));
    })
    return answer + "0" + answer.split("").reverse().join(""); 
}
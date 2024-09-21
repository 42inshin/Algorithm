function solution(polynomial) {
    var answer = [0,0]
    var arr = polynomial.split(" + ");
    arr.forEach(v => {
        var hasX = v.indexOf("x");
        var num = +v.replace('x', '')
        
        if (hasX == 0)
            answer[0] += 1;
        else if (hasX > 0) {
            answer[0] += num
        } else {
            answer[1] += num
        }
    })
    
    if (answer[0] == 0)
        return answer[1].toString();
    else if (answer[1] == 0)
        return answer[0] == 1 ? "x" : answer[0] + "x";
    else
        return (answer[0] == 1 ? "x" : answer[0] + "x") + " + " + answer[1];
    
}
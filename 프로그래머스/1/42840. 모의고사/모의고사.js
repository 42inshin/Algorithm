function solution(answers) {
    var one = [1,2,3,4,5];
    var oneLen = one.length;
    var two = [2,1,2,3,2,4,2,5]
    var twoLen = two.length;
    var three = [3,3,1,1,2,2,4,4,5,5]
    var threeLen = three.length;
    var answer = [0,0,0];
    
    answers.forEach((v, i) => {
        if (v == one[i % oneLen])
            answer[0] += 1;
        if (v == two[i % twoLen])
            answer[1] += 1;
        if (v == three[i % threeLen])
            answer[2] += 1;
    })
    
    var max = Math.max(...answer);
    
    return answer.map((v,i) => {
        if (max == v)
            return i + 1;
    }).filter(v => v != null)
}
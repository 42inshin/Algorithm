function solution(s){
    var answer = true;
    let p = [...s.toLowerCase()].filter(v => v == "p")
    let y = [...s.toLowerCase()].filter(v => v == "y")

    if (p.length != y.length)
        answer = false;
    
    return answer;
}
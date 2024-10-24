function solution1(s){
    var answer = true;
    let p = [...s.toLowerCase()].filter(v => v == "p")
    let y = [...s.toLowerCase()].filter(v => v == "y")

    if (p.length != y.length)
        answer = false;
    
    return answer;
}

function solution(s){
    let p = s.match(/[pP]/g) || []
    let y = s.match(/[yY]/g) || []
    
    return p.length == y.length
}
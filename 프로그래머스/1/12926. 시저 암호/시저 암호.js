function solution(s, n) {
    const bigA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallA = bigA.toLowerCase();
    
    var answer = [...s].map(v => {
        let bigI = bigA.indexOf(v);
        let smallI = smallA.indexOf(v);
        if (v == " ")
            return v;
        if (bigI != -1)
            return bigA[(bigI + n) % bigA.length]
        if (smallI != -1)
            return smallA[(smallI + n) % bigA.length]
    })
    
    return answer.join("");
}
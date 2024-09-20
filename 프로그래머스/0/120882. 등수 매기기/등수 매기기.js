function solution(score) {
    var avg = score.map(v => {
       return (v[0] + v[1]) / 2
    });
    
    var sorted = [...avg].sort((a,b) =>  b - a)
    
    var answer = avg.map(v => {
        return sorted.findIndex(a => a == v) + 1
    })
    
    
    return answer
}
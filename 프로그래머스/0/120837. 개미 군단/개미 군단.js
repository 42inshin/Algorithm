function solution(hp) {
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + (hp % 5 % 3)
}


/*
function solution(hp) {
    var answer = 0;
    var ants = [5, 3, 1]
    
    ant1 = Math.floor(hp / ants[0])
    ant2 = Math.floor((hp - ants[0] * ant1) / ants[1])
    ant3 = Math.floor((hp  - ants[0] * ant1  - ants[1] * ant2) / ants[2])
    
    answer = ant1 + ant2 + ant3
    
    return answer;
}
*/
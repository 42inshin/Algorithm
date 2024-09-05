function solution(emergency) {
    var sortedEmergency = [...emergency].sort((a,b) => b - a);
    
    return emergency.map(el => {
        return sortedEmergency.indexOf(el) + 1;
    })
}
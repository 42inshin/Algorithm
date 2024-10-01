function solution(progresses, speeds) {
    var days = [];
    
    for (let i = 0; i < progresses.length; i++) {
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    var answer = [];
    var count = 1;
    var maxDay = days[0];
    for (let i = 1; i < days.length; i++) {
        var day = days[i];
        if (maxDay >= day) {
            count++;
            maxDay = Math.max(maxDay, day);
        } else {
            answer.push(count);
            maxDay = day;
            count = 1;
        }
    }
    
    if (count > 0)
        answer.push(count);
    
    return answer;
}
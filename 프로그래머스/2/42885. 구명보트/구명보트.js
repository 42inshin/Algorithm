function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    var answer = 0;
    
    
    while (people.length > 0) {
        if (people.at(-1) + people[0] <= limit) {
            people.shift();
        }
        people.pop();
        answer++;
    }
    
    return answer;
}
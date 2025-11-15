function solution(cards1, cards2, goal) {
    let answer = "Yes"
    let i1 = 0;
    let i2 = 0;
    for (let i = 0; i < goal.length; i++) {
        if (goal[i] == cards1[i1]) {
            i1++;
        } else if (goal[i] == cards2[i2]) {
            i2++;
        } else {
            answer = "No"
            break;
        }
    }
    return answer;
}
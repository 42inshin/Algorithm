function solution(quiz) {
    return quiz.map(v => {
        v = v.split(" ")
        let sign = v[1] == "+" ? 1 : -1
        return Number(v[0]) + Number(v[2]) * sign == Number(v[4]) ? "O" : "X"
    });
}
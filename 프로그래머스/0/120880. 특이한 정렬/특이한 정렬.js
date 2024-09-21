function solution(numlist, n) {
    return numlist.sort((a,b) => {
        var answer = Math.abs(n-a) - Math.abs(n-b)
        if (answer == 0)
            return b - a;
        return answer;
    })
}
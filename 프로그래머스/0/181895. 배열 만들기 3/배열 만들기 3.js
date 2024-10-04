function solution(arr, intervals) {
    let answer = intervals.map(([s, e]) => arr.slice(s, e + 1));
    console.log(arr)
    return answer.flat()
}
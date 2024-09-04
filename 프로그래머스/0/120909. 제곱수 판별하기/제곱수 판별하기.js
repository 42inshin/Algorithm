function solution(n) {
    let num = parseInt(Math.sqrt(n * 1))

    return num * num == n ? 1 : 2;
}
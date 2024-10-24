function solution(arr) {
    let minNum = Math.min(...arr);
    let i = arr.indexOf(minNum);
    arr.splice(i, 1);
    return arr.length ? arr : [-1]
}
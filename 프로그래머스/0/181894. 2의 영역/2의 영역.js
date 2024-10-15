function solution(arr) {
    const s = arr.indexOf(2);
    const e = arr.lastIndexOf(2);
    
    return s == -1 ? [-1] : arr.slice(s, e + 1);
}

function solution1(arr) {
    let count = 0, start = -1, end = 0;
    
    arr.forEach((_, i) => {
        if (arr[i] == 2 && count == 0) {
            start = i;
            end = i;
            count = 1;
        } else if (arr[i] == 2) {
            end = i;
        }
    })
    return start == -1 ? [-1] : arr.slice(start, end + 1);
}
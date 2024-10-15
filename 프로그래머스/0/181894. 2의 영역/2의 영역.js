function solution(arr) {
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
function solution(x, y, n) {
    let arr = new Array(y+1).fill(-1);
    arr[x] = 0;
    
    for (let i = x; i <= y; i++) {
        if (arr[i] == -1)
            continue;
        // x + n
        if (i+n <= y) {
            if (arr[i+n] == -1)
                arr[i+n] = arr[i] + 1
            else
                arr[i+n] = Math.min(arr[i] + 1, arr[i+n])
        }
            
        // x * 2
        if (i*2 <= y) {
            if (arr[i*2] == -1)
                arr[i*2] = arr[i] + 1
            else
                arr[i*2] = Math.min(arr[i] + 1, arr[i*2])
        }
        // x * 3
        if (i*3 <= y) {
            if (arr[i*3] == -1)
                arr[i*3] = arr[i] + 1
            else
                arr[i*3] = Math.min(arr[i] + 1, arr[i*3])
        }
    }
    console.log(arr)
    return arr[y];
}
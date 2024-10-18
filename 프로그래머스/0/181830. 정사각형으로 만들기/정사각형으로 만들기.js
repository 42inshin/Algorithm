function solution(arr) {
    let row = arr.length;
    let colum = arr[0].length;
    
    if (row > colum) {
        arr = arr.map(v => [...v, ...new Array(row - colum).fill(0)])
    } else if (row < colum) {
        let a = new Array(colum).fill(0)
        for (let i = 0; i < colum - row; i++)
            arr.push(a);
    }
    return arr;
}
function solution(arr, queries) {
    queries.map(([s, e]) => {
        arr.forEach((v,i) => {
            if (s <= i && i <= e)
                arr[i] += 1;
        })
    })
    
    return arr
}
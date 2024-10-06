function solution(arr, queries) {
    queries.forEach(([s, e]) => {
        while (s <= e) arr[s++] += 1;
    })
    
    return arr
}
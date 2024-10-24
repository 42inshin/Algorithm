function solution(arr1, arr2) {
    arr1.forEach((v, i) => {
        v.forEach((w, j) => {
            arr1[i][j] += arr2[i][j]
        })
    })
    return arr1;
}
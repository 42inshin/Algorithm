function solution(arr1, arr2) {
    return arr1.map((v, i) => v.map((w, j) => w + arr2[i][j]))
}
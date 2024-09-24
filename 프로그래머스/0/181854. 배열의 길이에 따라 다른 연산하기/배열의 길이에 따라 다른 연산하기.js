function solution(arr, n) {
    var len = arr.length;
    if (len % 2 != 0) {
        return arr.map((v, i) => {
            return (i % 2 == 0) ? v + n : v;
        });
    } else {
        return arr.map((v, i) => {
            return (i % 2 != 0) ? v + n : v;
        });
    }
}
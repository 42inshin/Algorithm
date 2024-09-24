function solution1(arr, n) {
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

function solution(arr, n) {
    return arr.map((v, i) => (arr.length - i) % 2 * n + v)
}
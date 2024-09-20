function solution(n) {
    var count = 1
    var i = 1;
    
    while (count <= n) {
        if (i % 3 == 0 || i.toString().indexOf('3') > -1) {
            i++;
        } else {
            count++;
            i++;
        }
        console.log(count, i)
    }
    
    return i - 1;
}
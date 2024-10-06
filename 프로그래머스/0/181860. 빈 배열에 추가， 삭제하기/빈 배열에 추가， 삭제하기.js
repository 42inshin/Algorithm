function solution(arr, flag) {
    var x = [];
    
    arr.forEach((v,i) => {
        let sign = flag[i];
        if (sign) {
            let j = -1;
            while (++j < v * 2)
                x.push(v);
        } else {
            let k = -1;
            while (++k < v)
                x.pop();
        }
    })
    
    return x;
}
function solution(s) {
    s = s.split(' ')

    return s.reduce((acc, val, i) => {
        if (val != 'Z') {
            return acc + Number(val);    
        } else {
            return acc - Number(s[i - 1]);
        }
    }, 0)
}
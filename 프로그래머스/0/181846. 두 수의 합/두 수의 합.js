function solution(a, b) {
    let aArr = [...a], bArr = [...b];
    let len = aArr.length > bArr.length ? aArr.length + 1 : bArr.length + 1;
    let answer = new Array(len).fill(0);
    
    for (let i = 0; i < len - 1; i++) {
        answer[len - (1 + i)] += parseInt(aArr[aArr.length - (1 + i)] || 0) + parseInt(bArr[bArr.length - (1 + i)] || 0); 
        if (answer[len - (1 + i)] > 9) {
            answer[len - 2 - i] += parseInt(answer[len - (1 + i)] / 10);
            answer[len - (1 + i)] %= 10;
        }
    }
    
    if (answer[0] == 0)
        answer.shift()
    
    return String(answer.join(""))
}


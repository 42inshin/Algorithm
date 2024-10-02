function solution(n, lost, reserve) {
    lost.sort((a,b) => a - b);
    // reserve.sort((a,b) => a - b);
    
    for (let man of lost) {
        if (reserve.findIndex(v => v == man) > -1) {
            reserve = reserve.filter(v => v != man);
            lost = lost.filter(v => v != man)
        }
    }
    
    for (let man of lost) {
        if (reserve.findIndex(v => v == man - 1) > -1) {
            reserve = reserve.filter(v => v != man - 1);
            lost = lost.filter(v => v != man)
        } else if (reserve.findIndex(v => v == man + 1) > -1) {
            reserve = reserve.filter(v => v != man + 1);
            lost = lost.filter(v => v != man)
        }
    }
    
    return n - lost.length;
}
//입력값 〉 5, [4, 5], [3, 4]
//기댓값 〉 4


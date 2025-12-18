const toMin = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m
}

function solution(book_time) {
    const events = [];
    const cleaningTime = 10;
    
    for (let [s, e] of book_time) {
        events.push([toMin(s), 1]);
        events.push([toMin(e) + cleaningTime, -1]);
    }
    
    // 시간 순으로 정렬. 동일한 시간은 종료 시간 먼저 처리
    events.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    
    let max = 0;
    let cur = 0;
    for (let [_, v] of events) {
        cur += v;
        max = Math.max(max, cur);
    }
    return max;
}
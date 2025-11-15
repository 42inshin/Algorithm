// 행동:
// 1. 안맞음. stack에 넣기
// 2. 맞음. 꺼내기

function solution(order) {
    let total = 0;
    let box = 1;
    const stack = [];
    
    while (true) {
        if (order.length === total) break;
        if (order[total] === box) {
            total++;
            box++;
        } else if (order[total] === stack.at(-1)) {
            stack.pop();
            total++;
        } else if (order[total] !== stack.at(-1)) {
            if (order[total] < stack.at(-1)) break;
            stack.push(box)
            box++;
        }
    }
    return total;
}
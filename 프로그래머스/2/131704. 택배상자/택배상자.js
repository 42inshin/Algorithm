// 행동:
// 1. 안맞음. stack에 넣기
// 2. 맞음. 꺼내기

function solution(order) {
    let answer = 0;
    const stack = [];
    const len = order.length
    const arr = Array(len).fill(1).map((e,i) => e + i)

    let j = 0; // order index
    
    for (let i = 0; i < arr.length; i++) {
        // 순서대로 안맞으면 넣는다.
        if (order[j] !== arr[i] && order[j] !== stack.at(-1)) {
            stack.push(arr[i]);
        } else if (order[j] === arr[i]) {
            answer++;
            j++;
        } else if (order[j] === stack.at(-1)) {
            while (order[j] === stack.at(-1)) {
                stack.pop();
                answer++;
                j++;
            }
            stack.push(arr[i]);
        }   
    }
    
    while (stack.length && order[j] === stack.at(-1)) {
        stack.pop();
        answer++;
        j++;
    }
    
    return answer;
}
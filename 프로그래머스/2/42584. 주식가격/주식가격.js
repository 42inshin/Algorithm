function solution(prices) {
    var answer = Array(prices.length).fill(0);
    const len = answer.length;
    const stack = [];
    
    for (let i = 0; i < len; i++) {
        while (stack.length && prices[i] < prices[stack.at(-1)]) {
            let pop = stack.pop();
            answer[pop] = i - pop;
        }
        stack.push(i)
    }
    
    while (stack.length) {
        let i = stack.pop();
        answer[i] = len - 1 - i;
    }
    
    return answer;
}
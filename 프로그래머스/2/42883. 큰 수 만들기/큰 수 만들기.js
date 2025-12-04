function solution(number, k) {
    const stack = [];
    
    for (let digit of number) {
        while (stack.length && k > 0 && digit > stack.at(-1)) {
            stack.pop();
            k--;
        }
        stack.push(digit)
    }
    
    return stack.slice(0, number.length - k).join("");
}
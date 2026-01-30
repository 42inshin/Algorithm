function solution(numbers, target) {
    var answer = 0;
    
    // +, - 별로 계속 합해야 함. 끝까지 가야하므로 dfs
    
    function dfs(index, sum) {
        // 종료조건: 끝까지 봤을때
        if (index === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0)
 
    return answer;
}

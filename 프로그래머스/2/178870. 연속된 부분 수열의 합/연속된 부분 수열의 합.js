function solution(sequence, k) {
    let start = 0, end = 0, sum = sequence[end];
    let len = sequence.length;
    var answer = [0, len];
    
    while (start < len && end < len) {
        if (sum < k) {
            sum += sequence[++end];
        } else if (sum > k) {
            sum -= sequence[start++];
        } else {
            var [a, b] = answer;
            if (b - a > end - start) {
                answer[0] = start;
                answer[1] = end;
            }
            sum -= sequence[start++];
        }
    }
    return answer;
}
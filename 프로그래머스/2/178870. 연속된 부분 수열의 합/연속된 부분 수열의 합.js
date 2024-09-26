function solution(sequence, k) {
    let start = 0, end = 0, sum = sequence[end];
    let len = sequence.length;
    let answer = [0, len - 1];
    
    while (start < len && end < len) {
        if (sum < k)
            sum += sequence[++end];
        else if (sum > k)
            sum -= sequence[start++];
        else {
            if (answer[1] - answer[0] > end - start)
                answer = [start, end];
            sum -= sequence[start++];
        }
    }
    return answer;
}
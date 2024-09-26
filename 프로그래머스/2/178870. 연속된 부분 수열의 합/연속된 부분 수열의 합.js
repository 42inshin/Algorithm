function solution(sequence, k) {
    let start = 0, end = 0, sum = sequence[end];
    let len = sequence.length;
    var answer = null;
    
    while (start < len && end < len) {
        if (sum < k) {
            sum += sequence[++end];
        } else if (sum > k) {
            sum -= sequence[start++];
        } else {
            if (!answer || answer[1] - answer[0] > end - start) {
                answer = [start, end];
            }
            sum -= sequence[start++];
        }
    }
    return answer;
}
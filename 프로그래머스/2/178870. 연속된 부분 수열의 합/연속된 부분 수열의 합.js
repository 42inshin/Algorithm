function solution(sequence, k) {
    let start = 0;
    let end = 0;
    let sum = sequence[start];
    let len = sequence.length;
    const answer = [start, len - 1];

    while (start < len && end < len) {
        if (sum < k) {
            sum += sequence[++end]
        } else if (sum > k) {
            sum -= sequence[start++]
        } else {
            // 더 짧은거 들고 있기
            if (answer[1] - answer[0] > end - start) {
                answer[0] = start;
                answer[1] = end;
            }
            sum -= sequence[start++]
        }
    }
    return answer;
}
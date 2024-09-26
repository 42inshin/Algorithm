function solution(sequence, k) {
    var answer = [];
    var kIndex = sequence.findIndex(a => a == k);
    if (kIndex != -1)
        return [kIndex,kIndex]
    let start = 0, end = 0, sum = sequence[end];
    let len = sequence.length;
    
    while (start < len && end < len) {
        if (sum < k) {
            sum += sequence[++end];
        } else if (sum > k) {
            sum -= sequence[start];
            start++;
        } else {
            answer.push([start, end])
            sum -= sequence[start];
            start++;
        }
    }
    
    answer.sort((a,b) => (a[1] - a[0]) - (b[1] - b[0]))
    
    return answer[0];
}
function solution(msg) {
    const alphaIndex = Object.fromEntries(
        Array.from({ length: 26 }, (_,i) => [String.fromCharCode(65 + i), i + 1])
    );
    const answer = [];
    let i = 0;
    let j = 1;
    let len = Object.keys(alphaIndex).length;
    
    while (i < msg.length) {
        let word = msg.slice(i, j);
        let wordIndex = alphaIndex[word]
        // 등록된 문자열이 없는 경우, 새로운 단어를 등록한 후 이전 값을 answer에 추가함.
        if (!wordIndex) {
            alphaIndex[word] = ++len;
            answer.push(alphaIndex[msg.slice(i, j - 1)]);
            i = j - 1;
        } else {
            if (j === msg.length) {
                answer.push(wordIndex);
                break;
            }
            j++;
        }
    }
    
    return answer;
}
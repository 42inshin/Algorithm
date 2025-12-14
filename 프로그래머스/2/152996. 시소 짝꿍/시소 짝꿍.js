function solution(weights) {
    let answer = 0;
    const store = {}; // 몸무게 빈도수를 저장할 객체 (Map 역할)

    // 1. 각 몸무게가 몇 명인지 카운트
    weights.forEach(w => {
        store[w] = (store[w] || 0) + 1;
    });

    // 2. 몸무게 리스트를 정렬 (중복 제거된 키들만 추출)
    // 오름차순 정렬을 해야 작은 몸무게부터 큰 몸무게 순으로 비교하며 중복 계산을 방지할 수 있습니다.
    const distinctWeights = Object.keys(store).map(Number).sort((a, b) => a - b);

    // 3. 각 몸무게에 대해 짝꿍 계산
    for (const w of distinctWeights) {
        const count = store[w];

        // Case A: 같은 몸무게끼리 짝꿍 (nC2 조합)
        if (count > 1) {
            answer += (count * (count - 1)) / 2;
        }

        // Case B: 다른 몸무게와 짝꿍 (현재 몸무게 w보다 무거운 사람만 찾음)
        // 시소 거리 비율에 따른 짝꿍 가능 몸무게 계산:
        // 1. (2m : 3m) 비율 -> w * 3/2
        // 2. (2m : 4m) 비율 -> w * 2
        // 3. (3m : 4m) 비율 -> w * 4/3

        // 계산된 짝꿍 몸무게가 store에 존재한다면, (현재 인원수 * 짝꿍 인원수)를 더함
        if (store[w * 3 / 2]) {
            answer += count * store[w * 3 / 2];
        }
        if (store[w * 2]) {
            answer += count * store[w * 2];
        }
        if (store[w * 4 / 3]) {
            answer += count * store[w * 4 / 3];
        }
    }

    return answer;
}
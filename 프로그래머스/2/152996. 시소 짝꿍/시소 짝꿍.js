function solution(weights) {
    let answer = 0;
    const store = {};

    weights.forEach(w => {
        store[w] = (store[w] || 0) + 1;
    });

    const weightKeys = Object.keys(store).sort((a, b) => a - b);

    for (const w of weightKeys) {
        const count = store[w];

        if (count > 1) {
            answer += (count * (count - 1)) / 2;
        }

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
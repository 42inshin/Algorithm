function solution(arr) {
    const answer = [0, 0]
    let len = arr.length;
    
    const quadtree = (answer, arr) => {
        // 전체 값이 같은지 확인
        const len = arr.length;
        // const all = arr.reduce((a,b) => [...a, ...b], []);
        const all = [];
        for (let i = 0; i < arr.length; i++) {
            // concat도 새 배열 생성이라 비추, push로만 붙이기
            for (let j = 0; j < arr[i].length; j++) {
                all.push(arr[i][j]);
            }
        }
        // 배열 모든 값이 동일한 경우 종료
        const same = all.every(v => v === all[0]);
        if (same) {
            if (all[0] == 0) answer[0] += 1;
            else answer[1] += 1;
            
            return ;
        }
        
        // 원소가 4개인 경우,
        if (len == 2) {
            const zeroSum = all.filter(v => v === 0).length;
            answer[0] += zeroSum;
            answer[1] += all.length - zeroSum;
            
            return;
        }
        
        // 4개로 쪼개기
        let half = len / 2;
        // top, left
        const d1 = generateArray(arr, 0, half, 0, half);
        // top, right
        const d2 = generateArray(arr, 0, half, half, len);
        // down, left
        const d3 = generateArray(arr, half, len, 0, half);
        // down, right
        const d4 = generateArray(arr, half, len, half, len);
        quadtree(answer, d1)
        quadtree(answer, d2)
        quadtree(answer, d3)
        quadtree(answer, d4)
    }
    
    quadtree(answer, arr)
    
    return answer;
}

function generateArray(arr, t, d, l, r) {
    const newArr = [];
    
    for (let i = t; i < d; i++) {
        newArr.push(arr[i].slice(l, r))
    }
    
    return newArr
}
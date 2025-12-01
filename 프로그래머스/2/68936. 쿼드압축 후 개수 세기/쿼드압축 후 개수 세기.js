function solution(arr) {
    const answer = [0, 0]
    
    const quadtree = (answer, arr) => {
        // 전체 값이 같은지 확인
        const len = arr.length;
        const first = arr[0][0];
        let same = true;
        
        outer: for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] !== first) {
                    same = false;
                    break outer;
                }
            }
        }
        // 배열 모든 값이 동일한 경우 종료
        if (same) {
            answer[first] += 1;
            return ;
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
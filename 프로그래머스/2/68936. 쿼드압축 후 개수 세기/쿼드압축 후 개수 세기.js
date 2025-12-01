function solution(arr) {
    const answer = [0, 0]
    
    const quadtree = (x, y, size) => {
        const first = arr[y][x];
        let same = true;
        
        outer: for (let i = y; i < y + size; i++) {
            for (let j = x; j < x + size; j++) {
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
        let half = size / 2;
        quadtree(x, y, half)
        quadtree(x + half, y, half)
        quadtree(x, y + half, half)
        quadtree(x + half, y + half, half)
    }
    
    quadtree(0, 0, arr.length)
    return answer;
}
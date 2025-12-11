function solution(storey) {
    let count = 0;
    
    // 1, 10, 100, ... 순으로 절반 기준(5)으로 위로 보낼지 아래로 보낼지 선택하기
    while (storey > 0) {
        let remain = storey % 10;
        
        
        if (remain == 5 && storey % 100 >= 50) {
        // remain 이 5일때는 조건 추가해야 함. 십의 자리가 5이상이면 위로    
            storey += 10 - remain;
            count += 10 - remain;
        } else if (remain > 5) { // > 일때 1,3,12 틀림 / >= 일때 5,6,8,9 틀림
            // 1의 자리 숫자가 5보다 클때 위로 보내기
            storey += 10 - remain;
            count += 10 - remain;
        } else if (remain != 0) {
            storey -= remain;
            count += remain;
        }
        storey /= 10;
    }
    
    return count;
}
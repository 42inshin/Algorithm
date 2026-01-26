function solution(arr) {
    var answer = Math.max(...arr);
    let count = 2;
    
    while (true) {
        if (arr.every(v => (answer * count) % v == 0))
            return answer * count;
        else
            count++;
    }
}

// arr에서 가장 큰값을 꺼내서 배수를 해보면서 전체가 나눠떨어지는지 확인하는 방식으로 구현
// 1. 배열 정렬
// 2. 가장 큰수를 *2 , *3 해보면서 전체가 다 나눠지는지 확인
// 3. 다 나눠지는 숫자 반환
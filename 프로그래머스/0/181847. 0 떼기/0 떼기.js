function solution(n_str) {
    var answer = '';
    let sign = 0;
    
    [...n_str].forEach(v => {
        if (sign == 0 && v == "0") {
            return ;
        }
        else {
            sign = 1;
            answer += v;
            return ;
        }      
    })
    
    return answer;
}

// string을 Number 자료형에 넣으면, 앞에 00이 없어짐.
// return String(Number(n_str)); 
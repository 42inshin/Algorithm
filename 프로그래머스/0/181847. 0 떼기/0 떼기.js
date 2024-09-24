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
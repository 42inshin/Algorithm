function solution(num_list, n) {
    var result = []
    while (num_list.length) {
        result.push(num_list.splice(0,n))
    }
    return result
}

/*
function solution(num_list, n) {
    var answer = [];
    var tempArr = [];
    for (let i = 0; i < num_list.length; i++) {
        if (i != 0 && i % n == 0) {
            answer.push(tempArr);
            tempArr = [];
        }
        tempArr.push(num_list[i])
    }
    answer.push(tempArr);
    
    return answer;
}
*/
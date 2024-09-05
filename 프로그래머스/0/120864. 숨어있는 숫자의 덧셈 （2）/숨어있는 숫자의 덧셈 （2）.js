function solution(my_string) {
    var sum = 0;
    
    my_string.split(/[a-zA-Z]/).map(v => {
        if (parseInt(v)) {
            sum += parseInt(v)
        }
    })
    
    return sum
}

// 한 줄 코드
//  console.log(my_string.split(/[a-zA-Z]/).reduce((acc, v) => acc + Number(v), 0))
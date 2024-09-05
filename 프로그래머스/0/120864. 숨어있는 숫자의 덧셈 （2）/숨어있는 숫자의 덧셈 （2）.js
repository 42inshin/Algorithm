function solution(my_string) {
    var sum = 0;
    
    my_string.split(/[a-zA-Z]/).map(v => {
        if (parseInt(v)) {
            sum += parseInt(v)
        }
    })
    
    return sum
}
function solution(my_string) {
    return my_string
        .split("")
        .filter(v => !isNaN(v))
        .map(v => parseInt(v))
        .sort((a,b) => a - b)
}

/*
function solution(my_string) {
    var answer = []
    
    var s = my_string.split("").filter(e => {
     if (Number.isInteger(parseInt(e))) {
        answer.push(parseInt(e))
     }
    })
    
    return answer.sort((a,b) => a - b)
}
*/
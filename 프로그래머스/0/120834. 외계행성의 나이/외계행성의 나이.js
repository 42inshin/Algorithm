function solution(age) {
    return age
        .toString()
        .split('')
        .map(v => "abcdefghij"[v])
        .join('')
        
}

/*
function solution(age) {
    var answer = "";
    
    age.toString().split('').map(v => {
       return answer += String.fromCharCode(parseInt(v)+ 97) 
    }) 
    return answer
}
*/
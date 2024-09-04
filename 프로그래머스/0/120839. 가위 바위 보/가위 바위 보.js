function solution(rsp) {
    let answer = ""
        
    rsp.split("").map(c => {
        if (c == "2") {
         answer += "0"
        } else if (c == "0") {
            answer += "5"
        } else {
            answer += "2"
        }
    })
    
    return answer;
}
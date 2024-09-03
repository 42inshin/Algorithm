function solution(cipher, code) {
    var arr = cipher.split("");
    var num = Math.floor(arr.length / code)
    var answer = ""
    
    for (let i = 0; i < num; i++) {
        answer += arr[(i + 1) * code - 1]
    }
    
    return answer
}
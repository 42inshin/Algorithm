function solution(myString, pat) {
    let count = 0;
    
    for (let i = 0; i <= myString.length - pat.length; i++) {
        if (myString.slice(i, i + pat.length) == pat)
            count++;
    }
    return count;
}

function solution1(myString, pat) {
    var answer = 0;
    
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] == pat[0]) {
            for (let j = 1; j < pat.length; j++) {
                if (myString[i + j] != pat[j]) {
                    break;
                }
                else if (j == pat.length - 1) {
                    answer++;
                }
                    
            }
        }
    }
     
    return answer;
}
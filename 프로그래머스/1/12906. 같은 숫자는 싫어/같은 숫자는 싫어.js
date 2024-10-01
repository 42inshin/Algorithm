function solution(arr)
{
    var answer = [];
    var temp = null;

    for (let i = 0; i < arr.length; i++) {
        var n = arr[i]
        if (temp != n) {
            answer.push(n);
            temp = n;
        }
    }
    
    return answer;
}
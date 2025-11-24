function solution(n, arr1, arr2) {
    return Array(n).fill().map((_, i) => {
        return (arr1[i] | arr2[i]).toString(2).padStart(n, ' ').replace(/1/g, '#').replace(/0/g, ' ');
    })
}
/*
function solution(n, arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i < n; i++) {
        const s1 = arr1[i].toString(2).padStart(n, '0');
        const s2 = arr2[i].toString(2).padStart(n, '0');
        let row = '';
        for (let j = 0; j < n; j++) {
            if (s1[j] == '1' || s2[j] == '1')
                row += '#'
            else
                row += ' '
        }
        answer.push(row)
    }
    
    return answer;
}
*/
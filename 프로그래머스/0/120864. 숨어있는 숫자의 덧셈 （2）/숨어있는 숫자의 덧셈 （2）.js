
// 한 줄 코드
function solution(my_string) {
    return my_string.split(/[a-zA-Z]/).reduce((acc, v) => acc + Number(v), 0)
}
// Number에 빈문자열, 공백을 넣으면 0이 나오며, 숫자가 아닌걸 넣으면 NaN이 나온다. 위 코드에서는 "" 이 포함되어 있으며 0으로 변경되어 동작한다.

/*
function solution(my_string) {
    var sum = 0;
    my_string.split(/[a-zA-Z]/).map(v => {
        if (parseInt(v)) {
            sum += parseInt(v)
        }
    })
    return sum
}
*/
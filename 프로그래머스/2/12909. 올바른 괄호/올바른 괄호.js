function solution(s){
    var count = 0;

    for (let v of s) {
        (v == "(") ? count++ : count--;
        if (count < 0)
            return false;
    }

    return count == 0;
}
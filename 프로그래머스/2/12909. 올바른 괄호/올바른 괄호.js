function solution(s){
    var count = 0;

    for (let c of s) {
        count += (c == "(") ? 1: -1;
        if (count < 0)
            return false;
    }

    return !count;
}
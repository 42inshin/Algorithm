function solution(s){
    var count = 0;
    var sign = true;

    [...s].forEach(v => {
        if (v == "(")
            count++;
        else
            count--;
        if (count < 0)
            sign = false;
    })

    return sign && count == 0;
}
function solution1(str_list) {
    var answer = [];
    
    var l = str_list.findIndex(v => v == "l");
    var r = str_list.findIndex(v => v == "r");
    
    if (l > -1 && r > -1) {
        if (l < r)
            answer = str_list.slice(0, l);
        else
            answer = str_list.slice(r + 1);
    } else if (l > -1) {
        answer = str_list.slice(0, l);
    } else if (r > -1) {
        answer = str_list.slice(r + 1);
    }
    
    return answer;
}

function solution(str_list) {
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] == "l") return str_list.slice(0, i);
        if (str_list[i] == "r") return str_list.slice(i + 1);
    }
    return []
}
function solution(str_list) {
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
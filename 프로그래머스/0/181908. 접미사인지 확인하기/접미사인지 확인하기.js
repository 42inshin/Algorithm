function solution(my_string, is_suffix) {
    let n = my_string.length - 1;
    let m = is_suffix.length - 1;
    
    if (m > n)
        return 0;
    
    while (m > -1 && n > -1) {
        if (my_string[n] != is_suffix[m])
            return 0;
        m--;
        n--;
    }
    return 1;
}
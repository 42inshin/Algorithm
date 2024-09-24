function solution(num_list) {
    var odd = 0, even = 0;
    
    num_list.forEach((v,i) => {
        if (i % 2 == 0)
            odd += v;
        else 
            even += v;
    })
    return Math.max(odd, even);
}
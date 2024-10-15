function solution1(n, slicer, num_list) {
    let [a,b,c] = slicer;
    
    switch (n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        case 4:
            return num_list.slice(a, b + 1).filter((_, i) => i % c == 0);
        default:
            break;
    }
}

function solution(n, slicer, num_list) {
    const obj = {
        1: ([a,b,c], num_list) => num_list.slice(0, b + 1),
        2: ([a,b,c], num_list) => num_list.slice(a),
        3: ([a,b,c], num_list) => num_list.slice(a, b + 1),
        4: ([a,b,c], num_list) => num_list.slice(a, b + 1).filter((_, i) => i % c == 0)
    }
    
    return obj[n](slicer, num_list);
}
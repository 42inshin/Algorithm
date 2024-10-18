function solution(my_string, queries) {
    let str = [...my_string];
    
    queries.forEach(([s, e]) => {
        let temp = str.slice(s, e + 1).reverse();
        str.splice(s, temp.length, ...temp);
    })
    
    return str.join("")
}
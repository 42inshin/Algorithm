function solution(my_string, indices) {
    indices.sort((a,b) => b - a);
    let copy = [...my_string]
    for (let v of indices)
        copy.splice(v, 1);
    return copy.join("");
}
// 내 풀이
function solution1(my_string, indices) {
    indices.sort((a,b) => b - a);
    let copy = [...my_string]
    for (let v of indices)
        copy.splice(v, 1);
    return copy.join("");
}

function solution(my_string, indices) {
    return [...my_string].filter((_, i) => !indices.includes(i)).join("")
}
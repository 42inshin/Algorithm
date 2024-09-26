function solution(myString) {
    return myString.replace(/[a-k]/g, "l")
}

function solution1(myString) {
    return [...myString].map(v => (v > "l") ? v : "l").join("")
}
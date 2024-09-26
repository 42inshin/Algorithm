function solution(myString, pat) {
    let newString = myString.split("").map(v => v == "A" ? "B" : "A").join("");
    
    return +newString.includes(pat)
}
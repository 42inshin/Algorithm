function solution(myString, pat) {
    var lastIndex = myString.lastIndexOf(pat)
    return myString.slice(0, lastIndex + pat.length);
}
function solution(babbling) {
    var newBabbling = babbling.map(word => {
        var newWord =  word;
        ["aya", "ye", "woo", "ma"].forEach(re => newWord = newWord.replace(re, "-"));
        return newWord.replaceAll("-", "");
    });
    
    return newBabbling.filter(v => v == "").length;
}
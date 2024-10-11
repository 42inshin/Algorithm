function solution(spell, dic) {
    var newDic = dic.map(word => {
        var newWord = word;
        if (word.length == spell.length)
            spell.forEach(v => { newWord = newWord.replace(v, "") });
        return newWord;
    })
    return newDic.filter(v => v == "").length ? 1 : 2 
}
function solution(before, after) {
    var b = [...before]
    var a = [...after]
    
    for (let i = 0; i < b.length; i++) {
        var check = a.indexOf(b[i])
        if (check != -1) {
            a.splice(check, 1)
        } else {
            return 0
        }
    }
    
    return 1
}
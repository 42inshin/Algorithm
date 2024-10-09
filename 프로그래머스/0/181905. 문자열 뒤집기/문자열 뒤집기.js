function solution(my_string, s, e) {
    var str = [...my_string]
    var endStr = str.splice(e + 1)
    var revStr = str.splice(s, e + 1).reverse()

    return str.concat(revStr).concat(endStr).join("");
}
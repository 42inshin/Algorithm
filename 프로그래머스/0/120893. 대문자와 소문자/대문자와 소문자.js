function solution(my_string) {    
    return my_string.split("").map((c => c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join("")   
}

/*
function solution(my_string) {    
    return my_string.split("").map((el) => {
        if (el == el.toUpperCase()) {
            return el.toLowerCase()
        } else {
            return el.toUpperCase()
        }
    }).join("");
}
*/
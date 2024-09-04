function solution(order) {
    return order.toString().split(/[369]/).length - 1
}

// function solution(order) {
//     return order.toString().split("").filter(v => v != "0" && v*1 % 3 == 0).length
// }
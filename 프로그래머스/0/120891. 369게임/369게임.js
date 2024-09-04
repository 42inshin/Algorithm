function solution(order) {
    return order.toString().split("").filter(v => v != "0" && v*1 % 3 == 0).length
}
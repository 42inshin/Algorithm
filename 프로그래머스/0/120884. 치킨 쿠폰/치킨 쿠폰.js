function solution(chicken) {
    var answer = 0;
    var coupon = chicken;
    
    while (coupon >= 10) {
        var newCoupon = Math.floor(coupon / 10)
        answer += newCoupon;
        coupon = newCoupon + coupon % 10
    }
    
    return answer
}
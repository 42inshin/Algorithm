import Foundation

func solution(_ chicken:Int) -> Int {
    var answer = 0
    var coupon = chicken
    
    while (coupon >= 10) {
        let thisTime = coupon / 10
        answer += thisTime
        coupon = thisTime + coupon % 10
    }
    
    return answer
}
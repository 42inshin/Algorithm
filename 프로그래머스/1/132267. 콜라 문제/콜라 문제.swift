import Foundation

func solution(_ a:Int, _ b:Int, _ n:Int) -> Int {
    var remain = n
    var sum = 0
    
    while remain >= a {
        let give = remain / a * a
        let take = remain / a * b
        remain += take - give
        sum += take
    }
    return sum
}
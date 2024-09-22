import Foundation

func solution(_ num:Int, _ total:Int) -> [Int] {
    let mid = total / num + (num % 2 == 0 ? 1 : 0)
    let midIdx = num / 2
    
    return (0..<num).map { mid - midIdx + $0 }
}
import Foundation

func solution(_ arr:[Int], _ n:Int) -> [Int] {
    let cnt = arr.count
    var ans = [Int](repeating: 0, count: cnt)
    
    for i in 0..<cnt {
        ans[i] = arr[i] + (cnt % 2 + i % 2) % 2 * n
    }
    
    return ans
}
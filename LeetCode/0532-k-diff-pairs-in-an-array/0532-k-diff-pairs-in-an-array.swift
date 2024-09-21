import Foundation

class Solution {
    func findPairs(_ nums: [Int], _ k: Int) -> Int {
        let sorted = nums.sorted()
        var left = 0, right = 1
        var ans = Set<Int>()

        while (right < nums.count) {
            let diff = sorted[right] - sorted[left]
            if diff == k {
                ans.insert(sorted[right] + sorted[left])
                left += 1
                right += 1
            } else if diff < k {
                right += 1
            } else { 
                left += 1
                right += left == right ? 1 : 0
            }
        }

        return ans.count
    }
}
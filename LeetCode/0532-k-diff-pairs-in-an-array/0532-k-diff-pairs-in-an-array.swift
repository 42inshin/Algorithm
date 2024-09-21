class Solution {
    func findPairs(_ nums: [Int], _ k: Int) -> Int {
        let sorted = nums.sorted()
        var left = 0, right = 1
        var ans = Set<Int>()

        while (right < nums.count) {
            let diff = sorted[right] - sorted[left]
            if diff == k {
                ans.insert(sorted[right] + sorted[left])
            }
            left += diff < k ? 0 : 1
            right += diff <= k ? 1 : (left == right ? 1 : 0)
        }

        return ans.count
    }
}
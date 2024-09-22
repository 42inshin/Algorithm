import Foundation

func solution(_ board:[[Int]]) -> Int {
    let n = board.count
    var ans = 0
    let dr = [-1, 0, 1, -1, 0, 1, -1, 0, 1]
    let dc = [-1, -1, -1, 0, 0, 0, 1, 1, 1]
    
    func isBomb(_ row: Int, _ col: Int) -> Bool {
        if row < 0 || col < 0 || row >= n || col >= n { return false }
        return board[row][col] == 1
    }
    
    for i in 0..<n {
        for j in 0..<n {
            for k in 0..<9 {
                if isBomb(i + dr[k], j + dc[k]) { 
                    ans += 1
                    break
                }
            }
        }
    }
    
    return n * n - ans
}
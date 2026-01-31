import Foundation

func canChange(from: String, to: String, done: [String]) -> Bool {
    if done.contains(to) { return false }
    
    var diff = 0
    let f = Array(from)
    let t = Array(to)

    for i in 0..<f.count {
        if f[i] != t[i]  { diff += 1 }
    }
    
    return diff == 1
}

func solution(_ begin:String, _ target:String, _ words:[String]) -> Int {
    var queue: [[String]] = []
    var ans = 0
    
    queue.append([begin])
    while !queue.isEmpty {
        var pop = queue.removeFirst()
        guard let last = pop.last else { break }

        if last == target { 
            ans = pop.count - 1
            break
        }
        for word in words {
            if canChange(from: last, to: word, done: pop) {
                let newArr = pop + [word]
                queue.append(newArr)
            }
        }
    }

    return ans
}
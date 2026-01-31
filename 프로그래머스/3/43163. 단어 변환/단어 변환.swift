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
    var queue: [([String], Int)] = []
    var ans = 0
    
    queue.append(([begin], 0))
    while !queue.isEmpty {
        var pop = queue.removeFirst()
        guard let last = pop.0.last else { break }

        if last == target { 
            ans = pop.1
            break
        }
        for word in words {
            if canChange(from: last, to: word, done: pop.0) {
                let newArr = pop.0 + [word]
                queue.append((newArr, pop.1 + 1))
            }
        }
    }

    return ans
}
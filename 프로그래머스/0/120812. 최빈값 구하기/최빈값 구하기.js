function solution(array) {
 let m = new Map()
 
 for (let n of array) {
     m.set(n, (m.get(n) ?? 0) + 1)
 }
    

 let arr = [...m].sort((a, b) => b[1] - a[1])
 
 if (arr.length === 1 || arr[0][1] > arr[1][1]) {
    return arr[0][0]
 }
    return -1
}

/*
function solution(array) {
    var obj = {}
    
    array.forEach((el) => {
        if (obj[el]) {
            obj[el] += 1
        } else {
            obj[el] = 1
        }
    })
    
    var keys = Object.keys(obj)
    var values = Object.values(obj)
    
    var maxKey = null
    var maxValue = 0
    var count = 0
        
    keys.forEach(key => {    
        if (obj[key] > maxValue) {
            maxKey = key;
            maxValue = obj[key];
            count = 1
        } else if (obj[key] == maxValue) {
            count++
        }
    })
    return count > 1 ? -1 : parseInt(maxKey)
}
*/
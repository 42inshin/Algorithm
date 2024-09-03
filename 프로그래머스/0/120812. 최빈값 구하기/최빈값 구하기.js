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
function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join('')
}

/*
function solution(my_string) {
    return my_string
        .split('')
        .map(c => c.toLowerCase())
        .sort()
        .join('')
}
*/
function solution(s) {
    return s.replace(/./g, c => c.toLowerCase()).replace(/\b[a-z]/g, c => c.toUpperCase());
}
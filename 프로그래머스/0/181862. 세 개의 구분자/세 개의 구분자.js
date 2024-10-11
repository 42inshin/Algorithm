function solution(myStr) {
    var answer = myStr.split(/[abc]/g).filter(v => v != "");
    return answer.length ? answer : ["EMPTY"];
}
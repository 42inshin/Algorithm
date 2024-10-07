/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
    var reverse = [...str].reverse().join("")
    var [s, e] = [-1, -1];
    var answer = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] == reverse[i]) {
            if (s == -1)
                s = i;
            e = i;
        } else {
            if (s != -1)
                answer.push([e - s + 1, [s, e]]);
            s = -1;
            e = -1;
        }
    }

    if (s != -1)
        answer.push([e - s + 1, [s, e]]);

    answer.sort((a,b) => b[0] - a[0]);
    if (answer.length > 0) {
        var [count, [a, b]] = answer[0]
        return str.slice(a, b+1);
    } else {
        return str[0]
    }
};
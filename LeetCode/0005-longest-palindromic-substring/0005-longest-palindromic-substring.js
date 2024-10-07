/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // for 문을 통해서 처음부터 끝까지 갈건데, 양쪽으로 같은게 있으면 확장시켜 보자.
    var maxStart = 0, maxLen = 0;

    if (s.length == 1) return s;

    // 양쪽 같은지 확인 하는 함수.
    var checkPal = (start, end) => {
        while (start >= 0 && start < s.length && end >= 0 && end < s.length) {
            if (s[start] == s[end]) {
                start--;
                end++;
            } else {
               break;
            }
        }
        return [start + 1, end - start]
    }

    for (let i = 0; i < s.length; i++) {
        var [start, len] = checkPal(i, i)
        if (len > maxLen) {
            maxLen = len;
            maxStart = start;
        }
        var [start2, len2] = checkPal(i, i+1)
        if (len2 > maxLen) {
            maxLen = len2;
            maxStart = start2;
        }
    }
    return s.substring(maxStart, maxStart + maxLen - 1)
};

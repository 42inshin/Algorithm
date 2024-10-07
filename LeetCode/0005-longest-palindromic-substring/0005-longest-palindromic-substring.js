/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // for 문을 통해서 처음부터 끝까지 갈건데, 양쪽으로 같은게 있으면 확장시켜 보자.
    var maxStart = 0, maxEnd = 0, maxLen = 0;

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
        
        if (end - start > maxLen) {
            maxLen = end - start;
            maxStart = start + 1;
            maxEnd = end;
        }
    }

    for (let i = 0; i < s.length; i++) {
        checkPal(i, i)
        checkPal(i, i+1)
    }
    
    return s.substring(maxStart, maxEnd)
};

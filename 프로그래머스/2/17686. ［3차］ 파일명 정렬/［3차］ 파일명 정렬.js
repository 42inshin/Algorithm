const getFileToken = (file) => {
    const result = file.match(/(.*?)(\d+)(.*)/);
    return result;
}

function solution(files) {
    return files.sort((a, b) => {
        const [allA, headA, numberA, tailA] = getFileToken(a);
        const [allB, headB, numberB, tailB] = getFileToken(b);
        // 파일명
        if (headA.toLowerCase() !== headB.toLowerCase())
            return headA.toLowerCase() < headB.toLowerCase() ? -1 : 1
        // 숫자
        if (Number(numberA) !== Number(numberB))
            return Number(numberA) - Number(numberB)
    })
}
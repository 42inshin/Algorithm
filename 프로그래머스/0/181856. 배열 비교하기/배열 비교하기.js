function solution(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;
    const sum1 = arr1.reduce((acc, v) => acc + v, 0);
    const sum2 = arr2.reduce((acc, v) => acc + v, 0);
    
    if (len1 < len2)
        return -1;
    else if (len1 > len2)
        return 1;
    else
        return (sum1 > sum2) ? 1 : sum1 < sum2 ? -1 : 0;
}
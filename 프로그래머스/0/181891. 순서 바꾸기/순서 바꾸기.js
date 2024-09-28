function solution(num_list, n) {
    const nArr = num_list.splice(n);
    return [...nArr, ...num_list];
}
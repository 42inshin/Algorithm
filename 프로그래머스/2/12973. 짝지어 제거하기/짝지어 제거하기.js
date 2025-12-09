function solution(s) {
    const st = [];
    
    for (let c of s) {
        if (st.at(-1) == c) {
            st.pop();
        } else {
            st.push(c);
        }
    }
    
    return st.length == 0 ? 1 : 0;
}